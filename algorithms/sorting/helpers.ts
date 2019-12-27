export function isSorted<T>(array: T[]): boolean {
  for (let i = 1; i < array.length; i++) {
    if (array[i - 1] > array[i]) return false;
  }
  return true;
}

export const buildArray = (n: number): number[] => new Array(n).fill(null).map(() => Math.floor(Math.random() * n));

export function swap<T>(array: T[], index1: number, index2: number): void {
  const tmp = array[index1];
  array[index1] = array[index2];
  array[index2] = tmp;
}
