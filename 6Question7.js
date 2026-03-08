/*
Description:
Given a sorted array, construct a height-balanced binary search tree such that the
inorder traversal of the tree produces the same array.
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

  fromSortedArray(arr) {
    const tree = new BinaryTree();
    function build(subArr) {
      if (!subArr.length) return null;
      const mid = Math.floor(subArr.length / 2);
      const node = new Node(subArr[mid]);
      node.left = build(subArr.slice(0, mid));
      node.right = build(subArr.slice(mid + 1));
      return node;
    }
    tree.root = build(arr);
    return tree;
  }

  //  inorder traversal
  inorder(node = this.root, result = []) {
    if (!node) return result;
    this.inorder(node.left, result);
    result.push(node.val);
    this.inorder(node.right, result);
    return result;
  }
}

const bstTree = BinaryTree.fromSortedArray([1, 2, 3, 4, 5, 6, 7]);
console.log("in order", bstTree.inorder()); // [1,2,3,4,5,6,7]
