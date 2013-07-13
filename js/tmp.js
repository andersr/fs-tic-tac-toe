$( "#start-game" ).on( "click", function( event ) {
	//$("#intro").addClass("hide");
   // startGame();
});

//will these values persist across pages?
// $("#player-x-name").focusout(function() {
// 	if($(this).val() == ''){
// 		var player_x_name = "X"
// 	} else {
// 		var player_x_name = $(this).val() + " (X)";
// 	}
// });

// $("#player-o-name").focusout(function() {
// 	if($(this).val() == ''){
// 		var player_o_name = "O"
// 	} else {
// 		var player_x_name = $(this).val() + " (O)";
// 	}
// });

function startGame() {
// $("#intro").hide();


	//var grid_size = 3; // hardcoded for a 3x3 board for now
	//alert("test");
	//hide intro-instructions

	//var next_turn = x;
	//playGame(next_turn);
};

// function playGame(next_turn) {
// 	if(next_turn = x) {
// 		next_turn = o;
// 	} else {
// 		next_turn = x;
// 	}

// 	playGame(next_turn);

// };

// function finishGame() {

// };

// can just display a hard-coded 3x3 table, 4x4 table etc

	// the grid will always be a root value, or will always be a square, same across and same down
	//loop through three rows
	// within each row, add three cells

//create a table based on the grid size
// assign ids to the squares




function createGameBoard(grid_size) {
	var game_board = new Array(grid_col);

  for (var grid_row = 0; grid_row <= game_board.length; grid_row++) {
    game_board[i] = new Array(grid_size);
  }

  return game_board;
}


function startGame() {

		//options:
	/*
	just navigate to the page with a href
	redisplay everything on the same page

	*/


	



	// At this point want to display the game board.
	//  Should it be on a new page or 

	// var game_instructions = "Be the first player to get all X’s or O’s across the board. Player X goes first. Good luck!"

	
	// createGameBoard(gridSize);

	// displayGameBoard(gameBoard);

	
	
	// total_turns = grid_size;

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