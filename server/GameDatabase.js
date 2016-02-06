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
		client.data.games.public.push(game);
		else
		client.data.games.ranked.push(game);
	}

	game_server.join = function(client, game, type)
	{
		switch (type)
		{
			case GLOBAL.PUBLIC:
				games.public.push(game);
				client.data.games.public.push(game);
				games.publicFree = games.publicFree.slice(1);
			break;
			case GLOBAL.RANKED:
				games.ranked.push(game);
				client.data.games.ranked.push(game);
				games.rankedFree = games.publicFree.slice(1);
			break;
		}
		

		game.playerBlack = client;
		this.startGame(game);
	}

	game_server.startGame = function(game)
	{
		console.log("Game has been started " +game.id+ ".");
		game.playerBlack.emit("new player");
		game.playerWhite.emit("new player");
		game.playerBlack.emit("switch weapons", _game.switchWeapon());
		game.playerWhite.emit("switch weapons", _game.switchWeapon());
	}

	game_server.getField = function(game, row, column)
	{
		return game.area[row * 8 + column];
	}

	game_server.indexUpdate = function()
	{
		if (index == indexMaximum) index = 0;
		index++;
	}

	game_server.freeMemory = function(client)
	{
		for (var i=0; i<client.data.games.public.length; i++)
		{
			if (client.data.games.public[i] != "undefined")
			delete client.data.games.public[i];
		}

		for (var i=0; i<client.data.games.ranked.length; i++)
		{
			if (client.data.games.ranked[i] != "undefined")
			delete client.data.games.ranked[i];
		}

		for (var i=0; i<client.data.games.friend.length; i++)
		{
			if (client.data.games.friend[i] != "undefined")
			delete client.data.games.friend[i];
		}

		delete client.data;
	}
