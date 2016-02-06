/**************************************************
** NODE.JS REQUIREMENTS
**************************************************/
var util = require("util"),					// Utility resources (logging, object inspection, etc)
	io 	 = require("socket.io")({ 			// Socket io
 				"transports": ["websocket"],
 				"log level": 2
 			}),
	PlayerData = require("./PlayerData").PlayerData,	// Player class
	GameDatabase = require("./GameDatabase");


/**************************************************
** GAME VARIABLES
**************************************************/
var socket; // Socket controller

GLOBAL.PUBLIC = 0;
GLOBAL.RANKED = 1;

GLOBAL.FIELDS = 42;

GLOBAL.WEAPON = {
	NONE: 0,
	ROCK: 1,
	PAPER: 2,
	SCISSORS: 3,
	PISTOL: 4,
	FLAG: 5
}

GLOBAL.STATE =
{
	WAITING: 0,
	PREPARE: 1,
	PLAYING: 2,
	DISCONNECT: 3,
	FINISHED: 4
};

/**************************************************
** GAME INITIALISATION
**************************************************/
function init() {
	// Set up Socket.IO to listen on port xy
	socket = io.listen(3003);

	// Start listening for events
	setEventHandlers();

	console.log("Server started...");
};


/**************************************************
** GAME EVENT HANDLERS
**************************************************/
var setEventHandlers = function() {
	// Socket.IO
	socket.sockets.on("connection", onSocketConnection);
};

// New socket connection
function onSocketConnection(client) {
	util.log("New player has connected: "+client.id);

	client['data'] = new PlayerData();

	client.on("find game", onFindGame);
	
	client.on("set", onSetGameCommand);

	// Listen for client disconnected
	client.on("disconnect", onClientDisconnect);
};

function onFindGame() {
	GameDatabase.findPublicGame(this);
}

function onSetGameCommand(data)
{
	GameDatabase.setGameCommand(this, data);
}

// Socket client has disconnected
function onClientDisconnect() {
	util.log("Player has disconnected: "+this.id);
	GameDatabase.freeMemory(this);
};

/**************************************************
** RUN THE GAME
**************************************************/
init();