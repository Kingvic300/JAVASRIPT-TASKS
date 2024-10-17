const prompt = require('prompt-sync')();
let name = prompt("Name of citizen: ");
let earnings = Number(prompt("Enter their earnings: "));
if (earnings<=30000){
	let tax = 0.15*earnings;
	console.log(tax);
}else {
	let tax = 0.2*earnings;
	console.log(tax); 
}
