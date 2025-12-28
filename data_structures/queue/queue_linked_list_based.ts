class Node<T> {
  data: T;
  next: Node<T> | null;
  constructor(data: T) {
    this.data = data;
    this.next = null;
  }
}

class Queue<T> {
  private head: Node<T> | null = null;
  private tail: Node<T> | null = null;
  private size: number = 0;
  enqueue(data: T): void {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else if (this.tail) {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }
  dequeue(): T | undefined {
    if (!this.head) return undefined;

    const removedData = this.head.data;
    this.head = this.head.next;
    this.size--;

    if (!this.head) {
      this.tail = null;
    }

    return removedData;
  }
  isEmpty(): boolean {
    return this.size === 0;
  }
  peek(): T | undefined {
    return this.head?.data;
  }
  getSize(): number {
    return this.size;
  }
  display(): T[] {
    let current = this.head;
    let arr: T[] = [];
    while (current) {
      arr.push(current.data);
      current = current.next;
    }
    return arr;
  }
}

// Example
const queue = new Queue<number>();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log("Queue display:", queue.display()); // Output: [1, 2, 3]
console.log("Peek:", queue.peek());             // Output: 1 

queue.dequeue();
console.log("After 1st dequeue, Peek:", queue.peek()); // Output: 2 

queue.dequeue();
console.log("After 2nd dequeue, Peek:", queue.peek()); // Output: 3

console.log("Final Queue state:", queue.display());    // Output: [3]
