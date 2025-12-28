class Node<T> {
  data: T;
  next: Node<T> | null;

  constructor(data: T) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList<T> {
  head: Node<T> | null;
  tail: Node<T> | null;
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // Time Complexity: O(n)
  append(data: T): void {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }
    if (this.tail) {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }
  prepend(data: T): void {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
    if (!this.tail) this.tail = newNode;
  }

  delete(data: T): void {
    if (!this.head) {
      return;
    }
    if (data === this.head.data) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    while (current.next && current.next.data !== data) {
      current = current.next;
    }
    if (current.next) {
      current.next = current.next.next;
      if (!current.next) this.tail = current;
    }
  }
  reverse(): void {
    let prev: Node<T> | null = null;
    let current = this.head;
    let next: Node<T> | null = null;

    this.tail = this.head;
    while (current) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev;
  }
  // Helper to visualize the list
  toArray(): T[] {
    const result: T[] = [];
    let current = this.head;
    while (current) {
      result.push(current.data);
      current = current.next;
    }
    return result;
  }
}

// Examples

const list = new LinkedList<string | number>();

console.log("--- 1. Append & Prepend ---");
list.append(20);
list.append(30);
list.prepend(10); 
console.log("Current List:", list.toArray()); // Expected: [10, 20, 30]

console.log("\n--- 2. Reverse ---");
list.reverse();
console.log("Reversed List:", list.toArray()); // Expected: [30, 20, 10]
console.log("New Head:", list.head?.data);     // 30
console.log("New Tail:", list.tail?.data);     // 10

console.log("\n--- 3. Delete Middle ---");
list.delete(20);
console.log("After deleting 20:", list.toArray()); // Expected: [30, 10]

console.log("\n--- 4. Delete Tail ---");
list.delete(10);
console.log("After deleting 10 (tail):", list.toArray()); // Expected: [30]
console.log("New Tail check:", list.tail?.data);         // 30

console.log("\n--- 5. Delete Head ---");
list.delete(30);
console.log("After deleting 30 (head):", list.toArray()); // Expected: []