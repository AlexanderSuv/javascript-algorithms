import * as assert from "assert";
import {buildArray, isSorted} from "../helpers";
import {insertionSort} from "./insertion-sort";

describe('insertion sort', () => {
  it('should sort', () => {
    assert.ok(isSorted(insertionSort([])));
    assert.ok(isSorted(insertionSort([1])));
    assert.ok(isSorted(insertionSort([1, 1])));
    assert.ok(isSorted(insertionSort([1, 0])));
    assert.ok(isSorted(insertionSort([1, 0, undefined])));
    assert.ok(isSorted(insertionSort([1, 0, -1, -100, -100])));
    assert.ok(isSorted(insertionSort([buildArray(1000)])));
  });
});
