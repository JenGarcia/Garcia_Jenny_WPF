//Jenny Garcia
//June 20, 2013
//Conditionals Wacky

var start = alert("Driving... every teenagers dream. Unfortunately, \nit isn't something we can just do over night.")//Welcome alert
var secondAlert = alert("ATTENTION: Not all states in the U.S. have the same law.")//Alert message pop-up
var minimumAge = 16;
var acceptableAge = 17;
var perfectAge = 18;


if(minimumAge > perfectAge){//Minimum age is greater than perfect age, false.
	console.log("You cannot drive from 11pm to 6am. Unless accompanied by a license driver who is at least 21 years old.");//Prints results to the console if condition is true.
}else if(acceptableAge > perfectAge){//Acceptable age is greater than perfect age, false.
	console.log("You cannot drive between the hours of 1am to 5am. Unless accompanied by a license driver who is at least 21 years old.");//Prints results to the console if condition is true.
}else if(minimumAge && acceptableAge < perfectAge){//If minimum age AND acceptable age is less than perfect age
	console.log("Congratulations! You are 18 years old (or older) and your free to drive as you please. However, please remember to drive safely!!");//Prints results to the console if condition is true.
}

