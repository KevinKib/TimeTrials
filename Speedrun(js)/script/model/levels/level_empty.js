const Level = require("./level").Level;
const TilesetManager = require("../tilesets/tilesetmanager").TilesetManager;

class Level_Empty extends Level {

    constructor() {
        super("Emptylevel", TilesetManager.getTileset("SMWBlue"), TilesetManager.getBGOset("Grass"));
    }

    createBlocks() {

    }

    createBGOs() {
        
    }
}

module.exports.Level_Empty = Level_Empty;