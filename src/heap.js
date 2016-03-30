var BinaryHeap = function (comparator) {
  this.content = [];
  this.comparator = comparator;
}

BinaryHeap.proptype.leftChild = function (i) {
  var index = i * 2 + 1;
  return {index: index, value: this.content[index]};
}

BinaryHeap.proptype.rightChild = function (i) {
  var index = i * 2 + 2;
  return {index: index, value: this.content[index]};
}

BinaryHeap.proptype.parent = function (i) {
  var index = Math.round(i / 2) - 1;
  return {index: index, value: this.content[index]};
}

BinaryHeap.proptype.swap = function (i, j) {
  var tmp = this.content[i];
  this.content[i] = this.content[j];
  this.content[j] = tmp;
}

BinaryHeap.proptype.push = function (i) {
  var arr_len = this.content.push(i);
  this.bubbleUp(arr_len - 1);
}

BinaryHeap.proptype.pop = function () {
  var last_leaf = this.content.pop();
  this.content[0] = last_leaf;

  this.shuffleDown(0);
}

BinaryHeap.proptype.bubbleUp = function (i) {
  var needsSwap = true;

  while(needsSwap) {

    var parent = this.parent(i);
    var item = this.content[i];

    // if the parent is greater than the item
    // the item doesn't need to swap
    if(comparator(parent.value, item) < 0) { // 6 - 2 = 4
      needsSwap = false;
    } else {
      this.swap(item,parent.index)
    }

    i = parent.index;
  }
}

BinaryHeap.proptype.shuffleDown = function (i) {
  var needsSwap = true;

  while(needsSwap) {
    var item = this.content[i];
    var leftChild = this.leftChild(i);
    var rightChild = this.rightChild(i);
    var minChild = ;

    if (comparator(item, leftChild.value) < 0 || comparator(item, rightChild.value) < 0) {
      needsSwap = false;
    }

    // if the score from comparing item to the left child is greater
    // then it wins as the min child
    if (comparator(item, leftChild.value) > comparator(item, rightChild.value)) {
      minChild = leftChild;
    } else {
      minChild = rightChild;
    }

    this.swap(item, minChild.index);

    i = minChild.index;
  }

}

module.exports = BinaryHeap;

