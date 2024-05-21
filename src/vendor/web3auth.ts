// import { } from '@solana/web3.js';
import type { CustomChainConfig, IProvider } from '@web3auth/base';
import type { Web3AuthOptions } from '@web3auth/modal';

export type { UserAuthInfo } from '@web3auth/base';
export type { Web3Auth } from '@web3auth/modal';
export type { SolanaWallet } from '@web3auth/solana-provider';

export async function initModal({ clientId }: { clientId: string }) {
  const [
    web3AuthBase,
    web3AuthModal,
    web3AuthProvider,
    web3AuthOpenLoginAdapter,
    web3AuthPhantomAdapter
  ] = await Promise.all([
    import('@web3auth/base'),
    import('@web3auth/modal'),
    import('@web3auth/solana-provider'),
    import('@web3auth/openlogin-adapter'),
    import('@web3auth/phantom-adapter')
  ]);

  const { CHAIN_NAMESPACES, WEB3AUTH_NETWORK } = web3AuthBase;
  const { SolanaPrivateKeyProvider } = web3AuthProvider;
  const { Web3Auth } = web3AuthModal;
  const { OpenloginAdapter, OPENLOGIN_NETWORK } = web3AuthOpenLoginAdapter;
  const { PhantomAdapter } = web3AuthPhantomAdapter;

  // Create Web3Auth Instance
  const name = 'coindotfun';

  const chainConfig: CustomChainConfig = {
    blockExplorerUrl: 'https://explorer.solana.com',
    chainNamespace: CHAIN_NAMESPACES.SOLANA,
    rpcTarget: 'https://api.devnet.solana.com',
    ticker: 'SOL',
    tickerName: 'Solana',
    chainId: '0x3', // Please use 0x1 for Mainnet, 0x2 for Testnet, 0x3 for Devnet
    displayName: 'Solana Devnet',
    logo: 'https://images.toruswallet.io/solana.svg'
  };

  const privateKeyProvider = new SolanaPrivateKeyProvider({
    config: { chainConfig }
  });

  const options: Web3AuthOptions = {
    clientId,
    chainConfig,
    privateKeyProvider,
    uiConfig: {
      appName: name,
      loginMethodsOrder: ['twitter', 'google', 'facebook', 'discord'],
      defaultLanguage: 'en',
      modalZIndex: '2147483647',
      logoLight: 'https://web3auth.io/images/w3a-L-Favicon-1.svg',
      logoDark: 'https://web3auth.io/images/w3a-D-Favicon-1.svg',
      uxMode: 'popup',
      mode: 'light'
    },
    web3AuthNetwork: WEB3AUTH_NETWORK.SAPPHIRE_DEVNET,
    enableLogging: true
  };

  const openLoginAdapter = new OpenloginAdapter({
    adapterSettings: {
      clientId,
      network: OPENLOGIN_NETWORK.SAPPHIRE_DEVNET,
      uxMode: 'popup'
    },
    privateKeyProvider
  });

  const phantomAdapter = new PhantomAdapter({
    clientId,
    chainConfig,
    web3AuthNetwork: WEB3AUTH_NETWORK.SAPPHIRE_DEVNET
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
