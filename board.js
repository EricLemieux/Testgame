//This file controlls the board
//Some examples include checking to make sure there are enough block, generating more blocks, and keeping track of the board states

function CreateBlockChunk(blocks, height){
	for(var i = 0; i < BOARD_WIDTH; ++i){
		var line = [];
		for(var j = 0; j < height; ++j){
			var b = new Block(platforms, i, j, 'block');
			line.push(b);
		}
		blocks.push(line);
	}
}

function CheckForEnoughBlocks(){
	if(blocks[blocks.length-1][0].CheckIfOnScreen()){
		CreateBlockChunk(blocks, 5);
	}
}