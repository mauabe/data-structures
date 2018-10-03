const bubbleSort = function(array) {
	let bucket;
	let isSorted = false;
	for(let i = 0; i < array.length && !isSorted; i++){
		sorted = true;
		for(let j = 0; j < array.length - i; j++){
			if(array[j] > array[j + 1]){
				bucket = array[j + 1];
				array[j + 1] = array[j];
				array[j] = bucket;
				
				isSorted = false
			}
		}
	}
 return array
}


let array1 = [1, 3, 2];
console.log(array1); 
console.log (bubbleSort(array1));