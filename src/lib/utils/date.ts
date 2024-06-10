export function getUTCDate() {
  const time = new Date(Date.now());
  return time;
}

export function getUTCDayStart(date: Date = new Date(Date.now())) {
  const time = new Date(date);
  time.setUTCHours(0, 0, 0, 0);
  return new Date(time);
}
