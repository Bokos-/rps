/**************************************************
** GAME PLAYER CLASS
**************************************************/

var Warrior = function(x, y, weapon, enemyPlayer = false) {
	var x = x;
	var y = y;
	var weapon = weapon;
	var enemyPlayer = enemyPlayer;

	// Define which variables and methods can be accessed
	return {
		x: x,
		y: y,
		weapon: weapon,
        enemyPlayer: enemyPlayer
	}
};