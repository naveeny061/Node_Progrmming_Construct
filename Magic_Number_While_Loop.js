const prompt = require('prompt-sync')();
const number = prompt("enter the  number between 1 and 100 -");
var maxLimit=100
var minLimit=0
while (true){
	if ( number < (minLimit + maxLimit ) / 2 )
		maxLimit = ( minLimit + maxLimit ) / 2 ;
	else if ( number > ( minLimit + maxLimit ) / 2 )
		minLimit = ( minLimit + maxLimit ) / 2 ;
	else{
		console.log( "number is" + ( maxLimit + minLimit ) / 2 );
		break;
	}
}


