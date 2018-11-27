const Tileset = require("./tileset").Tileset;

class BGOset_Grass extends Tileset {

    constructor() {
        super(2, "Grass", 7, 1, 32, 2);
    }

}

module.exports.BGOset_Grass = BGOset_Grass;