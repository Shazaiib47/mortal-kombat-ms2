/*jshint esversion: 6 */

// const variables to be declared below that affect the game.
const cards = document.querySelectorAll(".memory-card");
const score = document.getElementById("point");
const finalScore = document.getElementById("finalPoints");
const won = document.getElementById("won");
const play = document.getElementById("playAgain");

// point variables to be scripted when user allocates a certain amount of points
var points = 0;
var finalPoint = 0;
var win = 0;

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

// function to flip the card that also adds the class "flip" to the element. Second part can be found at the bottom.
function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;
    this.classList.add("flip");

    // below is the matching card logic, the variables hasflippedcard and flippedcard alter the flip state. if there is no flipped card then it is set to true.
    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        return;
    }

    /* below is the code that checks for a match by accessing both the datasets for the firstcard and secondcard. */
    secondCard = this;
    hasFlippedCard = false;

    checkForMatch();
}

function checkForMatch() {
    if (firstCard.dataset.framework === secondCard.dataset.framework) {
        disableCards();
        return;
    }

    unflipCards();
}

/* When a match occurs, the disabledcards() is triggered and both event listeners are detached so no more flipping can occur.
    This then adds 3 points upon a card match which adds to the fight counter. When all cards are matched, 2 further points are added and the finalScore property
    is triggered and then tallys up the total points */
function disableCards() {
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", secondCard);

    points += 3;
    finalPoint = points;
    win += 2;
    finalScore.innerHTML = finalPoint;
    score.innerHTML = points;

    // Code to illustrate that once all 12 cards are matched, the "won" in the html is declared and a visible class is applied to show the victory screen. This then resets the board.
    if (win === 12) {
        won.style.visibility = "visible";
    }

    resetBoard();
}

function unflipCards() {
    lockBoard = true;

    /* setTimeout function that is implemented so there is an interval between first card being clicked and the second. 
    unflipcards will turn both cards back with the 1000ms timeout which then removes the flip class */
    setTimeout(() => {
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");
       
        resetBoard();
    }, 1000);

    /* on a unmatch or when no pair is matched, a point gets deducted and goes into the minuses until the user gets a matching pair to get back into receiving points */
    points -= 1;
    finalPoint = points;
    score.innerHTML = points;
}

/* function that resets the board after each round, so after a card flip the game board is locked and the same card cannot be flipped again */
function  resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

/* When a game is over the user clicks the button to play again which then calls the function playAgain, which then reloads the webpage and game commences again.
    the event listener is also added to click for the function to take place */
function playAgain() {
    location.reload();
}

play.addEventListener("click", playAgain);


/* a shuffle method that is implemented that takes place every time a new game is commenced.
    the math.random method returns a random number each time as stated below and this is multiplied by 12 as there are 12 cards in the deck */
(function shuffle() {
    cards.forEach(card => {
        let ramdomPos = Math.floor(Math.random() * 12);
        card.style.order = ramdomPos;
    });
})();

//added an event listener to cards that flips the card upon the user clicking. the first part can be found above.
cards.forEach(card => card.addEventListener("click", flipCard));