const Tileset = require("./tileset").Tileset;

class BGOset_Grass extends Tileset {

    constructor() {
        super("Grass", 7, 1, 32, 1);
    }

}

module.exports.BGOset_Grass = BGOset_Grass;