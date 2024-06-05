import type { IProvider } from '@web3auth/base';
import type { Web3AuthOptions } from '@web3auth/modal';

export type { UserAuthInfo } from '@web3auth/base';
export type { Web3Auth } from '@web3auth/modal';
export type { SolanaWallet } from '@web3auth/solana-provider';

import { getConfig } from './config';

// TODO: SAPPHIRE_DEVNET -> SAPPHIRE_PROD for prod launch
// so we need to abstract the Environment here
// this can be tied up to DB_URL. the URL will contain 'password' if local env?

export async function initModal({ clientId }: { clientId: string }) {
  // TODO: why do we import like this?
  const [
    { chainConfig, openLoginNetwork, web3AuthNetwork },
    web3AuthModal,
    web3AuthProvider,
    web3AuthOpenLoginAdapter,
    web3AuthPhantomAdapter
  ] = await Promise.all([
    getConfig(),
    import('@web3auth/modal'),
    import('@web3auth/solana-provider'),
    import('@web3auth/openlogin-adapter'),
    import('@web3auth/phantom-adapter')
  ]);

  const { SolanaPrivateKeyProvider } = web3AuthProvider;
  const { Web3Auth } = web3AuthModal;
  const { OpenloginAdapter } = web3AuthOpenLoginAdapter;
  const { PhantomAdapter } = web3AuthPhantomAdapter;

  const privateKeyProvider = new SolanaPrivateKeyProvider({
    config: { chainConfig }
  });

  const options: Web3AuthOptions = {
    clientId,
    chainConfig,
    storageKey: 'local',
    privateKeyProvider,
    uiConfig: {
      appName: 'coindotfun',
      loginMethodsOrder: ['twitter', 'google', 'facebook', 'discord'],
      defaultLanguage: 'en',
      modalZIndex: '2147483647',
      logoLight: 'https://web3auth.io/images/w3a-L-Favicon-1.svg',
      logoDark: 'https://web3auth.io/images/w3a-D-Favicon-1.svg',
      uxMode: 'popup',
      mode: 'light'
    },
    web3AuthNetwork,
    enableLogging: false
  };

  const openLoginAdapter = new OpenloginAdapter({
    adapterSettings: {
      clientId,
      network: openLoginNetwork,
      uxMode: 'popup'
    },
    privateKeyProvider
  });

  const phantomAdapter = new PhantomAdapter({
    clientId,
    chainConfig,
    web3AuthNetwork
  });

  const web3AuthInstance = new Web3Auth(options);

  web3AuthInstance.configureAdapter(openLoginAdapter);
  web3AuthInstance.configureAdapter(phantomAdapter);

  await web3AuthInstance.initModal();

  return web3AuthInstance;
}

export async function initWallet(provider: IProvider) {
  const { SolanaWallet } = await import('@web3auth/solana-provider');
  return new SolanaWallet(provider);
}
