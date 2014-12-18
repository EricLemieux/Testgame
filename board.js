//This file controlls the board
//Some examples include checking to make sure there are enough block, generating more blocks, and keeping track of the board states

function CreateBlockChunk(blocks, height){
	var startHeight;
	if(blocks[0].length > 1){
		startHeight = blocks[0].length-1;
	}else{
		startHeight = 0;
	}
	
	for(var i = 0; i < BOARD_WIDTH; ++i){
		for(var j = 0; j < height; ++j){
			var posY;
			if(blocks[0].length > 1){
				console.log(startHeight);
				console.log(blocks);
				posY =  blocks[0][startHeight].GetPos().y;
			}else{
				posY = 480;
			}
			posY += (j * BLOCK_WIDTH);

			var b = new Block(platforms, i * BLOCK_WIDTH, posY, 'block');
			blocks[i].push(b);
		}
	}
}

function CheckForEnoughBlocks(){
	if(blocks[1][blocks[1].length-1].CheckIfOnScreen()){
		CreateBlockChunk(blocks, 2);
	}
}

function GetBoardLowPoint(board){
	return board[1][blocks[1].length-1];
}

function GetBoardHighPoint(board){
	return board[0][0].GetPos().y;
}