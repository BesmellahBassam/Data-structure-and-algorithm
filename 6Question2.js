/*
Description:
Determine if Two Trees Are Idential
Write a functin that checks whether two binary trees are idential in both structure and
node values.
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

  isIdentical(otherTree) {
    function check(a, b) {
      if (!a && !b) return true;
      if (!a || !b) return false;
      console.log(a.val === b.val && check(a.left, b.left) && check(a.right, b.right));
      return a.val === b.val && check(a.left, b.left) && check(a.right, b.right);
    }
    return check(this.root, otherTree.root);
  }
}

const treeA = new BinaryTree();
[1, 2, 3].forEach((v) => treeA.insert(v));
const treeB = new BinaryTree();
[1, 2, 3].forEach((v) => treeB.insert(v));
const treeC = new BinaryTree();
[1, 2, 99].forEach((v) => treeC.insert(v));
console.log("A vs B ", treeA.isIdentical(treeB)); // true
console.log("A vs C ", treeA.isIdentical(treeC)); // false
