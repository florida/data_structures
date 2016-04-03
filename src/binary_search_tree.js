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
    } else if (data <= root.data){
      root.left = this.insert(root.left, data);
    } else {
      root.right = this.insert(root.right, data);
    }
    return root;
  },

  search: function (data) {
    var recurseSearch = function (root) {
      if (this.root == null || root == null) {
        return false;
      } else if (root.data === data) {
        return root;
      } else if (data <= root.data) {
        recurseSearch(root.left);
      } else {
        recurseSearch(root.right);
      }
    }.bind(this);

    recurseSearch(this.root, data);
  }

  findMin: function (root = this.root) {
    var minRecurse = function (root) {
      if (root == null) {
        throw 'Error: Tree is empty';
      } else if (root.left == null) {
        return root.data;
      }
      return minRecurse(root.left);
    }

    return this.minRecurse(root);
  },

  findMax: function (root = this.root) {
    var maxRecurse = function (root) {
      if (root == null) {
        throw 'Error: Tree is empty';
      } else if (root.left == null) {
        return root.data;
      }
      return minRecurse(root.right);
    }

    return this.maxRecurse(root);
  },

  height: function () { /*max depth, returning # of edges*/
    var heightRecurse = function (root) {
      if (root == null) {
        return -1;
      }

      return Math.max(heightRecurse(root.left) + heightRecurse(root.right)) + 1
    }
  },

  remove: function (value) {

  }

}

module.exports = BinarySearchTree;
