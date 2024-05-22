import { type Readable, readable, type Updater } from 'svelte/store';

import { browser } from '$app/environment';
import { PUBLIC_WEB3AUTH_CLIENT_KEY } from '$env/static/public';
import {
  initModal,
  initWallet,
  type SolanaWallet,
  type UserAuthInfo
} from '$vendor/web3auth';
// import { db } from '$lib/server/db';
// import { user, userParse } from '$lib/server/schema';
// import { eq } from 'drizzle-orm';

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


    // persist some of user's data into db if they do not exist
    if (!info.verifierId) {
      throw Error('fucked');
    }
    // TODO: typescript, the actual type is non-nullable, it's because of the stupid Partial
    // that it thinks that verifierId is optional. FUCK TYPESCRIPT
    // const userExists = await db.select().from(user).where(eq(user.verifierId, info.verifierId)).limit(1);
    // console.log(userExists);
    // if (!userExists) {
    //   await db.insert(user).values(userParse({
    //     name: info.name,
    //     email: info.email,
    //     profileImage: info.profileImage,
    //     typeOfLogin: info.typeOfLogin,
    //     aggregateVerifier: info.aggregateVerifier,
    //     verifier: info.verifier,
    //     verifierId: info.verifierId,
    //   }));
    // }

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
