//Functions - Anonymous

/*var functionName = function(){ //requires var
	//code to run would be in here
}

functionName();*/

/*function calcArea(width, height){ //this is a sample we will use to show how anonymous function is written
	//code the function runs
	var area = width * height;
	return area;
}*/

var calcArea = function(width, height){ //anonymous have to be declared before calling. invoking after define
	//code the function runs
	var area = width * height;
	return area;
}

var a = calcArea (20, 30) //invoking
//calcArea(20, 30); //still needs to invoke
console.log(a);
