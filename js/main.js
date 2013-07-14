//global variables
var board_size = 3;
var game_board_squares = new Array(board_size * board_size); //this creates
var remaining_moves = game_board_squares.length - 1;
var x_mark = 'X';
var o_mark = 'O';
var player_x = x_mark;
var player_o = o_mark;
var current_player;
var current_mark;
var winning_player;

//game square constructor
function gameSquare(state) {
  this.state = state;
}

function createEmptyGameBoard(board) {
    for (var i = 0, l = board.length; i < l; i++) {
        board[i] = new gameSquare("empty");
    }

    return board;
}

//on click of start-game
$( "#start-game" ).click(function () {

	winning_player == null;

	createEmptyGameBoard(game_board_squares);
	
    startEndGame();
});

function startEndGame() {

	if (winning_player == null){

		getPlayerNames();

		$("#game-setup").hide();
		$("#play-game").show();

		current_player = player_x; 	// X always has the first turn in tic tac toe
		current_mark = x_mark;

		$("#alerts").show()
		$("#alerts span").replaceWith("<span>" + current_player + ", your turn...</span>");
		
		playGame();

	}
	else {
		$("#alerts span").replaceWith("<span>" + winning_player + " is the winner!</span>");

	}
}

function playGame() {

	$( "#game-board button" ).click(function (event) {

		var clicked_on_square = event.target.id;
		game_board_squares[clicked_on_square].state = current_mark;
		$(this).replaceWith("<span class='xo'>" + current_mark + "</span>");

		checkForWinner();

		if (winning_player == player_o || winning_player == player_x){
			startEndGame();
		}
		else if(remaining_moves == 0) {

			$("#alerts span").replaceWith("<span>It's a tie!</span>");

		}
		else {
			remaining_moves -= 1;
			switchPlayer();
		}

	});

	
}

function checkForWinner() {

	//winning patterns for a 3x3 board
	var winners_3x3 = 
	[['1','2','3'], ['4','5','6'],
	['7','8','9'],['1','4','7'],
	['2','5','8'],['3','6','9'],
	['1','5','9'],['3','5','7']];


	//loop through all 3x3 winning patterns
	for(var i = 0, l = winners_3x3.length; i < l; i++){

		// assign a winning pattern(array) to winner
		var winner = winners_3x3[i];

		//check to see if all three have either a 'O' or an 'X'
		// since I am using a zero-based id for matching the pattern, will need to move down by 1

		//if the state of the id corresponding to game_board_squares_squares 0, 1, 2 all are 'O'
		if(game_board_squares[winner[0] - 1].state == 'O'
			 && game_board_squares[winner[1] - 1].state == 'O'
			 && game_board_squares[winner[2] - 1].state == 'O') {

			//alert("O has won!");
			winning_player ==  player_o;
			

		} 
		else if(game_board_squares[winner[0] - 1].state == 'X' 
			&& game_board_squares[winner[1] - 1].state == 'X'
			&& game_board_squares[winner[2] - 1].state == 'X') {

			//alert("X has won!");
			winning_player == player_x;
		}
		return winning_player;
	}
}
function getPlayerNames(){

	if($("#player_x_name").val() !== ""){
		player_x = $("#player_x_name").val() + " (X)";
	} 
	else {
		player_x = "Player X";
	}

	if($("#player_o_name").val() !== ""){
		player_o = $("#player_o_name").val() + " (O)";
	}
	else {
		player_o = "Player O";
	}

	return player_x, player_o;
}

function switchPlayer(){

	if(current_player == player_x) {
	
		current_player = player_o;
		current_mark = o_mark;
	
	} else {

		current_player = player_x;
		current_mark = x_mark;
	}

	$("#alerts span").replaceWith("<span>" + current_player + ", your turn...</span>");
	
	return current_player, current_mark;
}


