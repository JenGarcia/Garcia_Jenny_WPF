//Jenny Garcia
//June 16, 2013
//Conditionals Personal

var freeLanceEarnings = 300; //Average monthly earnings
var newCar = 500; //Total car monthly payments
var monthlyJobEarnings = 600; //Monthly earnings from part-time job
var carInsurance = 250; //Monthly car insurance fee
var totalCarPayments = 750 //Amount needed to pay off car monthly

if(freeLanceEarnings > newCar){ //States the fact that freeLanceEarnings are lesser than newCar payments
	console.log("Sorry, you can't afford a car just yet."); //Prints to the console, if condition is true. However, condition is false.
}else if(carInsurance > freeLanceEarnings){
	console.log("You can only afford car insurance with your freelance earnings.");//Prints to the console if condition is true. In this case, the condition is false.
}else if(monthlyJobEarnings < newCar){ //Shows that monthly earnings are greater than car payments
	console.log("You can only afford a new car, but without insurance."); //Prints to the console if condition is true. 
}else if(freeLanceEarnings + monthlyJobEarnings > totalCarPayments)
	console.log("Congratulations!")