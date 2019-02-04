var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {}
  obj._size = 0;
  obj._head = 0;
  obj._tail = 0;
  obj.storage = {};

  obj.push = stackMethods.push;
  obj.pop = stackMethods.pop;
  obj.size = stackMethods.size;

  return obj;
};

var stackMethods = {};

stackMethods.push = function(value){
  this.storage[this._tail] = value;
  this._tail += 1;
  this._size += 1;
};
stackMethods.pop = function(){
  var last = this.storage[this._tail -1];
  delete this.storage[this._tail - 1];
  this._tail -= 1;
  this._size -= 1;
  return last;
};

stackMethods.size = function(){
  while(this._tail > this._head){
    return this._size;
  }
  return this._size = 0;
};
