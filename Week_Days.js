const prompt = require('prompt-sync')();

const number = prompt('enter the number for week Day');
if(number == 1){
        console.log("Sunday");
}
else if(number == 2){
        console.log("Monday");
}
else if(number == 3){
        console.log("Tuesday");
}
else if(number == 4){
        console.log("Wednessday");
}
else if(number == 5){
        console.log("Thusday");
}
else if(number == 6){
        console.log("Friday");
}
else if(number == 7){
        console.log("Saturday");
}
else{
        console.log("You have enter wrong number");
}
