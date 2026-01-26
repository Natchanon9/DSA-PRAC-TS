// Simple
// class SortingAlgorithms {
//   quicksort(arr: number[]): number[] {
//     if (arr.length <= 1) {
//       return arr;
//     }

//     const pivot = arr[arr.length - 1] as number;
//     const left: number[] = [];
//     const right: number[] = [];

//     for (let i = 0; i < arr.length - 1; i++) {
//       const val = arr[i] as number;

//       if (val < pivot) {
//         left.push(val);
//       } else {
//         right.push(val);
//       }
//     }
//     return [...this.quicksort(left), pivot, ...this.quicksort(right)];
//   }
// }

// // Example:
// const sortingAlgorithms = new SortingAlgorithms();
// const unsortedArray = [4, 2, 7, 1, 9, 5, 5];
// console.time("naive quicksort");
// console.log(sortingAlgorithms.quicksort(unsortedArray));
// console.timeEnd("naive quicksort");
// // Output: [1, 2, 4, 5, 5, 7, 9]


class SortingAlgorithms {
  quicksort(arr: number[], left: number = 0, right: number = arr.length - 1): number[] {
    if (left < right) {

      const pivotIndex = this.partition(arr, left, right);

      this.quicksort(arr, left, pivotIndex - 1);
      this.quicksort(arr, pivotIndex + 1, right);
    }
    return arr;
  }

  private partition(arr: number[], left: number, right: number): number {
    const pivot = arr[right] as number;
    let i = left - 1;

    for (let j = left; j < right; j++) {
      if ((arr[j] as number) <= pivot) {
        i++;
        [arr[i], arr[j]] = [arr[j] as number, arr[i] as number];
      }
    }

    [arr[i + 1], arr[right]] = [arr[right] as number, arr[i + 1] as number];
    
    return i + 1;
  }
}

const sorter = new SortingAlgorithms();
const list = [4, 2, 7, 1, 9, 5, 5];
console.log(sorter.quicksort(list)); 
// Output: [1, 2, 4, 5, 5, 7, 9]