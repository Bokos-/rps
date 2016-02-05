/**************************************************
** GAME PLAYER CLASS
**************************************************/
var PlayerData = function() {
	var name,
		games = {
			public: [],
			friend: [],
			ranked: []
		};


	// Define which variables and methods can be accessed
	return {
		name: name,
		games: games
	}
};

// Export the Player class so you can use it in
// other files by using require("Player").Player
exports.PlayerData = PlayerData;