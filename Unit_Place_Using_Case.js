const prompt = require('prompt-sync')();

var number = prompt('Enter the number in unit place');
switch(number){
case '1':
        console.log("Unit");
        break;
case '10':
        console.log("Ten");
        break;
case '100':
        console.log("Hundred");
        break;
case '1000':
        console.log("Thousand");
        break;
case '10000':
        console.log("Ten Thousand");
        break;
default:
        console.log("You have enter wrong option");
}
