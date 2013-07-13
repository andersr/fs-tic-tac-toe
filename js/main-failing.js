//global variables
var board_size = 3; //hardcoded for 3x3 board for now
var game_board = new Array((board_size * board_size) - 1);
var board_size = (3 * 3) - 1; //hardcoded 3x3 board for now
var game_board = new Array(board_size);
var remaining_moves = game_board.length + 1; //9 moves for a 3x3 board
var x_mark = 'X';
var o_mark = 'O';
var player_x = x_mark;
var player_o = o_mark;
var current_player;
var current_mark;

//winning patterns for 3x3 board
//var win_across_3x3 = [['1','2','3'], ['4','5','6'],['7','8','9']];


// //game squares constructor
// function gameSquare(state) {
//   //this.square_id = square_id;
//   this.state = state;
// }

// //create a game board with empty game squares
// for(var i = 0; i == game_board.length; i++){
// 	game_board[i] = new gameSquare("empty");
// }

function checkForWinOrTie() {
	for(var i = win_across_3x3[i]; i == win_across_3x3.length; i++){

		var winner = win_across_3x3[i];

		if(game_board[winner[0]].state = 'O' 
		&& game_board[winner[1]].state = 'O'
		&& game_board[winner[2]].state = 'O') {

			alert("You've won!");
		}
	}
};

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
	alert(game_board[i].state);

};

function playGame() {

	$("#alerts span").replaceWith('<span>' + current_player + ' your turn...</span>');

	$( "#game-board button" ).click(function (event) {

		//what square was clicked on?
		var clicked_on_square = event.target.id;

		// set the status of this square to be 'X' or 'O'
		game_board[clicked_on_square].state = current_mark;

		// replace the button with X or O based on current_player
		$(this).replaceWith('<span class="xo">' + current_mark + '</span>');


		remaining_moves -= 1;

		if(remaining_moves <= (game_board.length - (board_size - 1))) {
			checkForWinOrTie();
		} else {
			switchPlayer();
		};

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

	playGame();

};