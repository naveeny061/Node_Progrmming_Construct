var numberArray = new Array();
var countInput=0;
for (let loop = 00 ; loop <= 100 ; loop++) {
    if ( Math.floor(loop/10) == (loop % 10)) {
        numberArray[countInput]=loop;
	countInput++;
    }
}
console.log("Repeated digits are : " + numberArray);
