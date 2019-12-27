import {swap} from "../helpers";

export function insertionSort<T>(array: T[]): T[] {
  if (array.length < 2) return array;

  for (let i = 0; i < array.length; i++) {
    for (let j = i; j > 0; j--) {
      if (array[j - 1] <= array[j]) break;

      swap(array, j - 1, j);
    }
  }

  return array;
}
