export function suffix(num: number): string {
  const suffixes = ['', 'k', 'M', 'B', 'T'];
  const exponent = num === 0 ? 0 : Math.floor(Math.log10(Math.abs(num)) / 3);

  if (exponent === 0) return num.toString();

  const scaledNum = num / Math.pow(1000, exponent);
  const formattedNum = scaledNum.toFixed(scaledNum < 10 ? 1 : 0);

  return `${formattedNum}${suffixes[exponent]}`;
}
