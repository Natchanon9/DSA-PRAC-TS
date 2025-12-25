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

  constructor() {
    this.head = null;
  }

  // Time Complexity: O(n)
  append(data: T): void {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
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

// Example
const list = new LinkedList<number>();
list.append(10);
list.append(20);
list.append(30);
console.log(list.toArray());
