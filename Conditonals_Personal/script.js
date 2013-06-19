//Jenny Garcia
//June 16, 2013
//Conditionals Personal

var freeLanceEarnings = 300; //Average monthly earnings
var newCar = 500; //Total car monthly payments
var monthlyJobEarnings = 600; //Monthly earnings from part-time job
var carInsurance = 250; //Monthly car insurance fee

if(freeLanceEarnings > newCar){ //States the fact that freeLanceEarnings are lesser than newCar payments
	console.log("Sorry, you can't afford a car just yet."); //Prints out results to the console regarding statement
}else if(carInsurance < freeLanceEarnings){
	console.log("You can only afford car insurance with your freelance earnings.");
}else(monthlyJobEarnings > newCar){ //Shows that monthly earnings are greater than car payments
	console.log("Congratulations! You can now search for a new car."); //prints to the console if condition is true. hourlypay job is enough to make car payments "you can buy a new car!"
}