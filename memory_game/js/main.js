var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png",
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png",
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png",
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png",
}
];

var cardsInPlay = [];

var score = document.getElementById("score").innerHTML;

var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		var currentScore = Number(document.getElementById("score").innerHTML);
		var newScore = currentScore + 1;
	document.getElementById("score").innerHTML = newScore;
	alert("You found a match!!!");
}
	else {
	alert('Sorry, try again');
}
}

var flipCard = function() {
	cardID = this.getAttribute("data-id");
	console.log("You flipped " + cards[cardID].rank + ".");
cardsInPlay.push(cards[cardID].rank);
console.log(cards[cardID].suit);
console.log(cards[cardID].cardImage);
this.setAttribute('src', cards[cardID].cardImage);
if (cardsInPlay.length === 2) {
	checkForMatch();
}
}

var createBoard = function() {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener("click", flipCard);
		document.getElementById("game-board").appendChild(cardElement);
	}
}

createBoard();

var reset = function() {
	for (var i = 5; i > 0; i--) {
		if (i > 1) {
			var list = document.getElementById('game-board');
			list.removeChild(list.lastChild);
	} else {
			createBoard();
}
}
	cardsInPlay = [];
}

var clickReset = function() {
	document.getElementById("resetButton").addEventListener("click", reset);
}

clickReset()