var standard_input = process.stdin;

// Set input character encoding.
standard_input.setEncoding("utf-8");

// Prompt user to input data in console.
console.log("Please guess a letter:");

// When user input data and click enter key.

standard_input.on("data", function(guess) {
  let arr = "hello";
  var splitWord = arr.split("");
  //console.log(splitWord);
  var cleanGuess = guess.trim().toLowerCase();

  let dashes = splitWord.map(dashes => {
    return "_";
  });
  console.log("guess this word:", dashes);
  var incorrectGuess = [];
  var position = splitWord.indexOf(cleanGuess);
  if (position > -1) {
    dashes[position] = cleanGuess;
  } else {
    incorrectGuess.push(cleanGuess);
  }
  var correctGuesses = dashes;
  console.log("correct Guesses:", correctGuesses);
  console.log("incorrect guess:", incorrectGuess);
  console.log(position);
  console.log(cleanGuess);
});
