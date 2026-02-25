// Linked List Basics

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert() {
    this.head = new Node(data, this.head);
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  getLast() {
    if (!this.head) return null;
    let node = this.head;
    while (node) {
      if (!node.next) return node;
      node = node.next;
    }
  }

  insertLast(data) {
    const node = new Node(data);
    const last = this.getLast();
    // The chain is empty.
    if (!last) {
      this.head = node;
    }
    // There are some existing nodes in our chain
    else last.next = node;
  }

  removeFirst() {
    if (!this.head) return null;
    this.head = this.head.next;
  }

  getAt(data) {
    let node = this.head;
    while (node) {
      if (node.data == data) {
        return node;
      }
      node = node.next;
    }
    return null;
  }
}

// Questin One
const list = new LinkedList();
list.insert(30);
list.insert(20);
list.insert(10);
console.log(list.head);

// Question Two
list.insertFirst(5);

// Question Three
list.insertLast(40);

//Question Four
list.removeFirst();

//Question Five
list.getAt(20);
