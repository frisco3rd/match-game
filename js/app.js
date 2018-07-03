/*
 * Create a list that holds all of your cards
 */
// storing all cards in array
let cards = [
	"fa-diamond",
	"fa-diamond",
	"fa-paper-plane-o",
	"fa-paper-plane-o",
	"fa-anchor",
	"fa-anchor",
	"fa-bolt",
	"fa-bolt",
	"fa-cube",
	"fa-cube",
	"fa-leaf",
	"fa-leaf",
	"fa-bicycle",
	"fa-bicycle",
	"fa-bomb",
	"fa-bomb"
  ];
const deck = document.querySelector('.deck');
// Timmer function
let second = 0;// variable for seconds
let minute = 0;//varriable for minutes
let timer;//empty timer variable 

let timerStarted = false;//timer started

deck.addEventListener("click", function(){
    if(!timerStarted){
        timerStarted = true;
        startTimer();
    }
});
function startTimer() {
    timer = setInterval(insertTime, 1000);
}

function stopTimer() {
	clearInterval(timer);
	second = 0;
	minute = 0;
}
function insertTime() {
	second++;
	if (second < 10) {
		second = `0${second}`;
	}
	if (second >= 60) {
		minute++;
		second = "00";
	}
	// display time
	 document.querySelector('.timer-output').innerHTML = "0" + minute + ":" + second;
}

//Reload page to restart game

const refresh = document.querySelector('.restart');

refresh.addEventListener('click',function restart(){
	location.reload(false);
  
});

  // function to turn cards into HTML
  function generateCard(card) {
	return `<li class="card" data-card="${card}"><i class="fa ${card}"></i></li>`; // Adds class to card
  }
  /*
  * Display the cards on the page
  *   - shuffle the list of cards using the provided "shuffle" method below
  *   - loop through each card and create its HTML
  *   - add each card's HTML to the page
  */
  
  // Shuffle function from http://stackoverflow.com/a/2450976
  function shuffle(array) {
	var currentIndex = array.length,
		temporaryValue,
		randomIndex;
  
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
  
  function initGame() {
	let deck = document.querySelector(".deck");
	let cardHTML = shuffle(cards).map(function(card) {
		return generateCard(card);
	});
	deck.innerHTML = cardHTML.join(" ");
  }
    

  function checkScore() {
	if (moves === 15 || moves === 23) {
		removeStar();
	}
  }
  initGame();
  
  const allCards = document.querySelectorAll(".card"); //Makes cards flip by selecting all classes of .card
  let openCards = []; //Array of open cards
  const moveCounter = document.querySelector('.moves'); //create move counter
  let moves = 0;
  let matches = 0;
  
  allCards.forEach(function(card) { //Loops through every card using forEach
	card.addEventListener("click", function(e) {
		if (!card.classList.contains("open") && !card.classList.contains("show") && !card.classList.contains("match")) {
			openCards.push(card); //pushes any open card to openCards array
			card.classList.add("open", "show");
  
			if (openCards.length === 2) {
				if (openCards[0].dataset.card == openCards[1].dataset.card) { // Checks if both cards match
					openCards[0].classList.add("match"); // adds match class to first card
					openCards[0].classList.add("open"); // adds open class to first card 
					openCards[0].classList.add("show"); // adds show class to first card
  
					openCards[1].classList.add("match"); // add match class to second card
					openCards[1].classList.add("open"); // adds open class to second card
					openCards[1].classList.add("show"); // adds show class to second card
  
					openCards = []; // If cards match they enter this array
					matches += 1 ;
					moves += 1;
					moveCounter.innerHTML = moves;
				} else {
  
					// If no match hide
					setTimeout(function() { // Set time out speed
						openCards.forEach(function(card) {
							card.classList.remove("open", "show");
						});
						openCards = [];
					}, 320); // speed fortimeout function
					moves += 1;
					moveCounter.innerHTML = moves;
				}

				starCounter();
			}
			endGame();
		}
	});
  });
  let stars = document.querySelectorAll('.stars li');

let starCount = 3;

function starCounter() {
	for (let a = 0; a < 20; a++) {
		if (moves > 20) {

			for (star of stars) {
				stars[2].style.display = 'none';
				//stars[2].style.display = 'none';
				starCount = 0;
			}

		} else if (moves > 15) {

			for (star of stars) {
				stars[1].style.display = 'none';
				starCount = 1;
			}
		} else if (moves > 10) {
			for (star of stars) {
				stars[0].style.display = 'none';
				starCount = 2;

			}
		}
	}
}
function endGame(){
	if (matches === 8){
		stopTimer();
      toggleModal();
			}
};

function toggleModal(){
const modal = document.querySelector('.modal');
let timerResults = document.querySelector('.timer-output').innerHTML;
let movesResults = document.querySelector('.moves').innerHTML;
let starsResults = document.querySelector('.stars').innerHTML;
	document.querySelector('.modal_time').innerHTML = `Time = ${timerResults}`;
	document.querySelector('.modal_stars').innerHTML = `Stars = ${starsResults}`;
	document.querySelector('.modal_moves').innerHTML = `Moves = ${movesResults}`;
  modal.style.display ='inline';
};
  //function to replay game
	document.querySelector('.replay_button').addEventListener('click',()=>{
	location.reload(false);
    initGame();

  })