class Queue<T> {
  private items: T[] = [];

  enqueue(item: T) {
    this.items.push(item);
  }

  dequeue(): T | undefined {
    return this.items.shift();
  }

  peek(): T | undefined {
    return this.items[0];
  }
  
  isEmpty(): boolean {
    return this.items.length === 0;
  }
  size(): number {
    return this.items.length
  }
}

//example
let queue = new Queue<number>();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue);
console.log("dequeue:",queue.dequeue());
console.log("peek:",queue.peek());
console.log(queue);
console.log("isEmpty:",queue.isEmpty());
console.log("size:",queue.size());