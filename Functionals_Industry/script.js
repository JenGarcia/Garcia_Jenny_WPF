//Jenny Garcia
//June 26, 2013
//Functionals Industry -- Freelance Charges for Web Design

var first = timeCalc(120, 120, 60);//Arguments needed to store in parameters. This is the time frame for each project in minutes.
var payment = calcPayment(65, 150, 120);//Arguments needed to store in parameters. This is the fee for each project.

function timeCalc(d, p, f){//Parameters - Stores reusable information. D=Design, P=Programming and F=Flash
	var firstTotal = d + p + f//Calculating the time spent on each project in minutes.
	return firstTotal;//Spits out information out of function.
}
console.log(first)//Prints the information out to the console.

function calcPayment(f, p, d){//Parameters - Stores information from arguments.
	var amountTotal = f + p + d//Calculating information that's stored within parameters.
	return amountTotal;//Spits out information out of function.
}
console.log(payment)//Information printed out to the console.