const prompt = require('prompt-sync')();

var number = prompt('Enter the number for week days');
switch(number){
case '1':
        console.log("Sunday");
        break;
case '2':
        console.log("Monday");
        break;
case '3':
        console.log("Tuesday");
        break;
case '4':
        console.log("Wednessday");
        break;
case '5':
        console.log("Thusday");
        break;
case '6':
        console.log("Friday");
        break;
case '7':
        console.log("Saturday");
        break;
default:
        console.log("You have enter wrong option");
}
