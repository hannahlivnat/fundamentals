console.log("Up and running!");

const cards = ["queen", "queen", "king", "king"];
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
    console.log(`User flipped ${cards[cardId]}.`)
    cardsInPlay.push(cards[cardId]);
    checkForMatch();
}

flipCard(0);
flipCard(2);


