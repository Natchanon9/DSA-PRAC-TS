class DoublyNode<T> {
  data: T;
  next: DoublyNode<T> | null = null;
  prev: DoublyNode<T> | null = null;

  constructor(data: T) {
    this.data = data;
  }
}

class DoublyLinkedList<T> {
  head: DoublyNode<T> | null = null;
  tail: DoublyNode<T> | null = null;

  // Time Complexity: O(1)
  append(data: T): void {
    const newNode = new DoublyNode(data);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }

    if (this.tail) {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
  }

  // Time Complexity: O(1)
  prepend(data: T): void {
    const newNode = new DoublyNode(data);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }

    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
  }

  delete(data: T): void {
    if (!this.head) return;

    let current: DoublyNode<T> | null = this.head;
    while (current && current.data !== data) {
      current = current.next;
    }

    if (!current) return;

    if (current === this.head) {
      this.head = current.next;
      if (this.head) this.head.prev = null;
      else this.tail = null;
      return;
    }

    if (current === this.tail) {
      this.tail = current.prev;
      if (this.tail) this.tail.next = null;
      return;
    }

    if (current.prev) current.prev.next = current.next;
    if (current.next) current.next.prev = current.prev;
  }

  reverse(): void {
    if (!this.head) return;

    let current: DoublyNode<T> | null = this.head;
    let temp: DoublyNode<T> | null = null;

    this.tail = this.head;

    while (current) {
      temp = current.prev;
      current.prev = current.next;
      current.next = temp;

      current = current.prev;
    }

    if (temp) {
      this.head = temp.prev;
    }
  }

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

const list = new DoublyLinkedList<string | number>();

console.log("--- 1. Append & Prepend ---");
list.append(20);
list.append(30);
list.prepend(10); 
console.log("Current List:", list.toArray()); // [10, 20, 30]

console.log("\n--- 2. Reverse ---");
list.reverse();
console.log("Reversed List:", list.toArray()); // [30, 20, 10]
console.log("New Head:", list.head?.data);     // 30
console.log("New Tail:", list.tail?.data);     // 10

console.log("\n--- 3. Delete Middle ---");
list.delete(20);
console.log("After deleting 20:", list.toArray()); // [30, 10]

console.log("\n--- 4. Delete Tail ---");
list.delete(10);
console.log("After deleting 10 (tail):", list.toArray()); // [30]
console.log("New Tail check:", list.tail?.data);         // 30

console.log("\n--- 5. Delete Head ---");
list.delete(30);
console.log("After deleting 30 (head):", list.toArray()); // []