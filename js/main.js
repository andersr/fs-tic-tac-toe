//global variables
var board_size = 3; //hardcoded 3x3 board for now
var game_board = new Array((board_size * board_size) - 1);
var remaining_moves = game_board.length + 1; //9 moves for a 3x3 board
var x_mark = 'X';
var o_mark = 'O';
var player_x = x_mark;
var player_o = o_mark;
var current_player;
var current_mark;

//game squares class
function gameSquare(state) {
  this.state = state;
}

//create a game board with empty game squares
// for(var i = 0; i == game_board.length; i++){
// 	game_board[i] = new gameSquare("empty");
// }

game_board[0] = new gameSquare("empty");
game_board[1] = new gameSquare("empty");
game_board[2] = new gameSquare("empty");
game_board[3] = new gameSquare("empty");
game_board[4] = new gameSquare("empty");
game_board[5] = new gameSquare("empty");
game_board[6] = new gameSquare("empty");
game_board[7] = new gameSquare("empty");
game_board[8] = new gameSquare("empty");



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
	
	$( "#game-board button" ).click(function (event) {

		var clicked_on_square = event.target.id;

		game_board[clicked_on_square].state = current_mark;

		$(this).replaceWith('<span class="xo">' + current_mark + '</span>');

		//checkForWinOrTie(clicked_on_square);

		switchPlayer();
	});
}

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

	return current_player, current_mark;
	//playGame();
	//return current_player, current_mark;
};

//check for a win or tie, else continue game
function checkForWinOrTie(clicked_on_square) {


};
