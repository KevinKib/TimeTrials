const Level = require("./level").Level;
const Tileset_SMWBlue = require("../tilesets/tileset_smwblue").Tileset_SMWBlue;
const BGOset_Grass = require("../tilesets/bgoset_grass").BGOset_Grass;

class Level_Empty extends Level {

    constructor() {
        super("Emptylevel", new Tileset_SMWBlue(), new BGOset_Grass());
    }

    createBlocks() {

    }

    createBGOs() {
        
    }
}

module.exports.Level_Empty = Level_Empty;