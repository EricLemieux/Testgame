//Block class

var TYPE_COUNT = 3;
var TYPE = {
	RED:0,
	GREEN:1,
	BLUE:2
};

var BLOCK_STARTING_SIZE = 64.0;
var BLOCK_WIDTH = 320.0/7;

function GetRandomBlockType(){
	return TYPE.RED + Math.floor(Math.random()*TYPE_COUNT);
}

function Block(group, posX,posY, type){
	//this.type = GetRandomBlockType();

	var tex = "block" + type;

	this.sprite = group.create(posX, posY, tex);
	this.sprite.scale.setTo(BLOCK_WIDTH/BLOCK_STARTING_SIZE, BLOCK_WIDTH/BLOCK_STARTING_SIZE);
	this.sprite.body.immovable = true;

	this.someBool = false;

	this.CheckIfOnScreen = CheckIfBlockOnScreen;

	this.debugInfo = function(){
		return this.type + ' block';
	};

	this.GetPos = GetBlockPosition;
}

function CheckIfBlockOnScreen(){
	if(this.sprite.body.position.y < 500){
			return true;
		}
		return false;
}

function GetBlockPosition(){
	return this.sprite.position;
}