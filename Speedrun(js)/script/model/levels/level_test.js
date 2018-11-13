const Level = require("./level").Level;
const Block = require("../block").Block;
const BGO = require("../bgos/bgo").BGO;
const TilesetManager = require("../tilesets/tilesetmanager").TilesetManager;

class Level_Test extends Level {

    constructor() {
        super("Test level", TilesetManager.getTileset("SMWBlue"), TilesetManager.getBGOset("Grass"));
    }

    createBlocks() {
        for (let i = 1; i <= 20; i++) {
            this.addBlock(new Block(11, this.tileset, i,14));
            this.addBlock(new Block(1, this.tileset, i,13));
        }

        for (let i = 0; i <= 20; i++) {
            this.addBlock(new Block(i, this.tileset, i+1,5));
        }

        this.addBlock(new Block(1, this.tileset, 5,15));
    }

    createBGOs() {
        this.addBGO(new BGO(1, this.bgoset, 10, 10, 32, 32));
    }
}

module.exports.Level_Test = Level_Test;