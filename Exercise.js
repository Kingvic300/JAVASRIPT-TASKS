let a = 12;
let b = 14;
let c = 23;
a += b;
a /= c;
c %= b;
console.log(a,b,c);

let list = [1,2,3,4];
let num = 0;
for(count = 0; count<list.length;count++){
	num+=list[count];
}
		console.log(num);

let var1 = 12;
let var2 = 23;
let var3 = 24;

let value1 = var2;
let value2 = var3;
let value3 = var1;
var1 = value1;
var2 = value2;
var3 = value3;
console.log(var1,var2,var3);
