const prompt = require('prompt-sync')();
var number = prompt("enter the  number");
function palindrome(){
	var storeNumber = 0;
	var reverseNumber = 0;
	var orignalNumber = number ;
	while (number > 0 ){
		storeNumber = number % 10 ;
    		number = Math.floor(number / 10) ;
    		reverseNumber = reverseNumber * 10 + storeNumber  ;
	}
	if ( orignalNumber == reverseNumber )
  		console.log("Number is palindrome");
	else
  		console.log("Number is NOT palindrome");
}
palindrome();
