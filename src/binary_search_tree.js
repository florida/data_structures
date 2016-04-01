var Node = function (data, left, right) {
  this.data;
  this.left;
  this.right;
}

var BinarySearchTree = function () {
  this.root = null;
}

BinarySearchTree.prototype = {
  constructor: BinarySearchTree,

  insert: function (root, data) {
    if (this.root)
      this.root = newNode;

    if (root === null) {
      root = new Node(data);
      return root;
    } else {
      root.left = this.insert((data <= root.data) ? root.left : root.right, data);
   }
  },

  remove: function (value) {

  }
}

module.exports = BinarySearchTree;
