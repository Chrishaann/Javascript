function showFibonacci(sequenceOrder) {
	var sequenceOrder = document.getElementById("sequenceOrder").value;
	var temp;
	var i;
	var text = "0, 1";
	document.getElementById("display1").innerHTML = "Show Sequence for Sequence Order " + sequenceOrder;
	
	if (sequenceOrder == 1) {
		text = "0";
		return text;
	} 
	else if (sequenceOrder == 2) {
		text = "0, 1";
		return text;
	}
	else {
		var curr = 1;
		var prev = 0;
		for(i=3; i<=sequenceOrder; i++) {
			temp = curr;
			curr = curr + prev;
			prev = temp;
			text = text + ", " + curr ;
		}
		return text;
	}
}