class Coin {
  name: string;
  symbol: string;
  media: string;
  createdBy: string;
  marketCap: number;
  replies: number;
  description: string;

  constructor(coin: {
    name: string;
    symbol: string;
    media: string,
    createdBy: string,
    marketCap: number,
    replies: number,
    description: string
  }) {
    this.name = coin.name;
    this.symbol = coin.symbol;
    this.media = coin.media;
    this.createdBy = coin.createdBy;
    this.marketCap = coin.marketCap;
    this.replies = coin.replies;
    this.description = coin.description;
  }

  toJSON() {
    return {
      name: this.name,
      symbol: this.symbol,
      media: this.media,
      createdBy: this.createdBy,
      marketCap: this.marketCap,
      replies: this.replies,
      description: this.description
    }
  }
}

export async function load() {
  // fake-trade-TODO: these are to be fetched from the db
  // paginated of course
  const coins: Coin[] = [
    new Coin({
      name: 'Kata Inu',
      symbol: '$katainu',
      media: 'https://pump.mypinata.cloud/ipfs/QmbkoesHRQFaarNaHqv5w74oxTiBuy3MjPnNgLtuebrA2A?img-width=128&img-dpr=2&img-onerror=redirect',
      createdBy: '0x1234567890abcdef',
      marketCap: 1000000,
      replies: 100,
      description: 'Kata Inu is a community-driven, fair launched DeFi Token. Three simple functions occur during each trade: Reflection, LP Acquisition, & Burn. And 3% of every transaction is redistributed to holders.'
    }),
    new Coin({
      name: 'Kata Inu',
      symbol: '$katainu',
      media: 'https://pump.mypinata.cloud/ipfs/QmbkoesHRQFaarNaHqv5w74oxTiBuy3MjPnNgLtuebrA2A?img-width=128&img-dpr=2&img-onerror=redirect',
      createdBy: '0x1234567890abcdef',
      marketCap: 1000000,
      replies: 100,
      description: 'Kata Inu is a community-driven, fair launched DeFi Token. Three simple functions occur during each trade: Reflection, LP Acquisition, & Burn. And 3% of every transaction is redistributed to holders.'
    }),
    new Coin({
      name: 'Kata Inu',
      symbol: '$katainu',
      media: 'https://pump.mypinata.cloud/ipfs/QmbkoesHRQFaarNaHqv5w74oxTiBuy3MjPnNgLtuebrA2A?img-width=128&img-dpr=2&img-onerror=redirect',
      createdBy: '0x1234567890abcdef',
      marketCap: 1000000,
      replies: 100,
      description: 'Kata Inu is a community-driven, fair launched DeFi Token. Three simple functions occur during each trade: Reflection, LP Acquisition, & Burn. And 3% of every transaction is redistributed to holders.'
    }),
    new Coin({
      name: 'Kata Inu',
      symbol: '$katainu',
      media: 'https://pump.mypinata.cloud/ipfs/QmbkoesHRQFaarNaHqv5w74oxTiBuy3MjPnNgLtuebrA2A?img-width=128&img-dpr=2&img-onerror=redirect',
      createdBy: '0x1234567890abcdef',
      marketCap: 1000000,
      replies: 100,
      description: 'Kata Inu is a community-driven, fair launched DeFi Token. Three simple functions occur during each trade: Reflection, LP Acquisition, & Burn. And 3% of every transaction is redistributed to holders.'
    }),
    new Coin({
      name: 'Kata Inu',
      symbol: '$katainu',
      media: 'https://pump.mypinata.cloud/ipfs/QmbkoesHRQFaarNaHqv5w74oxTiBuy3MjPnNgLtuebrA2A?img-width=128&img-dpr=2&img-onerror=redirect',
      createdBy: '0x1234567890abcdef',
      marketCap: 1000000,
      replies: 100,
      description: 'Kata Inu is a community-driven, fair launched DeFi Token. Three simple functions occur during each trade: Reflection, LP Acquisition, & Burn. And 3% of every transaction is redistributed to holders.'
    }),
    new Coin({
      name: 'Kata Inu',
      symbol: '$katainu',
      media: 'https://pump.mypinata.cloud/ipfs/QmbkoesHRQFaarNaHqv5w74oxTiBuy3MjPnNgLtuebrA2A?img-width=128&img-dpr=2&img-onerror=redirect',
      createdBy: '0x1234567890abcdef',
      marketCap: 1000000,
      replies: 100,
      description: 'Kata Inu is a community-driven, fair launched DeFi Token. Three simple functions occur during each trade: Reflection, LP Acquisition, & Burn. And 3% of every transaction is redistributed to holders.'
    }),
  ]
  const serializedCoins = coins.map(coin => coin.toJSON());
  return { coins: serializedCoins };
}
