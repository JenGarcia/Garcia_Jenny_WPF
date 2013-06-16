//If and Else(Sample) Three or more blocks

var kidHeight = 46;
var minHeight = 50;
var wParentHeight = 45; //the height of the kid with the parent
//var sneakerLift = 2;

//if the child is old enough, print to the console "you can ride!"
//if the kid is over 48 inches in height
if(kidHeight > minHeight){
	//code performed if the condition is true
	//you can ride!
	console.log("You can ride the coaster!");
}else if(kidHeight > wParentHeight){
	//you can ride with a parent present
	console.log("You can ride, but only with a parent present.");
}else{
	//sorry you have growing to do
	console.log("Sorry kid, you've got some growing to do!")
}

