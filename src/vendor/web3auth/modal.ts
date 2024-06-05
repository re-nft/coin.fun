import type { IProvider } from '@web3auth/base';
import type { Web3AuthOptions } from '@web3auth/modal';

export type { UserAuthInfo } from '@web3auth/base';
export type { Web3Auth } from '@web3auth/modal';
export type { SolanaWallet } from '@web3auth/solana-provider';

import { getConfig } from './config';

export async function initModal({ clientId }: { clientId: string }) {
  // TODO: We import like this because the `@web3auth` modules are CommonJS
  // and Vite does not like this very much. We can get their default exports
  // with `await import()` and grab the relevant parts from there.
  const [
    { chainConfig, openLoginNetwork, web3AuthNetwork },
    { Web3Auth },
    { SolanaPrivateKeyProvider },
    { OpenloginAdapter },
    { PhantomAdapter }
  ] = await Promise.all([
    getConfig(),
    import('@web3auth/modal'),
    import('@web3auth/solana-provider'),
    import('@web3auth/openlogin-adapter'),
    import('@web3auth/phantom-adapter')
  ]);

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
      mode: 'auto'
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
