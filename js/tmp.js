// Initate new game
function newGame(playerXname, playerOname, gridSize) {

	setPlayerName(playerXname, playerOname);
	
	createGameBoard(gridSize);

	displayGameBoard(gameBoard);

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

//or setGameBoardSquares?
function displayGameBoard(gameBoard) {

//assign locations to each square for display purposes

	// first player is always 'X' in Tic Tac Toe
	var nextTurn = x;
}

function gameSquare(location, ) {

}