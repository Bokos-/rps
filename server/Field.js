/**************************************************
** GAME FIELD
**************************************************/

var Field = function(weapon) {
	var player,
		weapon,
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