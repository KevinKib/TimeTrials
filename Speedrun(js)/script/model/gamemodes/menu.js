const GameMode = require("./gamemode").GameMode;
const Button = require("./menu/button").Button;

class Menu extends GameMode {

    constructor(game) {
        super();
        this.game = game;
        this.play = new Button(this, "TimeTrial");
        this.editor = new Button(this, "Editor");

    }

    toInstance() {
        this.game.setGamemode("TimeTrial");
    }

    onEachFrame() {

    }

}

module.exports.Menu = Menu;