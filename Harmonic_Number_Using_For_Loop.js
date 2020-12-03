const prompt = require('prompt-sync')();
const number = prompt("enter the number");
process.stdout.write("Hn=");
for(var i = 1 ; i < number ; i++ ){
        process.stdout.write("1/"+i+"+");
}
process.stdout.write("1/"+i);
