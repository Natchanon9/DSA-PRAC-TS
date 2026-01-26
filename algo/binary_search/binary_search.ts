class BinarySearch {
  private arr: number[];
  constructor(arr: number[]) {
    this.arr = arr;
  }
  search(target: number): number {
    let low = 0;
    let high = this.arr.length - 1;
    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
      const val = this.arr[mid];
      if (val === undefined) {
        break;
      }
      if (val === target) {
        return mid;
      } else if (val < target) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }

    return -1; //not found
  }
}

const sortedArray: number[] = [1, 2, 3, 4, 5];
const targetValue: number = 5;
const binarySearchInstance = new BinarySearch(sortedArray);
const result = binarySearchInstance.search(targetValue);
if (result !== -1) {
  console.log(`Target ${targetValue} found at index ${result}`);
} else {
  console.log(`Target ${targetValue} not found in the array`);
}
