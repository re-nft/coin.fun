import type { CustomChainConfig } from '@web3auth/base';

export async function getConfig() {
  const [{ CHAIN_NAMESPACES, WEB3AUTH_NETWORK }, { OPENLOGIN_NETWORK }] =
    await Promise.all([
      import('@web3auth/base'),
      import('@web3auth/openlogin-adapter')
    ]);

  // TODO: SAPPHIRE_DEVNET -> SAPPHIRE_PROD for prod launch
  // so we need to abstract the Environment here
  // Naz: this can be tied up to DB_URL. the URL will contain 'password' if local env?
  // Rom: Can't be DB_URL because that's a private dynamic env var.
  //      Making it explicit like `PUBLIC_WEB3AUTH_ENV` would be better.
  const environment = import.meta.env.PROD ? 'production' : 'development';

  const BLOCK_EXPLORERS = {
    development: 'https://explorer.solana.com/?cluster=devnet',
    production: 'https://explorer.solana.com'
  };

  const CHAIN_IDS = {
    development: '0x3',
    production: '0x1'
  };

  const DISPLAY_NAMES = {
    development: 'Solana Devnet',
    production: 'Solana'
  };

  const OPENLOGIN_NETWORKS = {
    development: OPENLOGIN_NETWORK.SAPPHIRE_DEVNET,
    production: OPENLOGIN_NETWORK.SAPPHIRE_MAINNET
  };

  const RPC_TARGETS = {
    development: 'https://api.devnet.solana.com',
    production: 'https://api.mainnet-beta.solana.com'
  };

  const WEB3AUTH_NETWORKS = {
    development: WEB3AUTH_NETWORK.SAPPHIRE_DEVNET,
    production: WEB3AUTH_NETWORK.SAPPHIRE_MAINNET
  };

  const chainConfig: CustomChainConfig = {
    blockExplorerUrl: BLOCK_EXPLORERS[environment],
    chainNamespace: CHAIN_NAMESPACES.SOLANA,
    rpcTarget: RPC_TARGETS[environment],
    ticker: 'SOL',
    tickerName: 'Solana',
    chainId: CHAIN_IDS[environment],
    displayName: DISPLAY_NAMES[environment],
    logo: 'https://images.toruswallet.io/solana.svg'
  };

  const openLoginNetwork = OPENLOGIN_NETWORKS[environment];
  const web3AuthNetwork = WEB3AUTH_NETWORKS[environment];

  return { chainConfig, openLoginNetwork, web3AuthNetwork };
}
