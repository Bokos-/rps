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
		game.playerBlack.emit("new player");
		game.playerWhite.emit("new player");
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

	game_server.getField = function(client, row, column)
	{
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
			this.spliceGame(games.publicFree, game);
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

	game_server.setGameCommand = function (client, data)
	{
		if (typeof data.fn == "undefined")
			return ;

		if (client.data.game == null || client.data.game.state > GLOBAL.STATE.PREPARE)
			return ;

		if (data.fn == "set flag" && _game.checkFlagPistol(client, data) && client.data.game.state == GLOBAL.STATE.PREPARE)
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
		
		else if (data.fn == "set pistol" && _game.checkFlagPistol(client, data) && client.data.game.state == GLOBAL.STATE.PREPARE)
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

		else if (data.fn == "switch weapon" && client.data.game.state == GLOBAL.STATE.PREPARE)
		{
			this.switchWeapon(client);
		}

	}