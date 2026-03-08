/*
Description:
Write a functin that checks whether a binary tree is symmetric around its center.
A tree is symmetric if the lef subtree is a mirror image of the right subtree.
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

  isBalanced() {
    function checkHeight(node) {
      if (!node) return 0;
      const left = checkHeight(node.left);
      if (left === -1) return -1;
      const right = checkHeight(node.right);
      if (right === -1) return -1;
      if (Math.abs(left - right) > 1) return -1;
      return 1 + Math.max(left, right);
    }
    return checkHeight(this.root) !== -1;
  }
}

const tree = new BinaryTree();
[1, 2, 3, 4].forEach((v) => tree.insert(v));
console.log("balanced", tree.isBalanced()); // tru
