class QueueUsingStacks {
  constructor() {
    this.inbox = []; // Stack 1  for pushing
    this.outbox = []; // Stack 2  for popping/peeking
  }

  // Always push to inbox
  push(data) {
    this.inbox.push(data);
  }

  // Transfer inbox to outbox
  transferToOutbox() {
    if (this.outbox.length === 0) {
      while (this.inbox.length > 0) {
        this.outbox.push(this.inbox.pop());
      }
    }
  }

  pop() {
    if (this.empty()) {
      return null;
    }
    this.transferToOutbox();
    const front = this.outbox.pop();
    return front;
  }

  // see front element
  peek() {
    if (this.empty()) {
      return null;
    }
    this.transferToOutbox();
    return this.outbox[this.outbox.length - 1];
  }

  // Check if queue is empty
  empty() {
    return this.inbox.length === 0 && this.outbox.length === 0;
  }
}

const q = new QueueUsingStacks();

// Push elements
q.push(1);
q.push(2);
q.push(3);
q.peek();

console.log("pop elements ");
q.pop(); // removes 1
q.pop(); // removes 2

console.log("push more");
q.push(4);
q.push(5);

console.log("pop again");
q.pop(); // removes 3
q.pop(); // removes 4
q.pop(); // removes 5

q.empty(); // true
q.pop(); // null
