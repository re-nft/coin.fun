import { getCoins } from '$lib/server/db';

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
    media: string;
    createdBy: string;
    marketCap: number;
    replies: number;
    description: string;
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
    };
  }
}

export async function load() {
  const mockcoins = getCoins();
  return { coins: mockcoins };
}
