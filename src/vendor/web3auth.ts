// import { } from '@solana/web3.js';
import type { CustomChainConfig, IProvider } from '@web3auth/base';
import type { Web3AuthOptions } from '@web3auth/modal';

export type { UserAuthInfo } from '@web3auth/base';
export type { Web3Auth } from '@web3auth/modal';
export type { SolanaWallet } from '@web3auth/solana-provider';

// TODO: SAPPHIRE_DEVNET -> SAPPHIRE_PROD for prod launch
// so we need to abstract the Environment here
// this can be tied up to DB_URL. the URL will contain 'password' if local env?

async function solana_devnet_chain_config() {
  const web3AuthBase = await import('@web3auth/base');
  let SOLANA_DEVNET_CHAIN_CONFIG: CustomChainConfig = {
    blockExplorerUrl: 'https://explorer.solana.com',
    chainNamespace: web3AuthBase.CHAIN_NAMESPACES.SOLANA,
    rpcTarget: 'https://api.devnet.solana.com',
    ticker: 'SOL',
    tickerName: 'Solana',
    chainId: '0x3', // Please use 0x1 for Mainnet, 0x2 for Testnet, 0x3 for Devnet
    displayName: 'Solana Devnet',
    logo: 'https://images.toruswallet.io/solana.svg'
  };
  return SOLANA_DEVNET_CHAIN_CONFIG;
}

export async function wallet_adapters() {
  const web3AuthBase = await import('@web3auth/base');
  return web3AuthBase.WALLET_ADAPTERS;
}

export async function initNoModal({ clientId }: { clientId: string }) {
  const [web3AuthNoModal] = await Promise.all([import('@web3auth/no-modal'), import('@web3auth/base')]);
  const { Web3AuthNoModal } = web3AuthNoModal;

  const web3Auth = new Web3AuthNoModal({
    chainConfig: await solana_devnet_chain_config(),
    clientId,
    storageKey: 'local',
    enableLogging: false,
  });

  return web3Auth;
}

export async function initModal({ clientId }: { clientId: string }) {
  // TODO: why do we import like this?
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

  const { WEB3AUTH_NETWORK } = web3AuthBase;
  const { SolanaPrivateKeyProvider } = web3AuthProvider;
  const { Web3Auth } = web3AuthModal;
  const { OpenloginAdapter, OPENLOGIN_NETWORK } = web3AuthOpenLoginAdapter;
  const { PhantomAdapter } = web3AuthPhantomAdapter;

  // Create Web3Auth Instance
  const name = 'coindotfun';

  const privateKeyProvider = new SolanaPrivateKeyProvider({
    config: { chainConfig: await solana_devnet_chain_config() }
  });

  const options: Web3AuthOptions = {
    clientId,
    chainConfig: await solana_devnet_chain_config(),
    storageKey: 'local',
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
    enableLogging: false
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
    chainConfig: await solana_devnet_chain_config(),
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
