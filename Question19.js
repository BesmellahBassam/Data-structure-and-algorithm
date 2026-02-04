/* 
 Implement a Queue Using Two Stacks
*/

class Stack {
  constructor() {
    this.data = [];
  }
  add(record) {
    this.data.push(record);
  }
  remove() {
    return this.data.pop();
  }
  peek() {
    return this.data[this.data.length - 1];
  }
  isEmpty() {
    return this.data.length == 0 ? true : false;
  }
}

class QueueFromStack {
  constructor() {
    this.first = new Stack();
    this.second = new Stack();
  }

  add(record) {
    this.first.add(record);
  }

  remove() {
    while (this.first.peek()) {
      this.second.add(this.first.remove());
    }
    const record = this.second.remove();
    while (this.second.peek()) {
      this.first.add(this.second.remove());
    }
    return record;
  }

  peek() {
    while (this.first.peek()) {
      this.second.add(this.first.remove());
    }
    const record = this.second.peek();
    while (this.second.peek()) {
      this.first.add(this.second.remove());
    }
    return record;
  }
}

const shQueue = new QueueFromStack();
shQueue.add("karim");
shQueue.add("rahim");
shQueue.add("yahya");
console.log(shQueue.remove());
console.log(shQueue.remove());
// console.log(shQueue.remove());
