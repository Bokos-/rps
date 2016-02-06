/**************************************************
** GAME FIELD
**************************************************/

var Field = function() {
	var player = null,
		weapon = null,
		visible;

	return 	{
		player: player,
		weapon: weapon,
		visible: visible
	}
};

// Export the Player class so you can use it in
// other files by using require("Player").Player
exports.Field = Field;