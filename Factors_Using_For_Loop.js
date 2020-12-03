const prompt = require('prompt-sync')();
const number = prompt("enter the number");
var tempNumber=number;
console.log("1");
for( var i = 2 ; i <= number ; i++ ){
	if( tempNumber % i == 0 ){
		tempNumber = tempNumber / i ;
		console.log(i);
		i--;
	}
}
console.log(number);
