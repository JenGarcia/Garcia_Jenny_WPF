//Jenny Garcia
//June 26, 2013
//Functionals Industry -- Freelance Charges for Web Design

var first = timeCalc(120, 120, 60);//Arguments needed to store in parameters. This is the time frame for each project in minutes.
var payment = calcPayment(65, 150, 120);//Arguments needed to store in parameters. This is the fee for each project.

function timeCalc(d, p, f){//Parameters - Stores reusable information. D=Design, P=Programming and F=Flash
	var firstTotal = d + p + f
	return firstTotal;
}
console.log(first)

function calcPayment(f, p, d){
	var amountTotal = f + p + d
	return amountTotal;
}
console.log(payment)