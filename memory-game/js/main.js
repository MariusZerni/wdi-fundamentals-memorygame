console.log('Up and running');


let cards = [
{
	rank: 'queen',
	suit: 'hearts',
	cardImage: 'images/queen-of-hearts.png'
},
{
	rank: 'queen',
	suit: 'diamonds',
	cardImage: 'images/queen-of-diamonds.png'
},
{
	rank: 'king',
	suit: 'hearts',
	cardImage: 'images/king-of-hearts.png'
},
{
	rank: 'king',
	suit: 'diamonds',
	cardImage: 'images/king-of-diamonds.png'
}
];

let cardsInPlay = [];

function checkForMatch() {

	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert('You found a match!');
	} else {
		alert('Sorry, try again.')
	}
}

function flipCard() {

    const cardId = this.getAttribute('data-id');
	
	console.log('User flipped' + " " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].suit);
	console.log(cards[cardId].cardImage);

    this.setAttribute('src', cards[cardId].cardImage);

	if (cardsInPlay.length === 2) {
		 checkForMatch();
     }
}

function createBoard() {
	for (let i = 0; i < cards.length; i++) {
		
		const cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		
		const divElement = document.getElementById('game-board');
        divElement.appendChild(cardElement);
        cardElement.addEventListener('click', flipCard);

	}

	function reset() {
		//const cardsReset = document.getElementById('reset-button');
        const imgNodes = document.querySelectorAll('img');
        for (let i = 0; i < imgNodes.length; i++) {
        	imgNodes[i].setAttribute('src', 'images/back.png');

        }
	}

	const buttonNode = document.getElementById('reset-button');
	buttonNode.addEventListener('click', reset);
}


createBoard();






