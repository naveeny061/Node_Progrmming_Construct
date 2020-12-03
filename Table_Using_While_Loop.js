const prompt = require('prompt-sync')();
const number = prompt("enter the  number");
loop=1;
result=0;
while( Math.pow(2,loop) <= 256){
	var result=Math.pow(number, loop);
	console.log(number + " ^ "+loop + " = " + result);
	loop++;
}
