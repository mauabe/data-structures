var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {}
  obj.storage = {};
  obj._size = 0;
  obj._head = 0;
  obj._tail = 0;

  obj.size = queueMethods.size;
  obj.enqueue = queueMethods.enqueue;
  obj.dequeue = queueMethods.dequeue;
  return obj;
};

  var queueMethods = {};

  queueMethods.enqueue = function(value){
    this.storage[this._tail] = value;
    this._tail += 1;
    this._size += 1;
  };
  queueMethods.dequeue = function(){
    var first = this.storage[this._head];
    delete this.storage[this._head];
    this._head += 1;
    this._size -= 1;
    return first;
  };
  queueMethods.size = function(){
    while(this._tail > this._head){
      return this._size;
    }    
    return this._size = 0;
  };



