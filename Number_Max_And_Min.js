const prompt = require('prompt-sync')();
 
const number1 = prompt('Enter 1st number');
const number2 = prompt('Enter 2nd number');
const number3 = prompt('Enter 3rd number');

let result1 = number1 + number2 * number3;
let result2 = number3 + number1 / number2;
let result3 = number1 % number2 + number3;
let result4 = number1 * number2 + number3;
let max = result1;
let min = result1;
if(result2 > max){
	max = result2;
}
if(result3 > max){
	max = result3;
}
if(result4 > max){
	max = result4;
}
if(result2 < min){
	min = result2;
}
if(result3 < min){
	min = result3;
}
if(result4 < min){
	min = result4;
}
console.log("max value-" + max);

console.log("min value-" + min);













