const prompt = require('prompt-sync')();
function celciusToFahrehnite() {
	const celcius = prompt("enter the celcius between 0 to 100=");
	if ( celcius >= 0 && celcius <= 100 ){
		var fahrehnite = celcius * 9 / 5 + 32 ;
		console.log("fahrehnite =" + fahrehnite);
	}
	else
	console.log("celcius enter is not between 0 to 100 ")
}

function fahrehniteToCelcius() {
	const fahrehnite = prompt("enter the fahrehnite between 32 to 212=")
	if ( fahrehnite >= 32 && fahrehnite <= 212 ){
		var celcius = ( fahrehnite - 32 ) * 5 / 9 ;
		console.log("celcius =" + celcius);
	}
	else
		console.log("fahrehnite enter is not between 32 and 212");

}
const choice = prompt("1.celcius to fahrehnite or 2.fahrehnite to celcius");
switch (choice) {
	case '1' : celciusToFahrehnite() ;
		break;
	case '2' : fahrehniteToCelcius() ;
		break;
	default : console.log("you have enter wrong choise");
}
