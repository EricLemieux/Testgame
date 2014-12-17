//Block class

var TYPE_COUNT = 3;
var TYPE = {
	RED:0,
	BLUE:1,
	GREEN:2
};

var BLOCK_STARTING_SIZE = 64.0;
var BLOCK_WIDTH = 320.0/7;

function GetBlockPosition(indexX, indexY){
	return [indexX * BLOCK_WIDTH, 480 + indexY * BLOCK_WIDTH];
}

function GetRandomBlockType(){
	return TYPE[Math.random()*TYPE_COUNT];
}

function Block(group, indexX,indexY, texture){
	this.type = GetRandomBlockType();

	var blockPos = GetBlockPosition(indexX, indexY);

	this.sprite = group.create(blockPos[0], blockPos[1], texture);
	this.sprite.scale.setTo(BLOCK_WIDTH/BLOCK_STARTING_SIZE, BLOCK_WIDTH/BLOCK_STARTING_SIZE);
	this.sprite.body.immovable = true;

	this.someBool = false;

	this.CheckIfOnScreen = CheckIfBlockOnScreen;

	this.debugInfo = function(){
		return this.type + ' block';
	};
}

function CheckIfBlockOnScreen(){
	if(this.sprite.body.position.y < 450){
			return true;
		}
		return false;
}