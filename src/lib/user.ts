import { type Readable, readable, type Updater } from 'svelte/store';

import { browser } from '$app/environment';
import { PUBLIC_WEB3AUTH_CLIENT_KEY } from '$env/static/public';
import {
  initModal,
  initNoModal,
  initWallet,
  type SolanaWallet,
  type UserAuthInfo,
  wallet_adapters
} from '$vendor/web3auth';

interface UserStore {
  accounts?: string[];
  connect?: () => Promise<void>;
  disconnect?: () => Promise<void>;
  isConnected: boolean;
  isReady: boolean;
  info?: Partial<UserAuthInfo>;
  wallet?: SolanaWallet | undefined;
}

export type UserContext = Readable<UserStore>;

export function createStore() {
  return readable<UserStore>(undefined, (set, update) => {
    set({ isConnected: false, isReady: false });

    // WARN: Svelte stores are shared on the server. See:
    // https://kit.svelte.dev/docs/state-management#avoid-shared-state-on-the-server
    // Best practice is to use `setContext()` and `getContext()`, which allows
    // you to store arbitrary values which will be shared with all descendants
    // in the component tree from where it's used.
    //
    // You can also use the `browser` flag to only initialize specific data on
    // the client. In the case of our `UserStore`, everything needs to be
    // initialized on the client anyway. Not guarding this makes Svelte hurl.
    if (!browser) return;

    init({ set, update });
  });
}

async function init({
  set,
  update
}: {
  set: (value: UserStore) => void;
  update: (fn: Updater<UserStore>) => void;
}) {
  const web3auth = await initModal({ clientId: PUBLIC_WEB3AUTH_CLIENT_KEY });

  let provider = web3auth.provider;
  let [info, wallet] = await Promise.all([
    web3auth.connected ? web3auth.getUserInfo() : undefined,
    provider && web3auth.connected ? initWallet(provider) : undefined
  ]);
  let accounts = wallet ? await wallet.requestAccounts() : undefined;

  // for analytics + user profile settings we persist some of the data
  //   into the db on connect from web3auth once the user has connected
  async function connect() {
    if (web3auth.connected) return;

    provider = await web3auth.connect();

    if (!provider) throw new Error('Cannot initialize wallet: no provider.');

    [info, wallet] = await Promise.all([
      web3auth.getUserInfo(),
      initWallet(provider)
    ]);

    accounts = await wallet?.requestAccounts();

    // ! NOTE: if we were to directly insert to db here, we would be importing
    // from lib/server, which would turn this module into server-side
    // and by default stuff in lib is shared. so importing this module
    // in client-side code would not work.
    // therefore, we communicate with the api server code through post requests
    if (info.verifierId) {
      const response = await fetch('/api/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(info),
      });

      if (!response.ok) {
        throw new Error('Failed to create user');
      }
    }
    // TODO: set cookie for login so we can SSR.
    // const { idToken } = (await web3auth.authenticateUser());

    update((store) => ({
      ...store,
      accounts,
      isConnected: web3auth.connected,
      info,
      wallet
    }));
  }

  async function disconnect() {
    if (!web3auth.connected) return;

    await web3auth.logout();

    update((store) => ({
      ...store,
      accounts: undefined,
      info: undefined,
      isConnected: web3auth.connected,
      wallet: undefined
    }));
  }

  set({
    accounts,
    connect,
    disconnect,
    info,
    isConnected: web3auth.connected,
    isReady: true,
    wallet
  });
}

export async function handleConnectTwitter() {
  const web3auth = await initNoModal({ clientId: PUBLIC_WEB3AUTH_CLIENT_KEY });
  const wa = await wallet_adapters();
  const web3authProvider = await web3auth.connectTo(wa.OPENLOGIN, {
    loginProvider: "twitter",
  });
  console.log('----- web3authprovider --------', web3authProvider);
}
