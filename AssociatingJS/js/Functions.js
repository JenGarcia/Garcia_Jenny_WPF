//Functions - Function Execution

function outptMsg(){
	console.log("Hello World");//things within curly brackets is what the "factory" will perform
}

function calcArea(){
	var width = 20;
	var height = 30;
	var area = width * height;
	console.log(area);
}

calcArea(); //invoke the function so that it can print out to the console
calcArea(); //if stated more than once, the answer will appear in the console multiple times as well