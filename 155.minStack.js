var MinStack = function() {
  this.stack = [];
  this.minStack = [];
};

/** 
* @param {number} x
* @return {void}
*/
MinStack.prototype.push = function(x) {
  let currMin = this.minStack[this.minStack.length - 1];
  console.log(currMin)
  if (currMin === undefined || currMin >= x){
      this.minStack.push(x);
  }
  this.stack.push(x);
  console.log(this.minStack)
  return;
};

/**
* @return {void}
*/
MinStack.prototype.pop = function() {
  let removed = this.stack.pop();
  if (removed === this.minStack[this.minStack.length - 1]){
      this.minStack.pop();
  }
  return removed;
};

/**
* @return {number}
*/
MinStack.prototype.top = function() {
  return this.stack[this.stack.length -1];
};

/**
* @return {number}
*/
MinStack.prototype.getMin = function() {
  return this.minStack[this.minStack.length - 1];
};

let s = new MinStack();
console.log(s.getMin())
s.push(0);
s.push(1);
s.push(0);
console.log(s.getMin())
s.pop();
console.log(s.getMin())

