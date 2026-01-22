class MaxHeap {
  private heap: number[] = [];
  insert(val: number): void {
    this.heap.push(val);
    this.bubbleUp(this.heap.length - 1);
  }
  extractMax(): number | undefined {
    if (this.heap.length === 0) {
      return undefined;
    }

    const max = this.heap[0];
    const lastEl = this.heap.pop()!;
    if (this.heap.length > 0) {
      this.heap[0] = lastEl;
      this.bubbleDown(0);
    }

    return max;
  }
  private bubbleDown(index: number): void {
    while (true) {
      const leftChildIndex = 2 * index + 1;
      const rightChildIndex = 2 * index + 2;
      let largestIndex = index;

      if (
        leftChildIndex < this.heap.length &&
        this.heap[leftChildIndex] > this.heap[largestIndex]
      ) {
        largestIndex = leftChildIndex;
      }
      if (
        rightChildIndex < this.heap.length &&
        this.heap[rightChildIndex] > this.heap[largestIndex]
      ) {
        largestIndex = rightChildIndex;
      }
      if (largestIndex === index) {
        break;
      }
      [this.heap[largestIndex], this.heap[index]] = [
        this.heap[index],
        this.heap[largestIndex],
      ];
      index = largestIndex;
    }
  }

  private bubbleUp(index: number): void {
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[parentIndex] >= this.heap[index]) {
        break;
      }
      if (this.heap[parentIndex] < this.heap[index]) {
        [this.heap[parentIndex], this.heap[index]] = [
          this.heap[index],
          this.heap[parentIndex],
        ];
      }
      index = parentIndex;
    }
  }
}

const maxHeap = new MaxHeap();
maxHeap.insert(4);
maxHeap.insert(2);
maxHeap.insert(12);
maxHeap.insert(8);
console.log(maxHeap.extractMax()); // Output: 12
