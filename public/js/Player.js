/**************************************************
** GAME PLAYER CLASS
**************************************************/
var Player = function(enemyPlayer = false) {
	
	var warrior = new Array(14);
	var color = 0;
	initWarriors(warrior, enemyPlayer);

	var update = function(keys) {	

		return true;
	};

	var getWarrior = function(x,y)
	{
		for (var i=0; i<14; i++)
		{
			if (typeof warrior[i] == "undefined" || warrior[i].x == -1 || warrior[i].y == -1)
				continue;

			if (warrior[i].x == x && warrior[i].y == y)
				return warrior[i];
		}

		return false;
	};

	var printWarriors = function()
	{
		for (var i=0; i<14; i++)
		{
			if (typeof warrior[i] == "undefined" || warrior[i].x == -1 || warrior[i].y == -1)
				continue;
		}
	}

	// Draw player
	var draw = function(ctx) {
		for (var i=0; i<14; i++)
		{
			if (typeof warrior[i] == "undefined" || warrior[i].x == -1 || warrior[i].y == -1)
				continue;

			ctx.drawImage(images[getImage(warrior[i].weapon, warrior[i].enemyPlayer)], getXPos(warrior[i].x), getYPos(warrior[i].y));
		}
	};

	// Define which variables and methods can be accessed
	return {
		printWarriors: printWarriors,
		getWarrior: getWarrior,
		update: update,
		draw: draw,
		warrior: warrior,
		color: color
	}
};

function initWarriors(warriors, enemyPlayer)
{
	for (var i=0; i<14; i++)
		warriors[i] = new Warrior(-1, -1, 0, enemyPlayer);
}