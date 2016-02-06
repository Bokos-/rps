/**************************************************
** GAME PLAYER CLASS
**************************************************/
var Field = require("./Field").Field;

var game = module.exports = {};

game.initFields = function(area)
{
	for (var i=0; i<GLOBAL.FIELDS; i++)
	{
		area[i] = new Field();
		area[i].weapon = GLOBAL.WEAPON.NONE;
	}
}

game.new = function(_id, _type) {

	var area = new Array(GLOBAL.FIELDS), 
		id 	 = _id,
		playerWhite,
		playerBlack,
		state = GLOBAL.STATE.WAITING,
		type = _type;

	return {
		playerWhite: playerWhite,
		playerBlack: playerBlack,
		area: area,
		id: id,
		type: type
	}
};

game.switchWeapon = function(client)
{
	var weapons = [];
	var index 	= 2;

	weapons[0] = {x: client.data.flag.x,   y: client.data.flag.y,   weapon: GLOBAL.WEAPON.FLAG};
	weapons[1] = {x: client.data.pistol.x, y: client.data.pistol.y, weapon: GLOBAL.WEAPON.PISTOL};

	for (var y=4; y<=5; y++)
		for(var x=0; x<=6; x++)
		{
			if (y==client.data.flag.y && x==client.data.flag.x)
			continue;

			if (y==client.data.pistol.y && x==client.data.pistol.x)
			continue;
			
			weapons[index] = {x: x, y: y, weapon: this.getRandomWeapon()};
			index++;
		}

	return weapons;
}

game.getRandomWeapon = function()
{
	return this.randomIntByModulo(1,4);
}

game.randomIntByModulo = function(min, max) {
  var i = (Math.random() * 32768) >>> 0;
  return (i % (min - max)) + min;
}

game.checkFlagPistol = function(client, data)
{
	if (typeof data.x == "undefined" || typeof data.y == "undefined")
		return false;

	if (data.x < 0 || data.x > 6)
		return false;

	if (data.y < 4 || data.y > 5)
		return false;

	return true;
}