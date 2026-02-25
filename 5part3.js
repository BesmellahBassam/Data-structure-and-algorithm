//  Stack class

class Stack {
  constructor() {
    this.data = [];
  }

  push(value) {
    this.data.push(value);
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }
    return this.data.pop();
  }

  top() {
    if (this.isEmpty()) {
      return null;
    }
    return this.data[this.data.length - 1];
  }

  isEmpty() {
    return this.data.length === 0;
  }

  size() {
    return this.data.length;
  }

  print() {
    console.log("Stack", [...this.data]);
  }
}

//  Push and Pop
const stack = new Stack();
stack.push(10);
stack.print();
stack.push(20);
stack.print();
stack.push(30);
stack.print();
console.log("pop", stack.pop());
stack.print();

//  Check if Stack is Empty
const stack2 = new Stack();
stack2.isEmpty();
stack2.push(1);
stack2.push(2);
stack2.isEmpty();

//  Get Top Element
const stack3 = new Stack();
stack3.push(5);
stack3.push(15);
stack3.push(25);
console.log(stack3.top());
stack3.pop();
console.log(stack3.top());

//  Reverse a Stack
const original = new Stack();
[1, 2, 3].forEach((n) => original.push(n));

console.log("Original");
original.print();

const temp = new Stack();
while (!original.isEmpty()) {
  temp.push(original.pop());
}

console.log("Reversed");
temp.print();
