/*
Implement a Stack (Array-Based)
Operatins: push, pop, peek, isEmpty.
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

const stack = new Stack();
stack.add("karim");
stack.add("rehim");
stack.remove();
stack.peek();
stack.isEmpty();
