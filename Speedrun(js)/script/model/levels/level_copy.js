const Level = require("./level").Level;
const Level_Test = require("./level_test").Level_Test;
const TilesetManager = require("../tilesets/tilesetmanager").TilesetManager;

class Level_Copy extends Level {

    constructor() {
        super("Copy level", TilesetManager.getTileset("SMWBlue"), TilesetManager.getBGOset("Grass"));

        this.serializer.level = new Level_Test();
        this.serializer.load();
        this.blockList = this.serializer.level.blockList;
        this.bgoList = this.serializer.level.bgoList;
        this.entityList = this.serializer.level.entityList;


        let self = this;
        this.blockList.forEach(function(block) {
            block.tileset = self.tileset;
        });

        this.bgoList.forEach(function(bgo) {
            bgo.tileset = self.bgoset;
        });
    }

    createBlocks() {
        
    }

    createBGOs() {

    }
}

module.exports.Level_Copy = Level_Copy;