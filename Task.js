const object = {name: "Alice", age: 30, city: "Wonderland"};
counter = 0;
for(const count in object){
	counter++
}
console.log("The number of properties are "+counter);

console.log("leap year");
function leapyear(year){
	if(year % 4 == 0){
		return true;
	}else{
		return false;	
	}
}
console.log(leapyear(2012));

console.log("Your grade is ")
const grade = {math: 90, english: 85, science: 88};
for(const count in grade){
	console.log(`${count}: ${grade[count]}`);
}
function convertToFahrenheit(Celsius){
	let fahrenheit = Celsius * (9/5) + 32;
	return fahrenheit;
}
console.log("Your degree in fahrenheit is "+convertToFahrenheit(32));




console.log("Your expenses are ");
const expense = {"groceries": 150, "dining out": 100, "transportation": 50, "entertainment": 80};
let total = 0;
for(const expenses in expense){
	total += expense[expenses];
}
console.log(total);