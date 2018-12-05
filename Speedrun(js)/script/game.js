const IHM = require("./view/ihm").IHM;
const TimeTrial = require("./model/gamemodes/timetrial").TimeTrial;
const Menu = require("./model/gamemodes/menu").Menu;
const Editor = require("./model/gamemodes/editor").Editor;

class Game {

    constructor() {
        this.framerate = 60;
        this.windowSize = {x:640, y:480};

        this.gamemode = new Menu(this);

        // IHM has to be loaded last
        this.IHM = new IHM(this);

    }

    setGamemode(name) {
        switch(name) {

        case "Menu":
            this.gamemode = new Menu(this);
            break;
        case "TimeTrial":
            this.gamemode = new TimeTrial();
            break;
        case "Editor":
            this.gamemode = new Editor();
            break;
        }

        this.IHM.setGamemode(name);
    }

    // P5 main methods

    preload() {
        this.IHM.preload();
    }

    setup() {
        createCanvas(this.windowSize.x, this.windowSize.y);
        frameRate(this.framerate);
    }

    draw() {
        this.gamemode.onEachFrame();
        this.IHM.draw();
    }

}

module.exports.Game = Game;