/*
 * Create a list that holds all of your cards
 */


/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */


let diamondCard = document.getElementById("diamondOne");
let planeCard = document.getElementById("planeOne");
let anchorCard = document.getElementById("anchorOne");
let boltCard = document.getElementById("boltOne");
let cubeCard = document.getElementById("cubeOne");
let leafCard = document.getElementById("leafOne");
let bicycleCard = document.getElementById("bicycleOne");
let bombCard = document.getElementById("bombOne");

let diamondCardTwo= document.getElementById("diamondTwo");
let planeCardTwo = document.getElementById("planeTwo");
let anchorCardTwo = document.getElementById("anchorTwo");
let boltCardTwo = document.getElementById("boltTwo");
let cubeCardTwo= document.getElementById("cubeTwo");
let leafCardTwo = document.getElementById("leafTwo");
let bicycleCardTwo = document.getElementById("bicycleTwo");
let bombCardTwo = document.getElementById("bombTwo");


console.log(diamondCard);


 diamondCard.addEventListener('click', function () {
   diamondCard.classList.add("open","show");
});
planeCard.addEventListener('click', function () {
  planeCard.classList.add("open","show");
});
anchorCard.addEventListener('click', function () {
  anchorCard.classList.add("open","show");
});
boltCard.addEventListener('click', function () {
  boltCard.classList.add("open","show");
});
cubeCard.addEventListener('click', function () {
  cubeCard.classList.add("open","show");
});
leafCard.addEventListener('click', function () {
  leafCard.classList.add("open","show");
});
bicycleCard.addEventListener('click', function () {
  bicycleCard.classList.add("open","show");
});
bombCard.addEventListener('click', function () {
  bombCard.classList.add("open","show");
});


diamondCardTwo.addEventListener('click', function () {
   diamondCardTwo.classList.add("open","show");
});
planeCardTwo.addEventListener('click', function () {
  planeCardTwo.classList.add("open","show");
});
anchorCardTwo.addEventListener('click', function () {
  anchorCardTwo.classList.add("open","show");
});
boltCardTwo.addEventListener('click', function () {
  boltCardTwo.classList.add("open","show");
});
cubeCardTwo.addEventListener('click', function () {
  cubeCardTwo.classList.add("open","show");
});
leafCardTwo.addEventListener('click', function () {
  leafCardTwo.classList.add("open","show");
});
bicycleCardTwo.addEventListener('click', function () {
  bicycleCardTwo.classList.add("open","show");
});
bombCardTwo.addEventListener('click', function () {
  bombCardTwo.classList.add("open","show");
});
