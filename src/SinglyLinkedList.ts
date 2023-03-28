class SinglyLinkedListError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'SinglyLinkedListError';
  }
}

class ListNode<T> {
  value: T
  next: ListNode<T> | null;

  constructor(value: T, next: ListNode<T> | null = null) {
    this.value = value;
    this.next = next;
  }
}

class SinglyLinkedList<T> {
  private head: ListNode<T> | null;

  constructor() {
    this.head = null;
  }

  prepend(value: T): void {
    this.head = new ListNode(value, this.head);
  }

  append(value: T) {
    if (!this.head) {
      this.head = new ListNode(value)
    }

    let currentNode = this.head
    while (currentNode.next) {
      currentNode = currentNode.next
    }

    currentNode.next = new ListNode(value);
  }

  deleteAtIndex(index: number) {
    if (!this.head || index < 0) {
      throw new SinglyLinkedListError('Invalid index');
    }

    if (index === 0) {
      this.head = this.head.next;
    }

    let currentNode = this.head;
    let currentIndex = 1;

    while (currentNode.next) {
      if (currentIndex === index) {
        currentNode.next = currentNode.next.next
        return;
      }

      currentNode = currentNode.next;
      currentIndex++;
    }

    throw new SinglyLinkedListError('Out of Bounds');
  }

  deleteHead() {

  }

  deleteTail() {

  }

  isEmpty() {
    return this.head === null;
  }

  length(): number {
    let currentNode = this.head;
    let count = 0;

    while (currentNode) {
      currentNode = currentNode.next
      count++;
    }

    return count;
  }

  clear() {
    this.head = null;
  }
}