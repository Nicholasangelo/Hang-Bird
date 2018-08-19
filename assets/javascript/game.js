// MAKE A LIST OF POSSIBLE BIRDS
var possibleBirds = [
        "hummingbird",
        "kingfisher",
        "albatross",
        "woodpecker",
        "nightjar",
    ];
// var string;
var birdIndex = [];
var randomBird;
var userGuess;
var incorrectLetters = [];
var birdDashes = [];

function newGame() {
// HOW MANY VAR DOES IT TAKE?
    var guessesRemaining = document.getElementById("remainingGuesses");
    var incorrect = document.getElementById("incorrect");
    guessesRemaining.innerHTML = 6;
    incorrect.innerHTML = [];
    incorrectLetters = [];
    birdDashes = [];
    birdIndex = [];
    // RANDOMBIRD
    randomBird = Math.floor(Math.random() * (possibleBirds.length));
    randomBird = (possibleBirds[randomBird]);
    // BIRDDASHES
    for (var i = 0; i < randomBird.length; i++) {
        birdDashes.push(" _ ");
    }
    //SHOW DASHES
    var showBirdDashes = document.getElementById("guessThis");
    showBirdDashes.innerHTML = birdDashes;
};
    //MKAES KEYCODE A STRING... MAKES CODE INTO LETTERS
function string() {
    userGuess = String.fromCharCode(userGuess);
};
//IF WINNER, SOMETHING SHOULD HAPPEN
function birdsIsTheWord() {
    if(birdDashes.indexOf(" _ ") === -1) {
        alert("Congratulations! This bird has flown the coup!")
    }
};
//I WANT THIS TO END THE GAME... WHY WONT IT END THE GAME??
function birdHanged() {
    document.getElementById("section").style.backgroundImage="url(../images/6.jpg)";
    alert("What the flock? You killed my bird!");
};
//NOT GONNA LIE, STOLEN FROM SLACK CONVO
function guess() {
    if (randomBird.indexOf(userGuess) > -1) {
        for (var i = 0; i < randomBird.length; i++) {
            if (randomBird[i] === userGuess) {
                birdIndex.push(i);
                for (var j = 0; j < birdIndex.length; j++) {
                    birdDashes[birdIndex[j]] = userGuess;
                    // birdIndex = [];
                }
            }
        }
    }
// INCORRECT GUESSES
    else {
        (incorrectLetters.push(userGuess))
        var guessesRemaining = document.getElementById("remainingGuesses");
        guessesRemaining.innerHTML--;
        // getElementById(body).style.backgroundImage=("url(../images/6.jpg)");
        if (guessesRemaining === 0) {
        // if (guessesRemaining.innerHTML === 0){
            birdHanged();
        }    
    }


    var incorrect = document.getElementById("incorrect");
    incorrect.innerHTML = "Incorrect Letters: " + incorrectLetters;
    var birdLetters = document.getElementById("guessThis");
    birdLetters.innerHTML = birdDashes;
    birdIsTheWord();
    
};
// I HAD THIS UP HIGHER BUT MAYBE ITS BETTER HERE?
// function newGame(); {
document.onkeyup = function (event) {
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        (userGuess = event.keyCode);
        string(userGuess);
        // guess();
        guess(userGuess);
        }
};


