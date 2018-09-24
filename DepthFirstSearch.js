class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  addChild(value) {
    this.children.push(new Tree(value));
    return this;
  }

  depthFirstSearch(array) {
		array.push(this.value)
		for(let child of this.children){
			child.depthFirstSearch(array)
		}
    return array;
  }
}