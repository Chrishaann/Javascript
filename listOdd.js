function listOdd(x,y){
	document.getElementById("display1").innerHTML = "Integer 1 is: " + x;
	document.getElementById("display2").innerHTML = "Integer 2 is: " + y;
	var listOdd = "Odd Integers ";
	var oddChecker;
	while(x != y){
	if (y < x){
		document.getElementById("display2").innerHTML = "";
		document.getElementById("display3").innerHTML = "";
		return document.getElementById("display1").innerHTML = "Start Integer must not be higher than End Integer";
	}
	oddChecker = x%2;
	if (oddChecker != 0) {
		listOdd = listOdd + ", " + x;
	}
	x++;
	}
	return document.getElementById("display3").innerHTML = listOdd;
}