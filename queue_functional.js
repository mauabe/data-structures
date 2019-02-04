var Queue = function() {
  var someInstance = {};

  // Using an object with numeric keys to store values
  var storage = {};

  // let lastKey = Object.keys(storage).sort((a,b) => a - b).pop();
  // let firstKey = Object.keys(storage).sort((a,b) => a - b).shift();
  let size = 0;
  let head = 0;
  let tail = 0;

  someInstance.enqueue = function(value) {
    storage[tail] = value;
    tail += 1;
    size += 1;
  };
  
  someInstance.dequeue = function() {
    let first = storage[head];
    delete storage[head];
    head += 1;
    size -= 1;
    return first;
  };

  someInstance.size = function() {
    while(tail > head){
      return size;
    }    
    return 0;
  };

  return someInstance;
};