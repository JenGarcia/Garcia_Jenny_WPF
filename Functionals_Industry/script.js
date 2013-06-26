//Jenny Garcia
//June 26, 2013
//Functionals Industry -- Freelance Charges for Web Design

var first = timeCalc(120, 120, 60);
var payment = calcPayment(65, 150, 120);

function timeCalc(d, p, f){
	var firstTotal = d + p + f
	return firstTotal;
}
console.log(first)

function calcPayment(f, p, d){
	var amountTotal = f + p + d
	return amountTotal;
}
console.log(payment)