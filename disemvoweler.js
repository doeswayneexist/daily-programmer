//get a string from the user and delete all the spaces from it
var userString = prompt("Type in a sentence.").replace(" ","");

//create a variable to store the new string
var noVowels = "";
var vowels = "";

//iterate though each character in the string
for (var i=0; i<userString.length; i++) {
	var cL = userString[i];
	if(cL == 'a' || cL == 'e' || cL == 'i' || cL == 'o' || cL == 'u') {
		vowels+=cL;
	} else {
		noVowels +=cL;
	}
}

alert(noVowels);
alert(vowels);

