/*
Description:
Write a functin that prints all nodes that are exactly k edges away from the root node.
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

  nodesAtKDistance(k) {
    const result = [];
    function dfs(node, dist) {
      if (!node) return;
      if (dist === k) {
        result.push(node.val);
        return;
      }
      dfs(node.left, dist + 1);
      dfs(node.right, dist + 1);
    }
    dfs(this.root, 0);
    return result;
  }
}

const tree = new BinaryTree();
tree.root = new Node(1);
tree.root.left = new Node(2);
tree.root.right = new Node(3);
tree.root.left.left = new Node(4);
tree.root.left.right = new Node(5);
tree.root.right.right = new Node(6);
console.log("Distance 0", tree.nodesAtKDistance(0)); // [1]
console.log("Distance 1", tree.nodesAtKDistance(1)); // [2, 3]
console.log("Distance 2", tree.nodesAtKDistance(2)); // [4, 5, 6]
