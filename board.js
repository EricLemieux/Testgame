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

			

			/*if(i > 0 && blocks[i].length > 1 ){
				console.log("[" + i + "," + blocks[i].length + "]");
				while(type == blocks[i-1][blocks[i].length-1].type || type == blocks[i][blocks[i].length-2].type){
					console.log(1);
					type = GetRandomBlockType();
				}
				console.log(type + "==" + blocks[i-1][blocks[i].length-1].type);
			}*/

			var type;

			var sameAbove = false;
			var sameLeft = false;

			do{
				type = GetRandomBlockType();

				sameAbove = false;
				sameLeft = false;

				if(i > 0 && CompareBlockType(type, blocks[i-1][blocks[i].length].type)){
					sameLeft = true;
				}
				if(blocks[i].length > 0 && CompareBlockType(type, blocks[i][blocks[i].length-1].type)){
					sameAbove = true;
				}
			}while(sameLeft || sameAbove);

			var b = new Block(platforms, i * BLOCK_WIDTH, posY, type);
			blocks[i].push(b);
		}
	}
}

function CheckForEnoughBlocks(){
	if(blocks[0][blocks[0].length-1].CheckIfOnScreen()){
		CreateBlockChunk(blocks, 2);
	}
}

function CompareBlockType(typeA, typeB){
	return typeA == typeB;
}