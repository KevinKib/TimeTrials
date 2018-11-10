const GameMode = require("./gamemode").GameMode;
const Player = require("../entities/player").Player;
const Level_Empty = require("../levels/level_empty").Level_Empty;
//const Level_Copy = require("../levels/level_copy").Level_Copy;

class TimeTrial extends GameMode {

    constructor() {
        super();
        this.player = new Player();
        this.level = new Level_Empty();
        this.level.entityList.push(this.player);
        this.levelList = new Array();
    }

    onEachFrame() {
        this.level.loop();
    }

}

module.exports.TimeTrial = TimeTrial;