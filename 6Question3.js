/*
Modify a binary tree so that it becomes its mirror image by swapping the lef and right
child of every node.
*/

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return;
    }
    const queue = [this.root];
    while (queue.length) {
      const curr = queue.shift();
      if (!curr.left) {
        curr.left = newNode;
        return;
      } else queue.push(curr.left);
      if (!curr.right) {
        curr.right = newNode;
        return;
      } else queue.push(curr.right);
    }
  }

  mirror(node = this.root) {
    if (!node) return null;
    [node.left, node.right] = [node.right, node.left]; // swap
    this.mirror(node.left);
    this.mirror(node.right);
    return node;
  }
}

const tree3 = new BinaryTree();
[1, 2, 3].forEach((val) => tree3.insert(val));
tree3.mirror();
