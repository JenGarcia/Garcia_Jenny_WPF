//Jenny Garcia
//June 25, 2013
//Functions Personal -- Bus or Car?

var bus = calcTime(30, 20, 10);//arguments - info being sent to parameters. Waiting time=30, bus=20, walk=10.

function calcTime(t, b, w){//Parameters - storing information.
	var busTravel = t + b + w//Calclating information.
	return busTravel;//Spits information out of function.
}
console.log("If you take public transportation, you will spend " + bus + " minutes on the bus, in order to get to your destination.")//Information that prints out to the console.


var car = calcTravel(5, 15, 3);

function calcTravel(g, d, p){
	var carTravel = g + d + p
	return carTravel;
}
console.log("However, if you decide to travel by a vehicle, you will arrive at your destination in " + car + " minutes.")

var busTime = 60;
var carTime = 23;

/*if(busTime > carTime){
	console.log("You're better off traveling by car.");
}else{
	if(busTime < carTime)
		console.log("Catch the bus if you want to get to your destination quickly!")
}*/

(busTime > carTime) ? console.log("You're better off traveling by car.") : console.log("Catch the bus if you want to get to your destination quickly!")
