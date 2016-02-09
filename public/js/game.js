/**************************************************
** GAME VARIABLES
**************************************************/
var canvas,			// Canvas DOM element
	ctx,			// Canvas rendering context
	keys,			// Keyboard input
	localPlayer,	// Local player
	remotePlayer,	// Remote players
	socket,			// Socket connection
	images = {},
	rect;

var totalResources = 6,
	numResourcesLoaded = 0,
	state = 0;

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

var extraDraw = [];

var drawFlag = null,
	drawPistol = null;

var minX = getXPos(0),
	minY = getYPos(0),
	
	maxX = getXPos(7),
	maxY = getYPos(6);

var buttonSwitchWeapon = document.getElementById("switchWeapon");
var buttonReady	 	   = document.getElementById("ready");

var selectedWarrior = null;
var enemyWarrior = null;

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

	rect = canvas.getBoundingClientRect();

	// Initialise the local player
	localPlayer = new Player();

	// Initialise socket connection
	socket = io.connect("http://localhost:3003", {transports: ["websocket"]});

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

	setTimeout(function()
	{
		socket.emit("find game");
	},2000);

	buttonSwitchWeapon.addEventListener("click", sendSwitchWeapon);	
	buttonReady.addEventListener("click", sendReady);


};


/**************************************************
** GAME EVENT HANDLERS
**************************************************/
var setEventHandlers = function() {
	
	// Socket connection successful
	socket.on("connect", onSocketConnected);

	// Socket disconnection
	socket.on("disconnect", onSocketDisconnect);

	// New player message received
	socket.on("new player", onNewPlayer);

	// Player removed message received
	socket.on("remove player", onRemovePlayer);

	socket.on("switch weapons", onSwitchWeapon);

	socket.on("fight", onFight);

	socket.on("enemy disconnected", onEnemyDisconnect);

	socket.on("your turn", onMyRound);

	socket.on("start game", onStartGame);
};

function sendSwitchWeapon()
{
	socket.emit("command", {fn: "switch weapon"});
}

function sendReady()
{
	if (state == 2)
	{
		console.log("Send ready...");
		socket.emit("command", {fn: "ready"});
	}
}

function onMyRound(data)
{
	if (typeof data != "undefined")
	{
		var warrior = remotePlayer.getWarrior(data.x, data.y);
		warrior.x = data.nX;
		warrior.y = data.nY;
	}

	console.log("Your turn...");
	window.addEventListener("mouseup", onClickMove, false);
}

// Keyboard key down
function onClickMove(e) {

	var ePos = getMouseFieldPosition(e);

	var warrior = localPlayer.getWarrior(ePos.x, ePos.y);

	if (warrior != false && warrior.weapon != WEAPON.PISTOL && warrior.weapon != WEAPON.FLAG)
	{
		selectedWarrior = warrior;
	}
	else
	{
		if (selectedWarrior != null && selectedWarrior != false)
		{			
			if (!isPlusOne(selectedWarrior.x, ePos.x, selectedWarrior.y, ePos.y) && !isPlusOne(selectedWarrior.y, ePos.y, selectedWarrior.x, ePos.x))
				return ;

				enemyWarrior = remotePlayer.getWarrior(ePos.x, ePos.y);
				socket.emit("move", {x: selectedWarrior.x, y: selectedWarrior.y, nX: ePos.x, nY: ePos.y});

				if (enemyWarrior == false)
				{
					selectedWarrior.x = ePos.x;
					selectedWarrior.y = ePos.y;
				}
			//window.removeEventListener("mouseup", onClickMove, false);
		}
	}
};

function onStartGame()
{
	console.log("Game started...");
	
	buttonSwitchWeapon.removeEventListener("click", sendSwitchWeapon);	
	buttonReady.removeEventListener("click", sendReady);
	state++;
}

function onSwitchWeapon(data)
{
	console.log("Switch weapon...");
	deleteWarriors(localPlayer.warrior);

	extraDraw[drawFlag] = null;
	extraDraw[drawPistol] = null;
	
	for (var i=0; i<data.length; i++)
		localPlayer.warrior[i] = new Warrior(data[i].x, data[i].y, data[i].weapon);

}

function onEnemyDisconnect()
{
	alert("Enemy disconnected...");
}

function deleteWarriors(warriors)
{
	for (var i=0; i<warriors.length; i++)
		delete warriors[i];
}

function onFight()
{

}

// Socket connected
function onSocketConnected() {
	console.log("Connected to socket server");
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

	setFlag();
};

