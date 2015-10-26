const Node = require('./node');

function Tree(head) {
  this.head = head;
};

Tree.prototype.push = function (number) {
  if (this.head == undefined) {
    this.head = new Node(number);
  } else {
    this.head.insert(number);
  }
};

module.exports = Tree;
