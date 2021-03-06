var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this._size = 0;
  this._head = 0;
  this._tail = 0;
  this.storage = {};
};

Stack.prototype.push = function(value){
  this.storage[this._tail] = value;
  this._tail += 1;
  this._size += 1;
};

Stack.prototype.pop = function(){
  let last = this.storage[this._tail - 1];
  delete this.storage[this._tail - 1];
  this._tail -= 1;
  this._size -= 1;
  return last;
};

Stack.prototype.size = function(){
  while(this._tail > this._head){
    return this._size;
  }    
  return this._size = 0;
};
