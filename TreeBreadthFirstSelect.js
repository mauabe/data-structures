var Tree = function(value){
  this.value = value;
  this.children = [];
};

Tree.prototype.BFSelect = function(filter) {
  var queue = new Queue();

  //Your code here

};

/**
 * You shouldn't need to change anything below here, but feel free to look.
 */



/**
  * add an immediate child
  * (wrap values in Tree nodes if they're not already)
  */
Tree.prototype.addChild = function(child){
  if (!child || !(child instanceof Tree)){
    child = new Tree(child);
  }

  if(!this.isDescendant(child)){
    this.children.push(child);
  }else {
    throw new Error('That child is already a child of this tree');
  }
  // return the new child node for convenience
  return child;
};

/**
  * check to see if the provided tree is already a child of this
  * tree __or any of its sub trees__
  */
Tree.prototype.isDescendant = function(child){
  if(this.children.indexOf(child) !== -1){
    // `child` is an immediate child of this tree
    return true;
  }else{
    for(var i = 0; i < this.children.length; i++){
      if(this.children[i].isDescendant(child)){
        // `child` is descendant of this tree
        return true;
      }
    }
    return false;
  }
};

/**
  * remove an immediate child
  */
Tree.prototype.removeChild = function(child){
  var index = this.children.indexOf(child);
  if(index !== -1){
    // remove the child
    this.children.splice(index,1);
  }else{
    throw new Error('That node is not an immediate child of this tree');
  }
};


// BFS uses a queue since we want to utilize its first in first out structure.  
// We start by pushing the first node into our queue.  
// Next, we shift that node out and run our filter function on its value.  
// If it is filtered we add it to our result array.  
// Right after it’s filtered we push the children of our current node to the queue to 
// maintain the first in first out order, while simultaneously keeping track of 
// the depth of our tree. 


Tree.prototype.BFSelect = function(filter) { 
  var queue = [];
  var result=[];
  var depth=0;
  queue.push({tree:this,depth:depth})
    while (queue.length>0){ 
      var curr= queue.shift();
      if(filter(curr.tree.value, curr.depth)){ 
        result.push(curr.tree.value) 
      }
     curr.tree.children.forEach(function(x){
       queue.push({tree:x,depth:curr.depth+1}) }) 
     }
   return result; 
};
