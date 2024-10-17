let number = 5;
let factors = 1;
while(number != 0){
	factors *= number
	number--;
	if(factors > 1000){
		break;
	}
}
console.log(factors);