/**************************************************
** GAME PLAYER CLASS
**************************************************/
var Player = function() {
	
	var warrior = new Array(14);
	initWarriors(warrior);

	var update = function(keys) {	

		return true;
	};

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