function array(){
	let array = [1,2,3,4,];
	let sum = [array];
	let total = 0;
	for(let count = 0; count < array.length; count++){
		total += array[count]
	}
	return total;
}
console.log(array());