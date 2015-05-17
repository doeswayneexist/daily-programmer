var userString = prompt("Type in a sentence.");

//create a variable to store the new string
var noVowels = "";
var vowels = "";

//iterate though each character in the string
for (var i=0; i<userString.length; i++) {
	var cL = userString[i];
	if(cL == 'a' || cL == 'e' || cL == 'i' || cL == 'o' || cL == 'u') {
		vowels+=cL;
	} else if (cL == " ") {
		//do nothing
	}
	else {
		noVowels +=cL;
	}
}

alert(noVowels);
alert(vowels);

