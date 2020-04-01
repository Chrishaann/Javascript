function isPalindrome(s1){
	var stringArray = s1.split("");
	var stringLength = s1.length - 1;
	var i;
				
	for(i=0; i<=stringLength; i++) {
		if (stringArray[i] != stringArray[stringLength - i]) {
			return document.getElementById("display2").innerHTML = "not palindrome";
		}
		else if (i==stringLength) {
			return document.getElementById("display2").innerHTML = "palindrome";
		}
	} 
}