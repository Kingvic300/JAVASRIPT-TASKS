let number = 10;
let factors = 1;
while(number != 0){
	factors *= number
	number--;
}
if(factors > 1000){
	console.log("error");
}else
	console.log(factors);