export function suffix(num: number): string {
  const suffixes = ['', 'k', 'M', 'B', 'T'];
  const exponent = num === 0 ? 0 : Math.floor(Math.log10(Math.abs(num)) / 3);

  if (exponent === 0) return num.toString();

  const scaledNum = num / Math.pow(1000, exponent);
  const formattedNum = scaledNum.toFixed(scaledNum < 10 ? 1 : 0);

  return `${formattedNum}${suffixes[exponent]}`;
}

export const getDateIdIndex = (userId: string, division: number) => {
  if (!userId) return 0;

  const now = new Date();
  const utcDay = now.getUTCDate();
  const utcMonth = now.getUTCMonth();
  const utcYear = now.getUTCFullYear();

  const seed = `${userId}-${utcDay}-${utcMonth}-${utcYear}`;

  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    const char = seed.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash;
  }

  const result = Math.abs(hash) % division;

  return result;
};
