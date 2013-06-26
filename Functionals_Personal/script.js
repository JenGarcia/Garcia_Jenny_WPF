//Jenny Garcia
//June 25, 2013
//Functions Personal -- Bus or Car?

var bus = calcTime(30, 20, 10);//Arguments - info being sent to parameters. Waiting time=30, bus=20, walk=10.

function calcTime(t, b, w){//Parameters - storing information.
	var busTravel = t + b + w//Calclating information.
	return busTravel;//Spits information out of function.
}
console.log("If you take public transportation, you will spend " + bus + " minutes on the bus, in order to get to your destination.")//Information that prints out to the console.


var car = calcTravel(5, 15, 3);//Arguments - info being sent to parameters "storage bins." Time getting gas=5, time driving=15, finding parking=3.

function calcTravel(g, d, p){//Parameters - "storage bins." Stores information from arguments.
	var carTravel = g + d + p//Calculating information that's stored within parameters.
	return carTravel;//Spits out the calculated information from var out of the function.
}
console.log("However, if you decide to travel by a vehicle, you will arrive at your destination in " + car + " minutes.")//Prints information to the console.

var busTime = 60;//Travel time on bus, 60 minutes.
var carTime = 23;//Travel time using a car, 23 minutes.

if(busTime < carTime){//If the time traveling on a bus takes longer than traveling by car, "You're better off traveling by car."
	console.log("You're better off traveling by car if taking public transportation takes too long.");//Information printed out to the console IF the statement is true.
}else{
	if(busTime > carTime)//If the time traveling by car takes longer than traveling in a bus, "Catch the bus if you want to get to your destination quickly!"
		console.log("If using public transportation is faster, catch the bus if you want to get to your destination on time!")//Information printed out to the console IF the statement is true.
}
//Ternary code used to summarize IF and ELSE coding above.
(busTime > carTime) ? console.log("You're better off traveling by car if taking public transportation takes too long.") : console.log("If using public transportation is faster, catch the bus if you want to get to your destination on time!")//Two different console codes shortened. The one that is true will be printed out to the console.
