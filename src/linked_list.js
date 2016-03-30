var Node = require('./node');
/**
 * Singly linked list data structure
 * @constructor
 */
var LinkedList = function () {
  this.head = undefined;
  this._length = 0;
}

LinkedList.prototype.append = function (item) {
  var newNode = new Node(item);
  if (this.head) {
    var node = this.head;

    while(node.next)
      node = node.next;

    node.next = newNode;
  } else {
    this.head = newNode;
  }

  this._length++;
}

LinkedList.prototype.getItem = function (index) {
  var node = this.head;

  // add error case when the linked list reaches end
  for(var i = 0; i < index;i++) {
    if (node.next) {
      node = node.next;
    } else {
      throw "Linked List out of bounds with index of " + index;
    }
  }

  return node;
}

LinkedList.prototype.appendItem = function (index, item)  {
  var newNode = new Node(item),
      prevNode = this.getItem(index - 1),
      node = this.getItem(index);

  prevNode.next = newNode;
  newNode.next = node;
  this._length++;
}

LinkedList.prototype.setItem = function (index, item) {
  var node = this.getItem(index),
      newNode = new Node(item);

  node.item = node;
}

LinkedList.prototype.reverse = function (node) {
  if (node == null) {
    return;
  }

  if (node.next == null) {
    this.head = node;
    return;
 }

  this.reverse(node.next);
  node.next.next = node;
  node.next = null;
}

