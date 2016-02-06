/**************************************************
** GAME PLAYER CLASS
**************************************************/
var PlayerData = function() {
	var name,
		game = null,
		pistol = {x: 1, y: 0},
		flag = {x: 0, y: 0 },
		state = GLOBAL.PLAYER_STATE.NONE;


	// Define which variables and methods can be accessed
	return {
		name: name,
		game: game,
		flag: flag,
		pistol: pistol
	}
};

// Export the Player class so you can use it in
// other files by using require("Player").Player
exports.PlayerData = PlayerData;