// a solution for when we have different schemas
// and can't all work on different db schemas
// an in memory replacement for when your teammate is busy
const mockdb = new Map();

export function getCoins() {
  const coins = mockdb.get('coins');
  if (!coins) {
    // initialize with mock coins if it list empty
    mockdb.set('coins', mockCoins);
  }
  return mockdb.get('coins');
}

const mockCoins = [
  {
    name: 'Kata Inu',
    symbol: '$katainu',
    media: 'https://pump.mypinata.cloud/ipfs/QmbkoesHRQFaarNaHqv5w74oxTiBuy3MjPnNgLtuebrA2A?img-width=128&img-dpr=2&img-onerror=redirect',
    createdBy: '0x1234567890abcdef',
    marketCap: 1000000,
    replies: 100,
    description: 'Kata Inu is a community-driven, fair launched DeFi Token. Three simple functions occur during each trade: Reflection, LP Acquisition, & Burn. And 3% of every transaction is redistributed to holders.'
  },
  {
    name: 'Kata Inu',
    symbol: '$katainu',
    media: 'https://pump.mypinata.cloud/ipfs/QmaKDPDip7baK3PDYXYWr82TRxWZoenwFSXph3UzZ2VUxS?img-width=128&img-dpr=2&img-onerror=redirect',
    createdBy: '0x1234567890abcdef',
    marketCap: 1000000,
    replies: 100,
    description: 'Kata Inu is a community-driven, fair launched DeFi Token. Three simple functions occur during each trade: Reflection, LP Acquisition, & Burn. And 3% of every transaction is redistributed to holders.'
  },
  {
    name: 'Kata Inu',
    symbol: '$katainu',
    media: 'https://pump.mypinata.cloud/ipfs/QmbkoesHRQFaarNaHqv5w74oxTiBuy3MjPnNgLtuebrA2A?img-width=128&img-dpr=2&img-onerror=redirect',
    createdBy: '0x1234567890abcdef',
    marketCap: 1000000,
    replies: 100,
    description: 'Kata Inu is a community-driven, fair launched DeFi Token. Three simple functions occur during each trade: Reflection, LP Acquisition, & Burn. And 3% of every transaction is redistributed to holders.'
  },
  {
    name: 'Kata Inu',
    symbol: '$katainu',
    media: 'https://pump.mypinata.cloud/ipfs/QmbkoesHRQFaarNaHqv5w74oxTiBuy3MjPnNgLtuebrA2A?img-width=128&img-dpr=2&img-onerror=redirect',
    createdBy: '0x1234567890abcdef',
    marketCap: 1000000,
    replies: 100,
    description: 'Kata Inu is a community-driven, fair launched DeFi Token. Three simple functions occur during each trade: Reflection, LP Acquisition, & Burn. And 3% of every transaction is redistributed to holders.'
  },
  {
    name: 'Kata Inu',
    symbol: '$katainu',
    media: 'https://pump.mypinata.cloud/ipfs/QmbkoesHRQFaarNaHqv5w74oxTiBuy3MjPnNgLtuebrA2A?img-width=128&img-dpr=2&img-onerror=redirect',
    createdBy: '0x1234567890abcdef',
    marketCap: 1000000,
    replies: 100,
    description: 'Kata Inu is a community-driven, fair launched DeFi Token. Three simple functions occur during each trade: Reflection, LP Acquisition, & Burn. And 3% of every transaction is redistributed to holders.'
  },
  {
    name: 'Kata Inu',
    symbol: '$katainu',
    media: 'https://pump.mypinata.cloud/ipfs/QmbkoesHRQFaarNaHqv5w74oxTiBuy3MjPnNgLtuebrA2A?img-width=128&img-dpr=2&img-onerror=redirect',
    createdBy: '0x1234567890abcdef',
    marketCap: 1000000,
    replies: 100,
    description: 'Kata Inu is a community-driven, fair launched DeFi Token. Three simple functions occur during each trade: Reflection, LP Acquisition, & Burn. And 3% of every transaction is redistributed to holders.'
  }
]


// @ts-ignore
export function createCoin(name, ticker, description, image, twitter, telegram, website) {
  const coins = mockdb.get('coins');
  coins.push({
    id: ticker,
    name,
    description,
    image,
    twitter,
    telegram,
    website
  });
}
