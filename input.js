//This file handles some of the input for the game

function GetRelativeMousePos(board, blocksInsteadOfPixels){
	var pos = [0,0];

	pos[0] = game.input.x - board[0][0].sprite.world.x ;
	pos[1] = game.input.y - board[0][0].sprite.world.y ;

	if(blocksInsteadOfPixels == true){
		pos[0] = Math.floor(pos[0]/BLOCK_WIDTH);
		pos[1] = Math.floor(pos[1]/BLOCK_WIDTH);
	}

	return pos;
}