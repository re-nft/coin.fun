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
    name: 'PUKI',
    symbol: 'PUKI',
    media: 'https://pump.mypinata.cloud/ipfs/QmUVTLaUNDVfioTHe5Q2s5ZzfscnDRGYU8bY7VFRiVQLrU',
    createdBy: 'GMFgcmZpo6x8JqpwNoW244q2DThpSnoewnZmnhZ9TjQN',
    marketCap: 3800,
    replies: 10,
    description: 'PUKI IS CUTIE PATOOTIE CAT WHO WANT TO FIND NEW FRIENDS IN THIS WORLD. SHE IS REALLY WITH EVERYONE ONE OF HER FAVORITE FRIEND IS DOG BILLY I THINK YOU KNOW HIM'
  },
  {
    name: 'SOLCAPA',
    symbol: 'SOLCAPA',
    media: 'https://pump.mypinata.cloud/ipfs/QmYmge4MSSJj5qtkr7ejUuETXJn4QVfujf5gvLokcchBdx',
    createdBy: 'GMFgcmZpo6x8JqpwNoW244q2DThpSnoewnZmnhZ9TjQN',
    marketCap: 5400,
    replies: 21,
    description: 'How does it work? $Solcapa is at the core of the MemeFi economy. You can use $Solcapa to mint new, unique $Solcapa NFTs permissionlessly, or burn $Solcapa NFTs to retrieve that sweet sweet $Solcapa back. Every time you burn a $Solcapa NFT, 100,000,000 $Solcapa is burnt forever. This demonstrates how deflation works in our system. The max supply of $Solcapa is 10,000,000,000. NFT mints aren’t hard-capped but are limited by the $Solcapa supply. Each mint births a new unique Capa'
  },
  {
    name: 'WRAPPY',
    symbol: '$WCAT',
    media: 'https://pump.mypinata.cloud/ipfs/QmbNM5UWtJ5zSGrPmLWd6bPqaSWjRXNRWvQXEDVpPU91m8',
    createdBy: 'GMFgcmZpo6x8JqpwNoW244q2DThpSnoewnZmnhZ9TjQN',
    marketCap: 30811.4,
    replies: 0,
    description: 'wrapped but cat'
  },
  {
    name: 'Popdog',
    symbol: 'POPDOG',
    media: 'https://pump.mypinata.cloud/ipfs/QmXR8CtdE8xyqJiDJDY6UfmWf2z8YAyKWBRaHivhbLh28S',
    createdBy: 'EU6CMBoYXCF9WE49XJ2A1HjEtGECCmYKfYLShZaRRRJn',
    marketCap: 22745.44,
    replies: 7,
    description: 'Kata Inu is a community-driven, fair launched DeFi Token. Three simple functions occur during each trade: Reflection, LP Acquisition, & Burn. And 3% of every transaction is redistributed to holders.'
  },
  {
    name: 'Wiender Dog',
    symbol: 'WEENY',
    media: 'https://pump.mypinata.cloud/ipfs/QmaktjQRc7iGgpj4nhMfHXZWRWt7CyGxk4y4WrFg8KKFd2',
    createdBy: '4H2RE3wkpqBG6ghw9Bcp8R7SVGFkypjfqM4e1bkwpump',
    marketCap: 3917.33,
    replies: 13,
    description: 'Kata Inu is a community-driven, fair launched DeFi Token. Three simple functions occur during each trade: Reflection, LP Acquisition, & Burn. And 3% of every transaction is redistributed to holders.'
  },
  {
    name: 'Kata Inu',
    symbol: '$katainu',
    media: 'https://pump.mypinata.cloud/ipfs/QmbkoesHRQFaarNaHqv5w74oxTiBuy3MjPnNgLtuebrA2A?img-width=128&img-dpr=2&img-onerror=redirect',
    createdBy: 'mkqcp8UnnRuLhXgqHpAxBRTMmXKDqC81cHFVQQgLxn8',
    marketCap: 11234.21,
    replies: 15,
    description: 'Kata Inu is a community-driven, fair launched DeFi Token. Three simple functions occur during each trade: Reflection, LP Acquisition, & Burn. And 3% of every transaction is redistributed to holders.'
  }
]

// @ts-expect-error this is mock, I don't care about types
export function createCoin(name, ticker, description, image, twitter, telegram, website) {
  const coins = getCoins();
  coins.push({
    name,
    symbol: ticker,
    media: image,
    createdBy: 'User',
    marketCap: 0,
    replies: 0,
    description,
    twitter,
    telegram,
    website
  });
  mockdb.set('coins', coins);
}