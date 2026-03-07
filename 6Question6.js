/*
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

  sumChildren(node = this.root) {
    if (!node || (!node.left && !node.right)) return true; // null or leaf
    const leftVal = node.left ? node.left.val : 0;
    const rightVal = node.right ? node.right.val : 0;
    return node.val === leftVal + rightVal && this.sumChildren(node.left) && this.sumChildren(node.right);
  }
}

const tree = new BinaryTree();
tree.root = new Node(10);
tree.root.left = new Node(3);
tree.root.right = new Node(7);
tree.root.left.left = new Node(1);
tree.root.left.right = new Node(2);
console.log("childrenSum ", tree.sumChildren()); // true
tree.root.right.val = 99;
console.log("childrenSum ", tree.sumChildren()); // false
