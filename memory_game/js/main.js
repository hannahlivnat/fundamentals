console.log("Up and running!");
const gameBoard = document.querySelector('#game-board');
const restartCardsButton = document.querySelector('#reset-cards');
const restartGameButton = document.querySelector('#reset-game');
const userScoreNumber = document.querySelector('#score-number');
const gameStatus = document.querySelector('#game-updates');
const shuffleCardsButton = document.querySelector('#shuffle-cards');

const cards = [
    {
        rank: "queen", 
        suite: "hearts",
        cardImage: "images/queen-of-hearts.png"
    },
    {
        rank: "queen",
        suite: "diamonds",
        cardImage: "images/queen-of-diamonds.png"
    },
    {
        rank: "king",
        suite: "hearts",
        cardImage: "images/king-of-hearts.png"
    },
    {
        rank: "king",
        suite: "diamonds",
        cardImage: "images/king-of-diamonds.png"
    }
];

let cardsInPlay = [];


//function group together logic to check to see if two cards that the user flipped over match. 

function checkForMatch (cardId) {
    if (cardsInPlay.length === 2) {
        if (cardsInPlay[0] === cardsInPlay[1]) {
            gameStatus.innerText = `You found matching ${cards[cardId].rank}s!`
            const currentScore = Number(userScoreNumber.innerText);
            console.log(currentScore);
            userScoreNumber.innerText = currentScore + 1;
        } else {
            gameStatus.innerText = "No matches here, reset the cards and try again!"
        }
    } 
}

//function storing all steps related to selecting, or flipping over, a card
function flipCard () {
    const cardId = this.getAttribute('data-id');
    console.log(cardId);
    console.log(`User flipped ${cards[cardId].rank}`);
    console.log(`User flipped ${cards[cardId].suite}`);
    console.log(`User flipped ${cards[cardId].cardImage}`);
    cardsInPlay.push(cards[cardId].rank);
    console.log(cardsInPlay);
    this.setAttribute('src', cards[cardId].cardImage);
    checkForMatch(cardId);
}

function shuffle() {
    restartCards();
    for (i = cards.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = cards[i];
        cards[i] = cards[j];
        cards[j] = temp;
    }
    
    console.log (cards);
}

//function to restart the cards
function restartCards() {
    cardsInPlay = [];
    const imageElements = document.getElementsByTagName('img'); 

    for (i = 0; i < 4; i++) {
        const imageElement = imageElements[i];
        imageElement.setAttribute("src", "images/back.png");
    }
}

//function to restart the game 

function restartGame() {
    restartCards();
    userScoreNumber.innerText = 0;
    shuffle();
    gameStatus.innerText = " ";
}


//create the game board

function createBoard() {
    for (let i = 0; i < cards.length; i++) {
        const cardElement = document.createElement('img');
        cardElement.setAttribute('src', "images/back.png");
        cardElement.setAttribute('data-id', i);
        console.log(cardElement.getAttribute('data-id'));
        cardElement.addEventListener('click', flipCard);
        gameBoard.appendChild(cardElement);
    }
    
    restartCardsButton.addEventListener('click', restartCards);
    restartGameButton.addEventListener('click', restartGame);
    shuffleCardsButton.addEventListener('click', shuffle);
}
createBoard();



