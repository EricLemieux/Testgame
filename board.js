//This file controlls the board
//Some examples include checking to make sure there are enough block, generating more blocks, and keeping track of the board states

function CreateBlockChunk(blocks, height){	
	for(var i = 0; i < BOARD_WIDTH; ++i){
		for(var j = 0; j < height; ++j){
			var posY;
			if(blocks[i].length > 0){
				posY =  blocks[i][blocks[i].length-1].GetPos().y + BLOCK_WIDTH;
			}else{
				posY = 480;
			}

			console.log(posY);

			var b = new Block(platforms, i * BLOCK_WIDTH, posY, 'block');
			blocks[i].push(b);
		}
	}
}

function CheckForEnoughBlocks(){
	if(blocks[0][blocks[0].length-1].CheckIfOnScreen()){
		CreateBlockChunk(blocks, 2);
	}
}