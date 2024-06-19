class Coin {
  name: string;
  symbol: string;
  price: number;

  constructor(coin: { name: string; symbol: string; price: number }) {
    this.name = coin.name;
    this.symbol = coin.symbol;
    this.price = coin.price;
  }

  toJSON() {
    return {
      name: this.name,
      symbol: this.symbol,
      price: this.price,
    }
  }
}

export async function load() {
  const coins: Coin[] = [
    new Coin({ name: 'Bitcoin', symbol: 'BTC', price: 50000 }),
    new Coin({ name: 'Ethereum', symbol: 'ETH', price: 3000 }),
    new Coin({ name: 'Dogecoin', symbol: 'DOGE', price: 0.3 }),
    new Coin({ name: 'Cardano', symbol: 'ADA', price: 2.5 }),
    new Coin({ name: 'Polkadot', symbol: 'DOT', price: 30 }),
    new Coin({ name: 'Litecoin', symbol: 'LTC', price: 200 }),
  ]
  const serializedCoins = coins.map(coin => coin.toJSON());
  return { coins: serializedCoins };
}
