//Jenny Garcia
//June 16, 2013
//Conditionals Personal

var freeLanceEarnings = 300; //Average monthly earnings
var newCar = 700; //Total car monthly payments including insurance
var monthlyJobEarnings = 800; //Monthly earnings from part-time job

if(freeLanceEarnings > newCar){ //States the fact that freeLanceEarnings are lesser than newCar payments
	console.log("Sorry, you can't afford a car just yet."); //Prints out results to the console regarding statement
}else if(monthlyJobEarnings > newCar){ //Shows that hourlyjobpay is greather than car payments
	console.log("Congratulations! You can now search for a new car."); //if hourlypay job is enough to make car payments "you can buy a new car!"
}