const prompt = require('prompt-sync')();
let number = Number(prompt("Input first number:"));
let digit = Number(prompt("input second number:"));
if(number==digit){
	console.log("0");
}else if(number>digit){
	console.log("1");
}else if(number<digit){
	console.log("-1");
}

