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

  find() {

  }

  getByIndex(index: number): ListNode<T> {
    if (index < 0) {
      throw new SinglyLinkedListError('Invalid index');
    }

    if (!this.head) {
      throw new SinglyLinkedListError('LinkedList is Empty');
    }

    let currentNode = this.head;
    let currentIndex = 0;
    while (currentNode) {
      if (currentIndex === index) {
        return currentNode;
      }
      currentNode = currentNode.next;
      currentIndex++;
    }

    throw new SinglyLinkedListError('LinkedList is Empty');
  }

  updateAtIndex(value: T, index: number) {
    let node = this.getByIndex(index);

    if (node) {
      node.value = value;
    }
  }

  deleteHead() {
    if (!this.head) {
      throw new SinglyLinkedListError('LinkedList is Empty');
    }

    this.head = this.head.next;
  }

  deleteTail() {
    if (!this.head) {
      throw new SinglyLinkedListError('LinkedList is Empty');
    }

    if (!this.head.next) {
      this.head = null;
      return;
    }

    let currentNode = this.head;

    while (currentNode.next && currentNode.next.next) {
      currentNode = currentNode.next;
    }

    if (currentNode.next) {
      currentNode.next = null;
    }
  }

  deleteNode(targetNode: ListNode<T>) {
    if (!this.head || !targetNode) {
      throw new SinglyLinkedListError('Invalid Node');
    }

    if (this.head === targetNode) {
      this.head = this.head.next;
      return true;
    }

    let currentNode = this.head;
    while (currentNode.next) {
      if (currentNode.next === targetNode) {
        currentNode.next = currentNode.next.next
        return true;
      }
      currentNode = currentNode.next
    }

    return false;
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

    throw new SinglyLinkedListError('Index out of bounds');
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

function insertAfterNode<T>(newNode: ListNode<T>, targetNode: ListNode<T>) {
  if (!newNode || !targetNode) {
    throw new SinglyLinkedListError('Invalid node(s)');
  }

  newNode.next = targetNode.next;
  targetNode.next = newNode;
}
