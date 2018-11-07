const Game = require('./script/game').Game;
let game = new Game();

function preload() {
	game.preload();
}

function setup() {
	game.setup();
}

function draw() {
    game.draw();
}



