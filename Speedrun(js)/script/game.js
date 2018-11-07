const Player = require("./model/entities/player").Player;
const Level_Test = require("./model/levels/level_test").Level_Test;
const IHM = require("./view/ihm").IHM;

class Game {

    constructor() {
        this.framerate = 60;
        this.windowSize = {x:640, y:480};

        this.player = new Player();
        this.level = new Level_Test();
        this.level.entityList.push(this.player);
        this.levelList = new Array();

        // IHM has to be loaded last
        this.IHM = new IHM(this);

    }

    onEachFrame() {
        this.level.loop();
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
        this.onEachFrame();
        this.IHM.draw();
    }

}

module.exports.Game = Game;