const IHM = require("./view/ihm").IHM;
const TimeTrial = require("./model/gamemodes/timetrial").TimeTrial;

class Game {

    constructor() {
        this.framerate = 60;
        this.windowSize = {x:640, y:480};

        this.gamemode = new TimeTrial();

        // IHM has to be loaded last
        this.IHM = new IHM(this);

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