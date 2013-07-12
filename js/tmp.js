function startGame() {

	// if($("#player-x-name").val() == " "){
	// 	var player-x = "X"
	// } else {
	// 	var player-x = $("#player-x-name").val();
	// }

	// alert( player-x );
	
    // var player-x = $("#player-x-name").val();
    // var test = "test";
    // alert( $("#player-x-name").val();

}


function startGame(playerXname, playerOname, gridSize) {

	//set player name values, if any
	getPlayerName(playerXname, playerOname);


	
	createGameBoard(gridSize);

	displayGameBoard(gameBoard);

	var nextTurn = x;

	playGame(nextTurn);

	// set total turns
}


function playGame(nextTurn) {

}

function gameInstructions() {
	// if currentTurn is Player X
	// insert this content into #instructions

//display instructions for this player
	//playerName + " (X), your turn..."
	//else display 
	//playerName + " (X), your turn..."


}


function setNextTurn(previouTurn) {
	if previousTurn = x {
		nextTurn = o;
	} else {
		nextTurn = x;
	}

	return nextTurn;
}

function setPlayerName(playerXname, playerOname) {
	//if player name field has values, set as "<name> (X)"
	// else set as "Player X"
	return Player-X, Player-O;
}
//create an array base on the board size
function createGameBoard(gridSize) {
	//var gameBoard = (gridSize * gridSize) - 1;
	var gameBoard = new Array(gridSize);
	return gameBoard;
}

function displayGameBoard(gameBoard) {

//assign locations to each square for display purposes
//generate the table rows/columns, assign id values, and associate the id with the corresponding array id
// initially, just hard code all this

}

function gameSquare(location, ) {

}


function quitGame() {
	//display an alert - are you sure?  if yes, return to index

}