var Node = function (data, left, right) {
  this.data = data;
  this.left = left;
  this.right = right;
}

var BinarySearchTree = function () {
  this.root = null;
}

BinarySearchTree.prototype = {
  constructor: BinarySearchTree,

  insert: function (root, data) {
    if (root == null) {
      root = new Node(data);

    if (this.root === null)
      this.root = root;
      return root;
    } else if (data <= root.data){
      root.left = this.insert(root.left, data);
    } else {
      root.right = this.insert(root.right, data);
    }
  },

  remove: function (value) {

  }
}

module.exports = BinarySearchTree;
