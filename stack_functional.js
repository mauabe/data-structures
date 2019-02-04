var Stack = function() {
  var someInstance = {};

  // Using an object with numeric keys to store values
  var storage = {};
  
  // let lastKey = Object.keys(storage).sort((a,b) => a - b).pop();
  // let firstKey = Object.keys(storage).sort((a,b) => a - b).shift();
  let size = 0;
  let head = 0;
  let tail = 0;

  // Implement the methods below
  someInstance.push = function(value) { 
    storage[tail] = value;
    tail += 1;
    size += 1;
  };

  someInstance.pop = function() {
    let last = storage[tail -1];
    delete storage[tail - 1];
    tail -= 1;
    size -= 1;
    return last;
  };

  someInstance.size = function(){ 
    while(tail > head){
      // size = tail - head;
      return size;
    }
    return 0;
  };

  return someInstance;
};
