class MinHeap {
  private heap: number[] = [];
  insert(val: number): void {
    this.heap.push(val);
    this.bubbleUp(this.heap.length - 1);
  }
  private bubbleUp(index: number): void {
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[parentIndex] <= this.heap[index]) {
        break;
      }
      [this.heap[parentIndex], this.heap[index]] = [
        this.heap[index],
        this.heap[parentIndex],
      ];
      index = parentIndex;
    }
  }
  private bubbleDown(index: number): void {
    while (true) {
      const leftChildIndex = 2 * index + 1;
      const rightChildIndex = 2 * index + 2;
      let smallestIndex = index;
      if (
        leftChildIndex < this.heap.length &&
        this.heap[leftChildIndex] < this.heap[smallestIndex]
      ) {
        smallestIndex = leftChildIndex;
      }
      if (
        rightChildIndex < this.heap.length &&
        this.heap[rightChildIndex] < this.heap[smallestIndex]
      ) {
        smallestIndex = rightChildIndex;
      }
      if (smallestIndex === index) {
        break;
      }
      [this.heap[index], this.heap[smallestIndex]] = [
        this.heap[smallestIndex],
        this.heap[index],
      ];
      index = smallestIndex;
    }
  }
  extractMin(): number | undefined {
    if (this.heap.length === 0) {
      return undefined;
    }
    const min = this.heap[0];
    const lastEl = this.heap.pop()!;
    if (this.heap.length > 0) {
      this.heap[0] = lastEl;
      this.bubbleDown(0);
    }
    return min
  }
}
const minHeap = new MinHeap();
minHeap.insert(4);
minHeap.insert(2);
minHeap.insert(8);
console.log(minHeap.extractMin()); // Output: 2
