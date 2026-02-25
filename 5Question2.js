class MinStack {
  constructor() {
    this.stack = []; // main stack
    this.minStack = []; //  minimum stack
  }

  push(value) {
    this.stack.push(value);

    // Push the new min onto minStack
    if (this.minStack.length === 0) {
      this.minStack.push(value);
    } else {
      const currentMin = this.minStack[this.minStack.length - 1];
      this.minStack.push(Math.min(value, currentMin));
    }
  }

  pop() {
    if (this.stack.length === 0) {
      return null;
    }
    const popped = this.stack.pop();
    this.minStack.pop(); // remove corresponding min too
    return popped;
  }

  top() {
    if (this.stack.length === 0) return null;
    return this.stack[this.stack.length - 1];
  }

  getMin() {
    if (this.minStack.length === 0) return null;
    return this.minStack[this.minStack.length - 1]; //  the current min
  }
}

console.log("Min Stack Test");
const ms = new MinStack();

ms.push(5);
ms.push(3);
ms.push(7);
ms.push(2);
ms.push(8);

console.log(ms.top()); // 8
console.log(ms.getMin()); // 2

console.log();
ms.pop(); // remove 8
ms.pop(); // remove 2

console.log(ms.top()); // 7
console.log(ms.getMin()); // 3
