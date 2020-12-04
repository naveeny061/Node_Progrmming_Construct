const prompt = require('prompt-sync')();
const number = prompt("enter the number");
var tempNumber=number;
var countFactor=0;
var primeFactor = new Array();
for( var loop = 2 ; loop <= number/2 ; loop++ ){
	if( tempNumber % loop == 0 ){
		tempNumber = tempNumber / loop ;
		primeFactor[countFactor]=loop;
		countFactor++;
		loop--;
	}
}
console.log("Prime factors of " + number + " = " + primeFactor);
