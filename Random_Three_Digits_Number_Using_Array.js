var numberArray = new Array();
for ( let loop = 0 ; loop < 10 ; loop++ ){
	numberArray[loop] = (Math.floor( 100 + Math.random() * 900 ));
	console.log(numberArray[loop]);
}
var max = numberArray[0];
var prevMax = max;
for( let loop = 0 ; loop < 10 ; loop++ ){
	if ( max < numberArray[loop] ){
		prevMax = max;
		max = numberArray[loop];
	}
	else if ( prevMax < numberArray[loop] ){
	prevMax = numberArray[loop];
	}
}
console.log("second max " + prevMax);

var min = numberArray[0];
var prevMin = min;
for(let loop=0;loop < 10 ; loop++ ){
	if (min > numberArray[loop] ){
		var prevMin=min;
		min=numberArray[loop];
	}
	else if (prevMin > numberArray[loop] ){
		prevMin=numberArray[loop];
	}
}
console.log("second min " + prevMin);
