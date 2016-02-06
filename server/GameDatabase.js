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
		var game = new _game.new(index);
		_game.initFields(game.area);
		game.playerWhite = client;
		games.publicFree.push(game);

		if (type == GLOBAL.PUBLIC)
		client.data.type = GLOBAL.PUBLIC;
		else
		client.data.type = GLOBAL.RANKED;

		client.data.game = game;
	}

	game_server.join = function(client, game, type)
	{
		switch (type)
		{
			case GLOBAL.PUBLIC:
				games.public.push(game);
				client.data.type = GLOBAL.PUBLIC;
				games.publicFree = games.publicFree.slice(1);
			break;
			case GLOBAL.RANKED:
				games.ranked.push(game);
				client.data.type = GLOBAL.RANKED;
				games.rankedFree = games.publicFree.slice(1);
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
			delete client.data.game;
		
		client.data.type = null;

		delete client.data;
	}

	game_server.isPlayerWhite = function (client)
	{
		if (typeof client.data.game == 'undefined' || client.data.game == null)
			return -1;

		return (client.data.game.playerWhite.id == client.id)? 1 : 0;
	}

	game_server.setCommand = function (client, data)
	{
		if (typeof data.fn == "undefined")
			return ;

		if (data.fn == "flag" && _game.checkFlagPistol(client, data) && client.data.game.state == GLOBAL.STATE.PREPARE)
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
		
		else if (data.fn == "pistol" && _game.checkFlagPistol(client, data) && client.data.game.state == GLOBAL.STATE.PREPARE)
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

	}