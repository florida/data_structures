type LinkedListNode<T> = {
  value: T;
  next: LinkedListNode<T> | null;
};


// Create a new node
function createNode<T>(value: T): LinkedListNode<T> {
  return { value, next: null };
}

// Append a node to the end of the list
function append<T>(head: LinkedListNode<T> | null, value: T): LinkedListNode<T> {
  const newNode = createNode(value);

  if (!head) {
    return newNode;
  }

  let currentNode = head;
  while (currentNode.next) {
    currentNode = currentNode.next;
  }

  currentNode.next = newNode;
  return head;
}

// Insert a node after the first node with the specified referenceValue
function insertAfter<T>(
  head: LinkedListNode<T> | null,
  referenceValue: T,
  newValue: T
): LinkedListNode<T> | null {
  if (!head) {
    return null;
  }

  let currentNode = head;
  while (currentNode && currentNode.value !== referenceValue) {
    currentNode = currentNode.next;
  }

  if (currentNode) {
    const newNode = createNode(newValue);
    newNode.next = currentNode.next;
    currentNode.next = newNode;
  }

  return head;
}

// Replace the first node with the specified oldValue with a new node containing newValue
function replace<T>(
  head: LinkedListNode<T> | null,
  oldValue: T,
  newValue: T
): LinkedListNode<T> | null {
  let currentNode = head;

  while (currentNode) {
    if (currentNode.value === oldValue) {
      currentNode.value = newValue;
      break;
    }
    currentNode = currentNode.next;
  }

  return head;
}

// Delete the first node with the specified value
function deleteNode<T>(head: LinkedListNode<T> | null, value: T): LinkedListNode<T> | null {
  if (!head) {
    return null;
  }

  if (head.value === value) {
    return head.next;
  }

  let currentNode = head;
  while (currentNode.next) {
    if (currentNode.next.value === value) {
      currentNode.next = currentNode.next.next;
      break;
    }
    currentNode = currentNode.next;
  }

  return head;
}

// Traverse the list and apply the callback function to each node
function traverse<T>(head: LinkedListNode<T> | null, callback: (node: LinkedListNode<T>) => void): void {
  let currentNode = head;
  while (currentNode) {
    callback(currentNode);
    currentNode = currentNode.next;
  }
}

// Get the first node with the specified value
function get<T>(head: LinkedListNode<T> | null, value: T): LinkedListNode<T> | null {
  let currentNode = head;
  while (currentNode) {
    if (currentNode.value === value) {
      return currentNode;
    }
    currentNode = currentNode.next;
  }

  return null;
}
