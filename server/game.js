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
		type = _type,
		round = 0,
		tie = {
			bW: GLOBAL.WEAPON.NONE,
			wW: GLOBAL.WEAPON.NONE,
			wField: null,
			bField: null,
			start: -1,	//start 0: white, 1: black, -1: NOT SET
			data: null
		};

	return {
		playerWhite: playerWhite,
		playerBlack: playerBlack,
		area: area,
		id: id,
		type: type,
		state: state,
		tie: tie
	}
};

game.switchWeapon = function(client)
{
	var weapons = [];
	var index 	= 2;
	var equalWeapons = this.getEqualWeapons();
	var indexWeapon = 0;

	weapons[0] = {x: client.data.flag.x,   y: client.data.flag.y,   weapon: GLOBAL.WEAPON.FLAG};
	weapons[1] = {x: client.data.pistol.x, y: client.data.pistol.y, weapon: GLOBAL.WEAPON.PISTOL};

	for (var y=4; y<=5; y++)
		for(var x=0; x<=6; x++)
		{
			if (y==client.data.flag.y && x==client.data.flag.x)
			continue;

			if (y==client.data.pistol.y && x==client.data.pistol.x)
			continue;
			
			weapons[index] = {x: x, y: y, weapon: equalWeapons[indexWeapon]};
			index++;
			indexWeapon++;
		}

	return weapons;
}

game.getRandomWeapon = function()
{
	return this.randomIntByModulo(1,4);
}

game.getEqualWeapons = function()
{
	var rockCount 		= 0,
		paperCount 		= 0,
		scissorsCount 	= 0;

	var equalWeapons = [];
	var weapon;

	while (rockCount < 4 || paperCount < 4 || scissorsCount < 4) {

		weapon = this.randomIntByModulo(1, 4);

		if (weapon == 1)  {
			if (rockCount > 3) 
				continue;
			else {
				rockCount++;
				equalWeapons.push(weapon);
			}
		}

		else if (weapon == 2) {
			if (paperCount > 3) 
				continue;
			else {
				paperCount++;
				equalWeapons.push(weapon);
			}
		}

		else if (weapon == 3) {
			if (scissorsCount > 3) 
				continue;
			else {
				scissorsCount++;
				equalWeapons.push(weapon);
			}
		}
	}

	return equalWeapons;
	
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