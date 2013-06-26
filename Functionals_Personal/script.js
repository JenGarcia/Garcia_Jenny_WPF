//Jenny Garcia
//June 25, 2013
//Functions Personal -- Bus or Car?

var bus = calcTime(30, 20, 10);

function calcTime(t, b, w){
	var busTravel = t + b + w
	return busTravel;
}
console.log("If you take public transportation, you will spend " + bus + " minutes on the bus, in order to get to your destination.")


var car = calcTravel(5, 15, 3);

function calcTravel(g, d, p){
	var carTravel = g + d + p
	return carTravel;
}
console.log("However, if you decide to travel by a vehicle, you will arrive at your destination in " + car + " minutes.")

var busTime = 60;
var carTime = 23;

if(busTime > carTime){
	console.log("You're better off traveling by car.")
}
