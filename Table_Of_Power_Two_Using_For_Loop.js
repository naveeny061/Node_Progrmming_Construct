const prompt = require('prompt-sync')();
const number = prompt("enter the number");
var result = 0;
for(var i = 1 ; result <= Math.pow( 2 , number ) ; i++ ){
	result = Math.pow(2,i);
	console.log("2^"+i+"="+result);
}