function setFlag()
{
	var imgFlag = {x: getXPos(0), y: getYPos(5), img: getImage(WEAPON.FLAG), field: {x: 0, y: 5}};
	drawFlag = (extraDraw.push(imgFlag))-1;
	
	canvas.addEventListener("mousemove", onSetFlag, false);
	canvas.addEventListener("mouseup", onSetFlagAccept, false);

	console.log("Set your flag.");
}

function onSetFlag(e)
{
	var mouse = getMouseFieldPosition(e);
	
	if (mouse == -1)
		return ;

	if (mouse.y < 4)
		return;

	extraDraw[drawFlag].x = getXPos(mouse.x);
	extraDraw[drawFlag].y = getYPos(mouse.y);
	extraDraw[drawFlag].field.x = mouse.x;
	extraDraw[drawFlag].field.y = mouse.y;
}

function onSetFlagAccept(e)
{
	var mouse = getMouseFieldPosition(e);

	if (mouse == -1 || mouse.x > 6 || mouse.x < 0 || mouse.y < 4 || mouse.y > 6)
		return ;

	canvas.removeEventListener("mousemove", onSetFlag, false);
	canvas.removeEventListener("mouseup", onSetFlagAccept, false);

	socket.emit("command", {fn: "set flag", x: extraDraw[drawFlag].field.x, y: extraDraw[drawFlag].field.y});

	setPistol();
	state++;
}

function setPistol()
{
	if (extraDraw[drawFlag].field.x == 1)
	var imgPistol = {x: getXPos(2), y: getYPos(5), img: getImage(WEAPON.PISTOL), field: {x: 2, y: 5}};
	else
	var imgPistol = {x: getXPos(1), y: getYPos(5), img: getImage(WEAPON.PISTOL), field: {x: 1, y: 5}};

	drawPistol = (extraDraw.push(imgPistol))-1;
	
	canvas.addEventListener("mousemove", onSetPistol, false);
	canvas.addEventListener("mouseup", onSetPistolAccept, false);

	console.log("Set your pistol.");
}

function onSetPistol(e)
{
	var mouse = getMouseFieldPosition(e);
	
	if (mouse == -1)
		return ;

	if (mouse.y < 4)
		return;

	if (mouse.x == extraDraw[drawFlag].field.x && mouse.y == extraDraw[drawFlag].field.y)
		return ;

	extraDraw[drawPistol].x = getXPos(mouse.x);
	extraDraw[drawPistol].y = getYPos(mouse.y);
	extraDraw[drawPistol].field.x = mouse.x;
	extraDraw[drawPistol].field.y = mouse.y;
}

function onSetPistolAccept(e)
{
	var mouse = getMouseFieldPosition(e);

	if (mouse == -1 || mouse.x > 6 || mouse.x < 0 || mouse.y < 4 || mouse.y > 6)
		return ;

	canvas.removeEventListener("mousemove", onSetPistol, false);
	canvas.removeEventListener("mouseup", onSetPistolAccept, false);

	socket.emit("command", {fn: "set pistol", x: extraDraw[drawPistol].field.x, y: extraDraw[drawPistol].field.y});
	state++;
}

function getMouseFieldPosition(evt)
{
	var x = evt.clientX - rect.left,
    	y = evt.clientY - rect.top;

	if (x < minX || y < minY || x > maxX || y > maxY)
		return -1;

	var pos = {x: Math.floor((x-margin.left)/FIELD_SIZE), 
			   y: Math.floor((y-margin.top)/FIELD_SIZE)};

	if (pos.x > 6 || pos.y > 5)
		return -1;

	return pos;
}

function getXPos(x)
{
	return margin.left + x*FIELD_SIZE;
}

function getYPos(y)
{
	return margin.top + y*FIELD_SIZE;
}

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

	drawExtra();

	if (localPlayer)
	localPlayer.draw(ctx);

	if (remotePlayer)
	remotePlayer.draw(ctx);
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

			ctx.fillRect(getXPos(j), getYPos(i), FIELD_SIZE, FIELD_SIZE);
		}
}

function drawExtra()
{
	for (var i=0; i<extraDraw.length; i++)
	{
		if (extraDraw[i] == null || typeof extraDraw[i] == 'undefined')
			continue;

		ctx.drawImage(images[extraDraw[i].img], extraDraw[i].x, extraDraw[i].y);
	}
}

function isPlusOne(prevValueI, valueI, prevValueJ, valueJ)
{
	var newValueI = valueI - prevValueI;
	var newValueJ = valueJ - prevValueJ;

	if ((newValueI == -1 || newValueI == 1) && newValueJ == 0)
		return true;
	return false;
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
			return "pinguin";
		break;
	}
}

function resourceLoaded()
{
	numResourcesLoaded++;
	if (numResourcesLoaded == totalResources)
		console.log("Resources loaded.");
}