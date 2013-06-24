//Functions - Returning Value  Sending information outside of the function

var total = calcArea(30, 20); //arguments - inputting info. create var to store info in order for it to spit out

function calcArea(w, h){ //storage bins w=30, h=20. order is important!
	var area = w * h;
	return area; //function is spitting the information out
}
console.log(total); //functions that are returning should be assigned to variables

