let number = 12;
let star = "*";
for(count = 1;count <= number;count++){
	for(spaces = count;spaces < number;spaces++){		
		console.log(" ");
	}

	for(counter = 1;counter<=(2*count-1);counter++){
		console.log(star);	
	}
	console.log();
}