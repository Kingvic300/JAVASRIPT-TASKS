let string = "hello world";
let vowel = [string];
let counter = 0;
for(let count = 0; count < string.length; count++){
	if(string[count] == 'a' || string[count] == "e" || string[count] == 'i' || string[count] == 'o' || string[count] == 'u'){
		counter++;
	}

}
console.log(counter);
