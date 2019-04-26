// Array of numbers.
var numList = ["1", "2", "3", "4", "5", "6",
  "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17",
  "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28",
  "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39",
  "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50",
  "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61",
  "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72",
  "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86",
  "87", "88", "89", "90", "91", "92", "93", "94", "95", "96", "97",
  "98", "99", "100", "101", "102", "103", "104", "105", "106", "107", "108",
  "109", "110", "111", "112", "113", "114","115","116","117","118","119","120"];

// Computer selected solution will be held here.
var chosenNum = "";

// This will break the solution into individual letters to be stored in array.
var randomNum = [];

// This will be the number of blanks we show based on the solution.
var numBlanks = 0;


// Holds all of the wrong guesses.
var wrongGuesses = [];

var numbersGuessed = "";

// Game counters
var winCounter = 0;
var lossCounter = 0;
var numGuesses = 9;


// startGame()

function startGame() {

  numGuesses = 9;

 
  chosenNum = numList[Math.floor(Math.random() * numList.length)];

  randomNum = chosenNum.split("");

  numBlanks = randomNum.length;

  
  blanksAndSuccesses = [];


 
  for (var i = 0; i < numBlanks; i++) {
    blanksAndSuccesses.push("_");
  }

  console.log(blanksAndSuccesses);

  document.getElementById("guesses-left").innerHTML = numGuesses;

  document.getElementById("").innerHTML = blanksAndSuccesses.join(" ");

  document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");
}


function roundComplete() {

  console.log("WinCount: " + winCounter + " | LossCount: " + lossCounter + " | NumGuesses: " + numGuesses);

  // Update the HTML to reflect the new number of guesses.
  document.getElementById("guesses-left").innerHTML = numGuesses;

  // This will print the array of guesses and blanks onto the page.
  document.getElementById("").innerHTML = blanksAndSuccesses.join(" ");

  // This will print the wrong guesses onto the page.
  document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");

  
  if (lettersInChosenWord.toString() === blanksAndSuccesses.toString()) {

    winCounter++;
    alert("You win!");

    document.getElementById("win-counter").innerHTML = winCounter;

    // Restart the game
    startGame();
  }

  else if (numGuesses === 0) {

    lossCounter++;

    alert("You lose");

    document.getElementById("loss-counter").innerHTML = lossCounter;

    startGame();

  }

}

startGame();

document.onkeyup = function(event) {

  checkNumbers(numbersGuessed);

  roundComplete();
};
