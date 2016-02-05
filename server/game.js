/**************************************************
** GAME PLAYER CLASS
**************************************************/
var Field = require("./Field").Field;

var FIELDS = 42;

var WEAPON = {
	NONE: 0,
	ROCK: 1,
	PAPER: 2,
	SCOSSORS: 3,
	PISTOL: 4,
	FLAG: 5
}

var game = module.exports = {};

game.initFields = function(area)
{
	for (var i=0; i<FIELDS; i++)
		area[i] = new Field(WEAPON.NONE);
}

game.new = function(_id) {

	var area = new Array(FIELDS), 
		id 	 = _id,
		playerWhite,
		playerBlack;

	return {
		playerWhite: playerWhite,
		playerBlack: playerBlack,
		area: area,
		id: id
	}
};