var Queue = function (arr = []) {
  this.content = arr;
}

Queue.prototype = {
  constructor: Queue,

  enqueue: function (item) {
    this.content.push(item);
    return item;
  },

  dequeue: function () {
    return this.content.shift();
  },

  peek: function () {
    return this.content[0];
  }
}

module.exports = Queue;
