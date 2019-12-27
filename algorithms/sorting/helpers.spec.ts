import assert from "assert";
import {buildArray, isSorted, swap} from "./helpers";

describe('helpers', () => {
  describe('#buildArray', () => {
    it('should build array', () => {
      const array = buildArray(1000);
      assert.ok(array.length === 1000);
    });
  });

  describe('#isSorted', () => {
    it('should return true', () => {
      assert.ok(isSorted([]));
      assert.ok(isSorted([undefined]));
      assert.ok(isSorted([undefined, null]));
      assert.ok(isSorted([1]));
      assert.ok(isSorted([-100, -2, 0, 0, 1, 2, 3, 4, 5]));
    });

    it('should return false', () => {
      assert.ok(!isSorted([1, 0]));
    });
  });

  describe('#swap', () => {
    it('should swap elements', () => {
      const array = [0, 1, 2, 3, 4, 5, 6];
      swap(array, 0, 6);
      assert.ok(array[0] === 6);
      assert.ok(array[6] === 0);
    });
  });
});
