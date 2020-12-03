const prompt = require('prompt-sync')();
const number = prompt("enter the number");
if(( number == 1 ) || ( number ==2 )){
	console.log("prime number");
}
else{
	for(var i = 3 ; i < number ; i++ ){
		if(number%i==0){
        		console.log("Not a prime number");
			process.exit();
		}
	}
	console.log("prime number");
}


