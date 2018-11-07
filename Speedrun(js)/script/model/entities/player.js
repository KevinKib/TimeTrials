const Entity = require("./entity").Entity;

class Player extends Entity {

    constructor() {
        super();

        this.keys = {
            UP: 38,
            DOWN: 40,
            LEFT: 37,
            RIGHT: 39
        };
    }

    input() {

        if (keyIsDown(this.keys.LEFT)) {
            this.inputStorage.LEFT = true;
        }
        if (keyIsDown(this.keys.RIGHT)) {
            this.inputStorage.RIGHT = true;
        }
        if (keyIsDown(this.keys.DOWN)) {
            this.inputStorage.DOWN = true;
        }
        if (keyIsDown(this.keys.UP)) {
            this.inputStorage.UP = true;
        }
    }

}

module.exports.Player = Player;