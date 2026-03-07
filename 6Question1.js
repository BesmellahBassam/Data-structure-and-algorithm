/*
Height of Binary Tree
Write a functin that returns the number of levels in a binary tree.
An empty tree has height 0, and a tree with only one node has height 1.
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

  height(node = this.root) {
    if (!node) return 0;

    let height = 0;
    const queue = [node];

    while (queue.length) {
      let levelSize = queue.length; // how many nodes on this level
      height++; // each level = +1 height

      for (let i = 0; i < levelSize; i++) {
        const curr = queue.shift();
        if (curr.left) queue.push(curr.left);
        if (curr.right) queue.push(curr.right);
      }
    }
    return height;
  }
}

const tree = new BinaryTree();
[1, 2, 3, 4, 5].forEach((val) => tree.insert(val));
console.log("Height", tree.height());
