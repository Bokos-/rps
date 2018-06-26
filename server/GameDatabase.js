	var game_server = module.exports = {};

	var _game = require("./Game");

	var games = {
		public: [],
		publicFree: [],
		friend: [],
		ranked: [],
		rankedFree: []
	};

	var index = 0;
	var indexMaximum = 200000;

	game_server.findPublicGame = function(client)
	{
		if (games.publicFree.length)
		{
			console.log("Player has been joined to public game " +games.publicFree[0].id+ ".");
			game_server.join(client, games.publicFree[0], GLOBAL.PUBLIC);
			return 1;
		}

		this.create(client, GLOBAL.PUBLIC);

		console.log("Public game has been created " +index+ ".");
		this.indexUpdate();

		return 0;
	}

	game_server.create = function(client, type)
	{
		var game = new _game.new(index, type);
		_game.initFields(game.area);
		game.playerWhite = client;

		if (type == GLOBAL.PUBLIC)
		games.publicFree.push(game);
		else
		games.rankedFree.push(game);

		client.data.game = game;
		client.data.state = GLOBAL.PLAYER_STATE.FIND;

	}

	game_server.startGame = function(game)
	{
		console.log("Game started");
		game.playerBlack.emit("start game");
		game.playerWhite.emit("start game");

		game.round = 1;
		game.playerWhite.emit("your turn");
	}

	game_server.join = function(client, game, type)
	{
		switch (type)
		{
			case GLOBAL.PUBLIC:
				games.public.push(game);
				games.publicFree.splice(0,1);
			break;
			case GLOBAL.RANKED:
				games.ranked.push(game);
				games.publicFree.splice(0,1);
			break;
		}
		
		client.data.game = game;
		game.playerBlack = client;
		this.prepareGame(game);
	}

	game_server.prepareGame = function(game)
	{
		console.log("Game has been started " +game.id+ ".");
		game.state = GLOBAL.STATE.PREPARE;

		game.playerWhite.data.state = GLOBAL.PLAYER_STATE.PREPARE;
		game.playerBlack.data.state = GLOBAL.PLAYER_STATE.PREPARE;
		game.playerBlack.emit("new player", {yourColor: 1});
		game.playerWhite.emit("new player", {yourColor: 0});
	}

	game_server.switchWeapon = function(client)
	{	
		var weapons = _game.switchWeapon(client);
		for (var i=0; i<weapons.length; i++)
		{
			var field = this.getField(client, weapons[i].y, weapons[i].x)
				
			field.weapon = weapons[i].weapon;
			field.player = client;
			field.visible = true;
		}

		client.emit("switch weapons", weapons);
	}

	game_server.isInt = function(n){
		return Number(n) === n && n % 1 === 0;
	}

	game_server.getField = function(client, row, column)
	{
		if (row < 0 || row > 5 || column < 0 || column > 6)
			return -1;

		if (this.isPlayerWhite(client))
			return client.data.game.area[row * 7 + column];
		else
			return client.data.game.area[41 - (row * 7 + column)];
	}

	game_server.indexUpdate = function()
	{
		if (index == indexMaximum) index = 0;
		index++;
	}

	game_server.freeMemory = function(client)
	{
		if (typeof client.data.game != 'undefined' || client.data.game)
		{
			this.deleteGame(client);
		}
		
		delete client.data;
	}

	game_server.deleteGame = function(client)
	{
		if (client.data == null || client.data.game == null)
			return true;

		if (client.data.game.state == GLOBAL.STATE.WAITING && client.data.game.type == GLOBAL.PUBLIC)
			this.spliceGame(games.publicFree, client.data.game);
		else if (client.data.game.type == GLOBAL.PUBLIC && client.data.game.state != GLOBAL.STATE.FINISHED)
			this.enemyDisconnected(client, games.public);
		else if (client.data.game.type == GLOBAL.PUBLIC)
			this.spliceGame(games.public, game);

		//++implement ranked

		delete game;
	}

	game_server.spliceGame = function(games, game)
	{
		if (typeof game == 'number')
			var id = game;
		else
			var id = game.id;
		for (var i=0; i<games.length; i++)
			if (games[i].id == id)
			{
				games.splice(i, 1);
				delete game;
				console.log("Game has been canceled " + id);
			}
	}

	game_server.enemyDisconnected = function(client, games)
	{
		if (client.data.game.state == GLOBAL.STATE.DISCONNECT)
			return ;

		if (this.isPlayerWhite(client))
			client.data.game.playerBlack.emit("enemy disconnected");
		else
			client.data.game.playerWhite.emit("enemy disconnected");

		client.data.game.state = GLOBAL.STATE.DISCONNECT;

		if (typeof client.data == "undefined" || client.data.game == null)
			return ;

		var that = this;
		var id = client.data.game.id;
		console.log("Player disconnected from " + id);

		setTimeout(function()
		{
			that.spliceGame(games, id);
		}, 4500);
	}

	game_server.isPlayerWhite = function (client)
	{
		if (typeof client.data.game == 'undefined' || client.data.game == null)
			return -1;

		return (client.data.game.playerWhite.id == client.id)? 1 : 0;
	}

	game_server.isWhiteRound = function (game)
	{
		return game.round % 2 == 1;
	}

	game_server.setGameCommand = function (client, data)
	{
		if (typeof data == "undefined")
			return ;	

		if (typeof data.fn == "undefined")
			return ;

		if (typeof client.data.game == "undefined" || 
			client.data.game == null || 
			client.data.game.state != GLOBAL.STATE.PREPARE ||
			client.data.state != GLOBAL.PLAYER_STATE.PREPARE)
			return ;


		if (data.fn == "set flag" && _game.checkFlagPistol(client, data))
		{
			var field = this.getField(client, data.y, data.x);
			if (field.weapon == GLOBAL.WEAPON.PISTOL)
				return ;
				field.weapon = GLOBAL.WEAPON.FLAG;
				field.player = client;
				field.visible = true;
				client.data.flag.x = data.x;
				client.data.flag.y = data.y;
		}
		
		else if (data.fn == "set pistol" && _game.checkFlagPistol(client, data))
		{
			var field = this.getField(client, data.y, data.x);
			if (field.weapon == GLOBAL.WEAPON.FLAG)
				return ;
				field.weapon = GLOBAL.WEAPON.PISTOL;
				field.player = client;
				field.visible = true;
				client.data.pistol.x = data.x;
				client.data.pistol.y = data.y;

			this.switchWeapon(client);
		}

		else if (data.fn == "switch weapon")
		{
			this.switchWeapon(client);
		}

		else if (data.fn == "ready")
		{
			if (!this.playerIsReady(client))
			{
				console.log("Something wrong with player " + client.id + " in game " + client.data.game.id);
			}
			else
			{
				//WTF client.data.state does not working!
				//LITTLE FIX
				if (this.isPlayerWhite(client))
				client.data.game.playerWhite.state = GLOBAL.PLAYER_STATE.READY;
				else
				client.data.game.playerBlack.state = GLOBAL.PLAYER_STATE.READY;

				if (client.data.game.playerBlack.state == GLOBAL.PLAYER_STATE.READY && client.data.game.playerWhite.state == GLOBAL.PLAYER_STATE.READY)
					this.startGame(client.data.game);
			}

		}
	}

	game_server.onMove = function(client, data)
	{
		var white = this.isPlayerWhite(client);

		if (white && client.data.game.round % 2 != 1)
			return false;
		if (!white && client.data.game.round % 2 != 0)
			return false;

		var field = this.getField(client, data.y, data.x);
		var moveField = this.getField(client, data.nY, data.nX);

		if (moveField.player != null && field.player.id == moveField.player.id)
			return false;

		if (moveField.player != null && field.player.id != client.id)
			return false;

		if (field.weapon == GLOBAL.WEAPON.NONE)
		{
			return false;
		}
		else if (field.weapon == GLOBAL.WEAPON.PISTOL || field.weapon == GLOBAL.WEAPON.FLAG)
		{
			return false;
		}
		else if (moveField.weapon == GLOBAL.WEAPON.NONE)
		{
			if (white)
				client.data.game.playerBlack.emit("your turn", {x: 6-data.x, y: 5-data.y, nX: 6-data.nX, nY: 5-data.nY});
			else
				client.data.game.playerWhite.emit("your turn", {x: 6-data.x, y: 5-data.y, nX: 6-data.nX, nY: 5-data.nY});

			moveField.player = field.player;
			field.player = null;
			moveField.weapon = field.weapon;
			field.weapon = GLOBAL.WEAPON.NONE;
		}
		else if (moveField.weapon == GLOBAL.WEAPON.FLAG || moveField.weapon == GLOBAL.WEAPON.PISTOL)
		{
			//implements win
            //implements install kill
            if (white) {
                client.data.game.playerBlack.emit("loose");
                client.data.game.playerWhite.emit("win");
            } else {
                client.data.game.playerBlack.emit("win");
                client.data.game.playerWhite.emit("loose");
			}
        }
		else
		{
			var result = this.winFight(field.weapon, moveField.weapon);
			switch (result)
			{
				case 0:
					if (white)
					{
						client.data.game.tie.wField = field;
						client.data.game.tie.bField = moveField;
						client.data.game.tie.start = 0;
					}
					else
					{
						client.data.game.tie.wField = moveField;
						client.data.game.tie.bField = field;	
						client.data.game.tie.start = 1;		
					}
					client.data.game.tie.data = data;

					field.player.emit("fight", {state: -1, x: data.x, y: data.y, nX: data.nX, nY: data.nY});
					moveField.player.emit("your turn", {state: -1, x: 6-data.x, y: 5-data.y, nX: 6-data.nX, nY: 5-data.nY});

					moveField.player = null;
                    moveField.weapon = GLOBAL.WEAPON.NONE;
                    field.player = null;
                    field.weapon = GLOBAL.WEAPON.NONE;

					break;
				case 1:
					field.player.emit("fight", {state: 1, weapon: moveField.weapon, x: data.x, y: data.y, nX: data.nX, nY: data.nY});
					moveField.player.emit("your turn", {nX: 6-data.x, nY: 5-data.y, x: 6-data.nX, y: 5-data.nY, state: 0, weapon: field.weapon});

					moveField.player = field.player;
					moveField.weapon = field.weapon;
					field.player = null;
					field.weapon = GLOBAL.WEAPON.NONE;
				break;
				case 2:
					field.player.emit("fight", {state: 0, weapon: moveField.weapon, x: data.x, y: data.y, nX: data.nX, nY: data.nY});
					moveField.player.emit("your turn", {x: 6-data.x, y: 5-data.y, nX: 6-data.nX, nY: 5-data.nY, state: 1, weapon: field.weapon});
				
					field.player = null;
					field.weapon = GLOBAL.WEAPON.NONE;
				break;
				default:
					return false;
					break;
			}
		}

		client.data.game.round++;
		return true;
	}

	game_server.winFight = function(weapon, weapon2)
	{
		if (weapon == GLOBAL.WEAPON.ROCK && weapon2 == GLOBAL.WEAPON.ROCK)
			return 0;
		else if (weapon == GLOBAL.WEAPON.ROCK && weapon2 == GLOBAL.WEAPON.PAPER)
			return 2;
		else if (weapon == GLOBAL.WEAPON.ROCK && weapon2 == GLOBAL.WEAPON.SCISSORS)
			return 1;

		else if (weapon == GLOBAL.WEAPON.PAPER && weapon2 == GLOBAL.WEAPON.ROCK)
			return 1;
		else if (weapon == GLOBAL.WEAPON.PAPER && weapon2 == GLOBAL.WEAPON.PAPER)
			return 0;
		else if (weapon == GLOBAL.WEAPON.PAPER && weapon2 == GLOBAL.WEAPON.SCISSORS)
			return 2;

		else if (weapon == GLOBAL.WEAPON.SCISSORS && weapon2 == GLOBAL.WEAPON.ROCK)
			return 2;
		else if (weapon == GLOBAL.WEAPON.SCISSORS && weapon2 == GLOBAL.WEAPON.PAPER)
			return 1;
		else if (weapon == GLOBAL.WEAPON.SCISSORS && weapon2 == GLOBAL.WEAPON.SCISSORS)
			return 0;
		
		return -1;
	}

	game_server.onTie = function(client, data)
	{
		if (typeof data == "undefined")
			return false;

		if (typeof data.weapon == "undefined")
			return false;

		if (client.data == null || client.data.game == null)
			return false;

		if (!this.isInt(data.weapon))
			return false;

		if (data.weapon < 1 || data.weapon > 3)
			return false;

		if (client.data.game.tie.start == -1)
			return false;

		var white = this.isPlayerWhite(client);

		if (white)
			client.data.game.tie.wW = data.weapon;
		else
			client.data.game.tie.bW = data.weapon;

		if (client.data.game.tie.wW && client.data.game.tie.bW)
		{

			var result = this.winFight(client.data.game.tie.wW, client.data.game.tie.bW);
			switch (result)
			{
				case 0:
					client.data.game.tie.wW = GLOBAL.WEAPON.NONE; 
					client.data.game.tie.bW = GLOBAL.WEAPON.NONE;

					client.data.game.tie.wField.player.emit("fight", {state: -1, weapon: client.data.game.tie.bW});
					client.data.game.tie.bField.player.emit("fight", {state: -1, weapon: client.data.game.tie.wW});
				break;

				case 1:
					if (isWhiteRound(client))
					{
						if (client.data.game.tie.start == 1) //white
						{
							field.player.emit("fight", {state: 1, weapon: client.data.game.tie.bW, x: client.data.game.tie.data.x, y: client.data.game.tie.data.y, nX: client.data.game.tie.data.nX, nY: client.data.game.tie.data.nY});
							moveField.player.emit("your turn", {x: 6-client.data.game.tie.data.x, y: 5-client.data.game.tie.data.y, nX: 6-client.data.game.tie.data.nX, nY: 5-client.data.game.tie.data.nY, state: 0, weapon: client.data.game.tie.wField});
						}
						else //black
						{
							field.player.emit("fight", {state: 1, weapon: client.data.game.tie.bW, x: 6-client.data.game.tie.data.x, y: 5-client.data.game.tie.data.y, nX: 6-client.data.game.tie.data.nX, nY: 5-client.data.game.tie.data.nY});
							moveField.player.emit("your turn", {x: client.data.game.tie.data.x, y: client.data.game.tie.data.y, nX: client.data.game.tie.data.nX, nY: client.data.game.tie.data.nY, state: 0, weapon: client.data.game.tie.wField});
						}
					}
					else
					{
						if (client.data.game.tie.start == 1) //white
						{
							field.player.emit("your turn", {state: 1, weapon: client.data.game.tie.bW, x: client.data.game.tie.data.x, y: client.data.game.tie.data.y, nX: client.data.game.tie.data.nX, nY: client.data.game.tie.data.nY});
							moveField.player.emit("fight", {x: 6-client.data.game.tie.data.x, y: 5-client.data.game.tie.data.y, nX: 6-client.data.game.tie.data.nX, nY: 5-client.data.game.tie.data.nY, state: 0, weapon: client.data.game.tie.wField});
						}
						else	//black
						{
							field.player.emit("your turn", {state: 1, weapon: client.data.game.tie.bW, x: 6-client.data.game.tie.data.x, y: 5-client.data.game.tie.data.y, nX: 6-client.data.game.tie.data.nX, nY: 5-client.data.game.tie.data.nY});
							moveField.player.emit("fight", {x: client.data.game.tie.data.x, y: client.data.game.tie.data.y, nX: client.data.game.tie.data.nX, nY: client.data.game.tie.data.nY, state: 0, weapon: client.data.game.tie.wField});
						}
					}

				break;
			}

		}

	}

	game_server.onPlusOne = function(prevValueI, valueI, prevValueJ, valueJ)
	{
		var newValueI = valueI - prevValueI;
		var newValueJ = valueJ - prevValueJ;

		if ((newValueI == -1 || newValueI == 1) && newValueJ == 0)
			return true;
		return false;
	}

	game_server.playerIsReady = function (client)
	{
		var flag 		  = 0,
			pistol 		  = 0,
			countWarriors = 0;

		var isWhite = this.isPlayerWhite(client);

		for (var i=0; i<GLOBAL.FIELDS; i++)	
		{
			var field = client.data.game.area[i];

			if (field.player == null || field.player.id != client.id)
				continue;

			if (isWhite)
			{
				if (i<28 && field.player.id == client.id)
					return false;
			}
			else
			{
				if (i>13 && field.player.id == client.id)
					return false;
			}
				
			if (field.weapon == GLOBAL.WEAPON.FLAG)
				flag++;

			if (field.weapon == GLOBAL.WEAPON.PISTOL)
				pistol++;
		}

		if (flag > 1 || pistol > 1)
			return false;


		console.log("Player " + client.id + " is ready in game " + client.data.game.id);

		return true;
	}