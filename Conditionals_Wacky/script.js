//Jenny Garcia
//June 20, 2013
//Conditionals Wacky

var start = alert("Driving... every teenagers dream. Unfortunately, \nit isn't something we can just do over night.")//Welcome alert
var secondAlert = alert("ATTENTION: Not all states in the U.S. have the same law.")//Alert message pop-up
var minimumAge = 16;
var acceptableAge = 17;
var perfectAge = 18;


if(minimumAge > perfectAge){
	console.log("You can only drive from 11pm to 6am with a license driver, who is 21 years old or older.")
}else if(acceptableAge < perfectAge){
	console.log("You cannot drive between the hours of 1am to 5am. Unless accompanied by a license driver who is at least 21 years old.")
}

