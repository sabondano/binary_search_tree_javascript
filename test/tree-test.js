const assert = require('assert');
const Tree = require('../lib/tree');

describe('Tree', function () {
  it('has a head', function () {
    var tree = new Tree();

    assert.equal(undefined, tree.head);
  });

  it('adds new root node when pushed', function () {
    var tree = new Tree();
    tree.push(1);

    assert.equal(1, tree.head.data);
  });

  it('it continues adding data to the left down the tree', function () {
    var tree = new Tree();
    tree.push(5);
    tree.push(4);
    tree.push(3);

    assert.equal(3, tree.head.left.left.data);
  });
});
