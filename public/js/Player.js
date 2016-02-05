/**************************************************
** GAME PLAYER CLASS
**************************************************/
var Player = function() {
	
	var warrior = new Array(14);

	var update = function(keys) {	

		return true;
	};

	// Draw player
	var draw = function(ctx) {
		for (var i=0; i<14; i++)
		{
			ctx.drawImage(getImage(warrior[i].weapon), margin.left + x * FIELD_SIZE, margin.top + y * FIELD_SIZE);
		}
	};

	// Define which variables and methods can be accessed
	return {
		update: update,
		draw: draw,
		warrior: warrior
	}
};