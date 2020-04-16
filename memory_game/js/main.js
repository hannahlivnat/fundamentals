console.log("Up and running!");

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
const cardsInPlay = [];

//function group together logic to check to see if two cards that the user flipped over match. 

function checkForMatch () {
    if (cardsInPlay.length === 2) {
        if (cardsInPlay[0] === cardsInPlay[1]) {
            alert("You found a match!");
        } else {
            alert("Sorry, try again.");
        }
    } 
}

//function storing all steps related to selecting, or flipping over, a card
function flipCard (cardId) {
    console.log(`User flipped ${cards[cardId].rank}.`);
    console.log(`User flipped ${cards[cardId].suite}.`);
    console.log(`User flipps ${cards[cardId].cardImage}.`);
    cardsInPlay.push(cards[cardId].rank);
    checkForMatch();
}

flipCard(0);
flipCard(2);


