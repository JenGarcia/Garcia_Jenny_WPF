//Jenny Garcia
//June 26, 2013
//Functionals Industry -- Freelance Charges for Web Design

var first = timeCalc(120, 120, 60);//Arguments needed to store in parameters. This is the time frame for each project in minutes.
var payment = calcPayment(65, 150, 120);//Arguments needed to store in parameters. This is the fee for each project.

function timeCalc(d, p, f){//Parameters - Stores reusable information. D=Design, P=Programming and F=Flash
	var firstTotal = d + p + f//Calculating the time spent on each project in minutes.
	return firstTotal;//Spits out information out of function.
}
console.log("Jane spent a total of " + first + " minutes working. Which equals to " + first/60 + " hours.")//Prints the information out to the console.

function calcPayment(f, p, d){//Parameters - Stores information from arguments.
	var amountTotal = f + p + d//Calculating information that's stored within parameters.
	return amountTotal;//Spits out information out of function.
}
console.log("Calculating the time Jane spent working, she earned a total of " + payment + " dollars.")//Information printed out to the console.

var second = calcTime(60, 60, 30);
var secondPayment = paymentCalc(60, 75, 30);

function calcTime(d, p, f){
	var secondTime = d + p + f
	return secondTime;
}
console.log("The customer needed a few adjusments, so Jane had to spend " + second + " more minutes working. Adding " + second/60 + " hours to the " + first/60 + " hours she had already worked.")

function paymentCalc(f, p, d){
	var secondTotal = f + p + d
	return secondTotal
}
console.log("With more time being spent on this project, Jane earned " + secondPayment + " dollars. Adding to the " + payment + " dollars she has already earned.")

var minutes = calcMinutes(300, 150)
var money = calcMoney(165, 335)

function calcMinutes(f, s){
	var time = f + s 
	return time;
}
function calcMoney(s, f){
	var amount = s + f;
	return amount
}
console.log("In total Jane worked " + minutes + " minutes. Which equals a total of " + minutes/60 + " hours spent working. Earning a total of " + money + " dollars.")