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

  isSymmetric() {
    function isMirror(a, b) {
      if (!a && !b) return true;
      if (!a || !b) return false;
      return (
        a.val === b.val &&
        isMirror(a.left, b.right) && // outer pair
        isMirror(a.right, b.left)
      ); // inner pair
    }
    return isMirror(this.root?.left, this.root?.right);
  }
}

const tree = new BinaryTree();
tree.root = new Node(1);
tree.root.left = new Node(2);
tree.root.right = new Node(2);
tree.root.left.left = new Node(3);
tree.root.left.right = new Node(4);
tree.root.right.left = new Node(4);
tree.root.right.right = new Node(3);
console.log("is symmetric", tree.isSymmetric()); // true
