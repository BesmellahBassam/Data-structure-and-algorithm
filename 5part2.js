//  Queue Basics Using Linked Lists

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null; // front of queue
    this.tail = null; // back of queue
    this.size = 0;
  }

  // Add element to back
  enqueue(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  // Remove element from  front
  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    const removed = this.head.value;
    this.head = this.head.next;
    if (!this.head) this.tail = null; // queue became empty
    this.size--;
    return removed;
  }

  front() {
    return this.isEmpty() ? null : this.head.value;
  }

  rear() {
    return this.isEmpty() ? null : this.tail.value;
  }

  isEmpty() {
    return this.size === 0;
  }

  print() {
    if (this.isEmpty()) {
      returnnull;
    }
    let result = [];
    let current = this.head;
    while (current) {
      result.push(current.value);
      current = current.next;
    }
    return result;
  }
}

//  Question 2 Enqueue [10, 20, 30], dequeue 1, print
const q1 = new Queue();
q1.enqueue(10);
q1.enqueue(20);
q1.enqueue(30);

q1.dequeue();
q1.print();

//Question 3 Check if queue is empty
const q2 = new Queue();
console.log("before enqueuing", q2.isEmpty());

q2.enqueue(100);
q2.enqueue(200);
console.log("after enqueuing", q2.isEmpty());

// Question 4 get front and rear after ading [5, 15, 25]
const q3 = new Queue();
q3.enqueue(5);
q3.enqueue(15);
q3.enqueue(25);
q3.front(); // 5
q3.rear(); // 25

//Question 5 Reverse a Queue [1, 2, 3] using a temporary stack/array
function reverseQueue(queue) {
  const stack = [];

  // first dequeue all elements into a stack (array)
  while (!queue.isEmpty()) {
    stack.push(queue.dequeue());
  }

  // second pop from stack back into queu
  while (stack.length > 0) {
    queue.enqueue(stack.pop());
  }

  return queue;
}

const q4 = new Queue();
q4.enqueue(1);
q4.enqueue(2);
q4.enqueue(3);

console.log("Original");
q4.print();

reverseQueue(q4);

console.log("Reversed");
q4.print();
