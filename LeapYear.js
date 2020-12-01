let isleap="false"
const prompt = require('prompt-sync')();

const year = prompt('Enter year');
if(year%400 == 0){
	console.log("leap year");
}
else if((year%100 != 0) && (year%4 == 0)){
	console.log("leap year");
}
else{
	console.log("not a leap year");
}
