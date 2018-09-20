var Stack = function(initialValue) {
  this.storage = {};
  this.count = 0;
  
  if(initialValue !== undefined){
    this.storage[this.count] = initialValue;
    this.count++;
  }
};

Stack.prototype.size = function() {
  if (this.count > 0){return this.count}
  else {return 0}
  return this.count
};

Stack.prototype.peek = function() {
  if (this.count > 0){return this.storage[this.count-1]}
  else {return null};
  // return this.storage[this.count]
};

Stack.prototype.push = function(value) {
  this.storage[this.count] = value
  this.count++;
};

Stack.prototype.pop = function() {
  let last = this.storage[this.count-1]
  delete this.storage[this.count-1];
  if (this.count > 0){this.count--}
  else {last = null}
  return last;
};

// var stack = new Stack();
//     stack.push(15, 20, 25);
//     console.log(stack.size());
//     console.log(stack.pop()) //.to.equal(25);
//     console.log(stack.size())  //.to.equal(2);
//     console.log(stack.pop()) //.to.equal(20);
//     console.log(stack.size()) //.to.equal(1);
//     console.log(stack.pop()) //.to.equal(15);
//     console.log(stack.size()) //.to.equal(0);