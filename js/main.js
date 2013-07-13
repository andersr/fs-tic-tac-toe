var current_turn;

$( "#start-game" ).click(function () {
    startGame();
});

function startGame() {
	$("#game-setup").hide();
	$("#play-game").show();

	// X always has the first turn
	current_turn = 'X';
	playGame();
};

// function gameSquare(location, state) {
//   this.location = location;
//   this.state = state;
// }

function playGame() {

	//create an array of game_squares
	//game_board = new Array(8);

	//loop through these for each game_board
	//var game_board[i] = new gameSquare(1-1, "empty");

	//add click event listeners
	$( "#game-board button" ).click(function (event) {

		//find out which square was clicked on
		var clicked_on_square = event.target.id;

		// replace the button with X or O based on current_turn
		$(this).replaceWith('<span class="xo">' + current_turn + '</span>');

		switchPlayer();

	});

}

function switchPlayer(){

if(current_turn == 'X'){
			current_turn = 'O';
		} else {
			current_turn = 'X';
		}
	return current_turn;

		//switchPlayer(current_turn);

	//playGame(current_turn);
}

//check for a win or tie, else continue game
