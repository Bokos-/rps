/**************************************************
** GAME VARIABLES
**************************************************/
var canvas,			// Canvas DOM element
	ctx,			// Canvas rendering context
	keys,			// Keyboard input
	localPlayer,	// Local player
	remotePlayer,	// Remote players
	socket,			// Socket connection
	images = {};

var totalResources = 6,
	numResourcesLoaded = 0;

var WEAPON = {
	NONE: 0,
	ROCK: 1,
	PAPER: 2,
	SCISSORS: 3,
	PISTOL: 4,
	FLAG: 5
};

var FIELD_SIZE = 70;

var margin = {left: 358, top: 40};

/**************************************************
** GAME INITIALISATION
**************************************************/
function init() {
	// Declare the canvas and rendering context
	canvas = document.getElementById("gameCanvas");
	ctx = canvas.getContext("2d");

	// Maximise the canvas
	canvas.width = 888;
	canvas.height = 500;

	// Initialise the local player
	localPlayer = new Player();

	// Initialise socket connection
	socket = io.connect("http://192.168.0.169:3003", {transports: ["websocket"]});

	// Initialise remote players array
	remotePlayer = null;

	// Start listening for events
	setEventHandlers();

	loadImage("monkey");
	loadImage("elephant");
	loadImage("sob");

	loadImage("pinguin");
	loadImage("lion");
	loadImage("fox");
};


/**************************************************
** GAME EVENT HANDLERS
**************************************************/
var setEventHandlers = function() {
	// Mouse click
	window.addEventListener("mouseup", onClick, false);

	// Socket connection successful
	socket.on("connect", onSocketConnected);

	// Socket disconnection
	socket.on("disconnect", onSocketDisconnect);

	// New player message received
	socket.on("new player", onNewPlayer);

	// Player move message received
	socket.on("move player", onMovePlayer);

	// Player removed message received
	socket.on("remove player", onRemovePlayer);

	socket.on("switch weapon", onSwitchWeapon);

	socket.on("fight", onFight);
};

// Keyboard key down
function onClick(e) {
	if (localPlayer) {
		keys.onKeyDown(e);
	};
};

function onSwitchWeapon(data)
{
	for (var i=0; i<data.length; i++)
		localPlayer.warrior[i] = new Warrior(data[i].x, data[i].y, data[i].weapon);
}

function onFight()
{

}

// Socket connected
function onSocketConnected() {
	console.log("Connected to socket server");

	// Send local player data to the game server
	socket.emit("new player");
};

// Socket disconnected
function onSocketDisconnect() {
	console.log("Disconnected from socket server");
};

// New player
function onNewPlayer(data) {
	console.log("New player connected");

	// Initialise the new player
	var newPlayer = new Player();
	remotePlayer = newPlayer;

	for (var i=0; i<2; i++)
		for (var j=0; j<7; j++)
		remotePlayer.warrior[i*7+j] = new Warrior(j, i, WEAPON.NONE);
};

// Move player
function onMovePlayer(data) {

};

// Remove player
function onRemovePlayer(data) {

};


/**************************************************
** GAME ANIMATION LOOP
**************************************************/
function animate() {
	update();
	draw();

	// Request a new animation frame using Paul Irish's shim
	window.requestAnimFrame(animate);
};


/**************************************************
** GAME UPDATE
**************************************************/
function update() {
	// Update local player and check for change
	if (localPlayer.update(keys)) {
		// Send local player data to the game server
		socket.emit("move player");
	};
};


/**************************************************
** GAME DRAW
**************************************************/
function draw() {
	// Wipe the canvas clean
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	drawFloor();
	ctx.drawImage(images["pinguin"], margin.left, margin.top);
};

function drawFloor()
{
	for (var i=0; i<6; i++)
		for (var j=0; j<7; j++)
		{
			if (i%2==0)
			ctx.fillStyle = (j%2==0)? "#C7DE81" : "#A0C928";
			else
			ctx.fillStyle = (j%2==0)? "#A0C928" : "#C7DE81";	

			ctx.fillRect(margin.left + FIELD_SIZE * j, margin.top + FIELD_SIZE * i, FIELD_SIZE, FIELD_SIZE);
		}
}

function loadImage(name)
{
	images[name] = new Image();
	images[name].onload = function()
	{
		resourceLoaded();
	}
	images[name].src = "images/" + name + ".png";
}

function getImage(weapon)
{
	switch (weapon)
	{
		case WEAPON.NONE:
			return "pinguin";
		break;
		case WEAPON.ROCK:
			return "elephant";
		break;
		case WEAPON.PAPER:
			return "monkey";
		break;
		case WEAPON.SCISSORS:
			return "sob";
		break;
		case WEAPON.PISTOL:
			return "lion";
		break;
		case WEAPON.FLAG:
			return "fox";
		break;
		default: 
			return WEAPON.NONE;
		break;
	}
}

function resourceLoaded()
{
	numResourcesLoaded++;
	if (numResourcesLoaded == totalResources)
		console.log("Resources loaded.");
}