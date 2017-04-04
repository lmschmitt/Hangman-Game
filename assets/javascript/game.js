
	//our answers object

	
	var answers = ['one', 'two', 'three'];
	//var word = document.getElementbyId("wordToGuess");
	//  in the array answerLetters one of the options from the answers array will randomly be chosen and split into individual characters.
	var answerLetters = [];
	var rand = answers[Math.floor(Math.random() * answers.length)];
	answerLetters = rand.split("");
	console.log(answerLetters);
	console.log(answerLetters[0]);
	

	for (i = 0; i < answerLetters.length; i++) {
		document.querySelector("#wordToGuess").innerHTML = "a";
        console.log("_");
      };

	document.onkeyup = function(event) {

	//log the key the user guesses as a variable called userGuess
	userGuess = event.key;
	console.log(userGuess);

	if (answerLetters.includes(userGuess)){
		console.log("true");
	};


};








