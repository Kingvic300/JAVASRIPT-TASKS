const prompt = require('prompt-sync')();
let accountNumber = Number(prompt("Enter account number: "));
let beginningBalance = Number(prompt("Enter Beginning Balance: "));
let charges = 2.676;
let credits = 6.877;
let limit = 500000;
let newbalance = beginningBalance + Charges + Credits;
if (newbalance >= Limit){
	console.log("credit limit exceeded: ");
}else{
	console.log("credit limit not exceeded: ");
}