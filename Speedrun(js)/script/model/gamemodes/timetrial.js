const GameMode = require("./gamemode").GameMode;
const Player = require("../entities/player").Player;
const Level_Test = require("../levels/level_test").Level_Test;

class TimeTrial extends GameMode {

    constructor() {
        super();
        this.player = new Player();
        this.level = new Level_Test();
        this.level.entityList.push(this.player);
        this.levelList = new Array();
    }

    onEachFrame() {
        this.level.loop();
    }

}

module.exports.TimeTrial = TimeTrial;