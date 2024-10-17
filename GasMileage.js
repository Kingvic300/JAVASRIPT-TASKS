const prompt = require('prompt-sync')();
let trips = Number(prompt("Input number of trips: "));
let totalMiles = 0;
let totalGallon = 0;
for(let count = 0; count<trips;count++){
	let miles = Number(prompt("input miles driven: "));
	totalMiles =+ miles;
	let gallon = Number(prompt("input gallon used: "));
	totalGallon =+ gallon;
}
	let totalMilesPerGallon = (totalMiles/totalGallon);
	console.log("Your total miles per gallon used is: " +  totalMilesPerGallon); 