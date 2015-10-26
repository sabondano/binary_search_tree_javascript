const assert = require('assert');
const Node = require('../lib/node');

describe('Node', function () {
  it('has data', function () {
    var node = new Node(1);

    assert.equal(1, node.data);
  });

  it('has a left node', function () {
    var node = new Node(2, new Node(1));

    assert.equal(1, node.left.data);
  });

  it('has a right node', function () {
    var node = new Node(2, new Node(2), new Node(3));

    assert.equal(3, node.right.data);
  });
});
