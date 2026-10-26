export function formatRemainingTime(remainingTime: number): string {
  const totalSeconds = Math.floor(remainingTime / 1000);

  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  if (days > 0) {
    return `${days} ${days === 1 ? "dia" : "dias"}, ${hours}h ${minutes}min ${seconds}s`;
  }

  if (hours > 0) {
    return `${hours}h ${minutes}min ${seconds}s`;
  }

  if (minutes > 0) {
    return `${minutes}min ${seconds}s`;
  }

  return `${seconds}s`;
}
