/**************************************************
** GAME PLAYER CLASS
**************************************************/
var PlayerData = function() {
	var name,
		game = null,
		type = null,
		pistol = {x: 1, y: 0},
		flag = {x: 0, y: 0 };


	// Define which variables and methods can be accessed
	return {
		name: name,
		game: game,
		type: type,
		flag: flag,
		pistol: pistol
	}
};

// Export the Player class so you can use it in
// other files by using require("Player").Player
exports.PlayerData = PlayerData;