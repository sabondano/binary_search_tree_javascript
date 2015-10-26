function Node (data, left, right) {
  this.data = data;
  this.left = left;
  this.right = right;
};

Node.prototype.insert = function (value) {
  if (this.data >= value) {
    this.insert_left(value);
  } else if (this.data < value) {
    this.insert_right(value);
  }
};

Node.prototype.insert_left = function (value) {
  if (this.left) {
    this.left.insert(value);
  } else {
    this.left = new Node(value);
  }
};

Node.prototype.insert_right = function (value) {
  if (this.right) {
    this.left.insert(value);
  } else {
    this.right = new Node(value);
  }
};
module.exports = Node;
