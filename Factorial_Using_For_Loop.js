const prompt = require('prompt-sync')();
const number = prompt("enter the  number");
var factorial = 1 ;
for(var i = number ; i > 1 ; i-- ){
	factorial*=i;
}
console.log(number+" factorial="+factorial);
