/**************************************************
** GAME PLAYER CLASS
**************************************************/
var Field = require("./Field").Field;

var game = module.exports = {};

game.initFields = function(area)
{
	for (var i=0; i<GLOBAL.FIELDS; i++)
		area[i] = new Field(GLOBAL.WEAPON.NONE);
}

game.new = function(_id) {

	var area = new Array(GLOBAL.FIELDS), 
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

game.switchWeapon = function()
{
	var weapons = [];
	var index 	= 2;

	var flag = {
		x: Math.floor((Math.random() * 7)),
		y: 5,
		weapon: GLOBAL.WEAPON.FLAG
	};

	var pistol = {
		x: Math.floor((Math.random() * 7)),
		y: 5,
		weapon: GLOBAL.WEAPON.PISTOL
	};

	while (pistol.x == flag.x)
		pistol.x = Math.floor((Math.random() * 7));

	weapons[0] = flag;
	weapons[1] = pistol;

	for (var y=4; y<=5; y++)
		for(var x=0; x<=6; x++)
		{
			if (y==5 && x==flag.x || y==5 && x==pistol.x)
				continue;
			
			weapons[index] = {x: x, y: y, weapon: this.getRandomWeapon()};
			index++;
		}

	return weapons;
}

game.getRandomWeapon = function()
{
	return Math.floor((Math.random() * 3) + 1);
}