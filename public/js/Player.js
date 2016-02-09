/**************************************************
** GAME PLAYER CLASS
**************************************************/
var Player = function() {
	
	var warrior = new Array(14);
	initWarriors(warrior);

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

			ctx.drawImage(images[getImage(warrior[i].weapon)], getXPos(warrior[i].x), getYPos(warrior[i].y));
		}
	};

	// Define which variables and methods can be accessed
	return {
		printWarriors: printWarriors,
		getWarrior: getWarrior,
		update: update,
		draw: draw,
		warrior: warrior
	}
};

function initWarriors(warriors)
{
	for (var i=0; i<14; i++)
		warriors[i] = new Warrior(-1, -1, 0);
}