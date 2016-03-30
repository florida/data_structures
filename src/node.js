/**
 * Simple Node data structure
 * @constructor
 * @param data - data/value kept by the node
 * @param next - any other node connected to this node
 */
var Node = function (data, next) {
  this.data = data;
  this.next = next;
}
