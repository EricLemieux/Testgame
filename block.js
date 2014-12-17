//Block class

var TYPE = {
	RED:0
};

var BLOCK_STARTING_SIZE = 64.0;
var BLOCK_WIDTH = 320.0/7;

function GetBlockPosition(indexX, indexY){
	return [indexX * BLOCK_WIDTH, 480 + indexY * BLOCK_WIDTH];
}

function Block(type, group, indexX,indexY, texture){
	this.type = type;

	var blockPos = GetBlockPosition(indexX, indexY);

	this.sprite = group.create(blockPos[0], blockPos[1], texture);
	this.sprite.scale.setTo(BLOCK_WIDTH/BLOCK_STARTING_SIZE, BLOCK_WIDTH/BLOCK_STARTING_SIZE);
	this.sprite.body.immovable = true;

	this.debugInfo = function(){
		return this.type + ' block';
	}	
}