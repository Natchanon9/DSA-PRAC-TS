class Stack<T> {
  private items: T[] = [];

  push(item: T) {
    this.items.push(item);
  }
  pop(): T | undefined {
    return this.items.pop();
  }
  peek(): T | undefined {
    return this.items[0];
  }
}

//example
let stack = new Stack<number>();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack)
console.log("pop:",stack.pop());
console.log("peek:",stack.peek());
console.log(stack)
