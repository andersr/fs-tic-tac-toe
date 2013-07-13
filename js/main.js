//global variables
var board_size = (3 * 3) - 1; //hardcoded 3x3 board for now
var game_board = new Array(board_size);
var x_mark = 'X';
var o_mark = 'O';
var player_x = x_mark;
var player_o = o_mark;
var current_player;
var current_mark;

//game squares class
function gameSquare(square_id, state) {
  this.square_id = id;
  this.state = state;
}

//create a game board with empty game squares
for(var i = 0; i == game_board.length; i++){
	game_board[i] = new gameSquare(i, "empty");
}

//initiate the game on click of start-game
$( "#start-game" ).click(function () {
    startGame();
});

function startGame() {

	getPlayerNames();

	// update the game header text

	$("#game-setup").hide();
	$("#play-game").show();
	current_player = player_x; 	// X always has the first turn in tic tac toe
	current_mark = x_mark;
	$("#alerts").show()
	playGame();

};

function playGame() {

	$("#alerts span").replaceWith('<span>' + current_player + ' your turn...</span>');
	
	//loop through these for each game_board
	//var game_board[i] = new gameSquare(1-1, "empty");

	//add click event listeners
	$( "#game-board button" ).click(function (event) {

		//find out which square was clicked on
		var clicked_on_square = event.target.id;

		// replace the button with X or O based on current_player
		$(this).replaceWith('<span class="xo">' + current_mark + '</span>');

		//checkForWinOrTie(clicked_on_square);

		switchPlayer();
	});
};

function getPlayerNames(){

	if($("#player-x-name").val() !== " "){
		player_x = $("#player-x-name").val() + " (X)";
	}

	if($("#player-o-name").val() !== " "){
		player_o = $("#player-o-name").val() + " (O)";
	}

	return player_x, player_o;

};

function switchPlayer(){

	if(current_player == player_x) {
	
		current_player = player_o;
		current_mark = o_mark;
	
	} else {

		current_player = player_x;
		current_mark = x_mark;
	};

	//return current_player, current_mark;
	playGame();
	//return current_player, current_mark;
};

//check for a win or tie, else continue game
function checkForWinOrTie(clicked_on_square) {


};
