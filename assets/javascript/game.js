// create a list of words
var possibleBirds = [
    "hummingbird",
    "kingfisher",
    "albatross",
    "woodpecker",
    "nightjar",

];
guessThisBird = [];
incorrectLetters = [];

function newGame () {
        // pick a random word
        var randomBird = possibleBirds[Math.floor(Math.random() * possibleBirds.length)];

        // display dashes in place of letters
        var birdDashes = [];
        for (var i = 0; i < randomBird.length; i++) {
            birdDashes[i] = "_ ";

            // display birdDashes[i] to html element #guessThis
            var guessThisBird = document.getElementById("guessThis").textContent = (birdDashes);
           
            // guessThisBird.textContent = birdDashes[i];
            // guessThis.appendchild(guessThisBird);
            
            // var guessThisBird = document.createElement("p");
            // var guessBird = document.createText.birdDashes[i];
            // guessThisBird.appendChild(guessBird);
            // document.getElementById("guessThis").appendChild(guessThisBird);



            

            // var guessThisBird = document.getElementById("guessThis").value;
            // 

            // play the game

            // document.onkeyup = function (event) {
            //     if (gameOver) {
            //         resetGame();
            //         finished = false;
            //     } else {
            //         if (event.keyCode >= 65 && event.keyCode <= 90) {
            //             userGuess(event.key.toLowerCase());
            //         }
            //     }
            // };


        }
    }



    // // listen for key

    // // if letter is correct update dash array

    // // if letter is false decremnt score by one and update image

    // // log incorrect guess to incorrect guess pool

