const prompt = require('prompt-sync')();
const number1 = prompt("enter the starting number");
const number2 = prompt("enter the ending number");
for(var i = number1 ; i <= number2 ; i++ ){
        if ( i == 1 || i == 0 ){
                continue;
        }
        var isPrime = 1;
        for ( var j = 2 ; j <= i/2 ; j++ ){
                if ( i % j == 0 ){
                        isPrime = 0;
                        break;
                }
        }
        if ( isPrime == 1 ){
                console.log(i);
        }
}
