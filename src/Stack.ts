export class Stack<T> {
  private items: T[];

  constructor() {
    this.items = [];
  }

  push(item: T) {
    this.items.push(item);
  }

  pop() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items.pop()
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.items.length - 1];
  }

  clear() {
    this.items = [];
  }
}