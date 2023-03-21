export class LinkedListNode<T> {
  value: T;
  next: LinkedListNode<T> | null;

  /**
   * Create a new linked list node.
   * @param {T} value - The value of the node.
   * @param { LinkedListNode<T> | null} next - the next node in the linked list
   */
  constructor(value: T, next: LinkedListNode<T> | null = null) {
    this.value = value;
    this.next = next;
  }
}

export class SinglyLinkedList<T> {
  head: LinkedListNode<T> | null;

  /**
   * Create a singly linkedlist
   */
  constructor() {
    this.head = null;
  }

  /**
   * Append new node with value to the end of the list
   * @param 
   */
  append(value: T): void {
    if (!this.head) {
      this.head = new LinkedListNode(value);
      return;
    }

    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }

    currentNode.next = new LinkedListNode(value)
  }

  /**
   * Get the node at the given index.
   * @param {number} index - The index of the node to access.
   * @return {LinkedListNode<T> | null} The node at the given index or null if not found.
   */
  getByIndex(index: number): LinkedListNode<T> | null {
    let currentNode = this.head;
    let currentIndex = 0;

    while (currentNode) {
      if (currentIndex === index) {
        return currentNode;
      }
      currentIndex++
      currentNode = currentNode.next;
    }

    return null;
  }

  /**
   * Insert a new node with value after specified node
   * If refernece node isn't found the node is appended to the list
   * @param {T} value - The value of the new node.
   * @param {LinkedListNode<T> | null} referenceNode - The node after which the new node should be inserted.
   */
  insertAfter(value: T, referenceNode: LinkedListNode<T> | null): void {
    if (!this.head || !referenceNode) {
      this.append(value);
      return;
    }

    let currentNode = this.head;
    while (currentNode && currentNode !== referenceNode) {
      currentNode = currentNode.next;
    }

    if (currentNode) {
      currentNode.next = new LinkedListNode(value, currentNode.next)
    } else {
      this.append(value);
    }
  }

  /**
   * Traverse list and call the callback in each node
   * @param {(node: LinkedListNode<T>) => void} callback - The callback to apply each node.
   */
  traverse(callback: (node: LinkedListNode<T>) => void): void {
    let currentNode = this.head;

    while (currentNode) {
      callback(currentNode);
      currentNode = currentNode.next;
    }
  }

  /**
   * Delete the node with the given value from list
   * @param {T} value - The value of the node to delete
   * @return {boolean} - returns if the node was deleted
   */
  delete(value: T): boolean {
    if (!this.head) {
      return false;
    }

    if (this.head.value === value) {
      this.head = this.head.next;
      return true;
    }

    let currentNode = this.head;

    while (currentNode.next) {
      if (currentNode.next.value === value) {
        currentNode.next = currentNode.next.next;
        return true;
      }
      currentNode = currentNode.next;
    }

    return false;
  }
}
