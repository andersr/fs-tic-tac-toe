$( "#start-game" ).on( "click", function( event ) {
    startGame();
});

//will these values persist across pages?
$("#player-x-name").focusout(function() {
	if($(this).val() == ''){
		var player_x_name = "X"
	} else {
		var player_x_name = $(this).val() + " (X)";
	}
});

$("#player-o-name").focusout(function() {
	if($(this).val() == ''){
		var player_o_name = "O"
	} else {
		var player_x_name = $(this).val() + " (O)";
	}
});

function startGame() {

	//store player names locally or on a server?

	// Set grid size and create the game board
	var grid_size = 9; 	// hardcoded 3x3 grid size for now
	var game_squares = new Array(grid_size);
	var nextTurn = x;

	window.location.href = 'game.html';


	// At this point want to display the game board.
	//  Should it be on a new page or 

	// var game_instructions = "Be the first player to get all X’s or O’s across the board. Player X goes first. Good luck!"

	
	// createGameBoard(gridSize);

	// displayGameBoard(gameBoard);

	
	
	// total_turns = grid_size;
}