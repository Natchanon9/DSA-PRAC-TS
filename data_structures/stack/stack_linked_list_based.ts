class Node<T> {
  data: T;
  next: Node<T> | null;

  constructor(data: T) {
    this.data = data;
    this.next = null;
  }
}

class Stack<T> {
  private head: Node<T> | null = null;
  private size: number = 0;

  push(data: T): void {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else if (this.head) {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.size++;
  }
  pop(): T | undefined {
    if (!this.head) {
      return;
    }
    const removedData = this.head.data;
    this.head = this.head.next;
    this.size--;
    return removedData;
  }
  peek(): T | undefined {
    return this.head?.data;
  }
  isEmpty(): boolean {
    return this.size === 0;
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
const stack = new Stack<number>();
stack.push(1);
stack.push(2);
stack.push(3);

console.log("Stack display:", stack.display()); // Output: [3, 2, 1]            
console.log("Peek:", stack.peek());             // Output: 3

stack.pop();
console.log("After 1st pop, Peek:", stack.peek()); // Output: 2

stack.pop();
console.log("After 2nd pop, Peek:", stack.peek()); // Output: 1

console.log("Final Stack state:", stack.display());    // Output: [1]