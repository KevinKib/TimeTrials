const Level = require("./level").Level;
const TilesetManager = require("../tilesets/tilesetmanager").TilesetManager;
const Level_Empty = require("./level_empty").Level_Empty;

class Level_Json extends Level {

    constructor(address) {
        super("EditorLevel", TilesetManager.getTileset("SMWBlue"), TilesetManager.getBGOset("Grass"));
        this.serializer.level = new Level_Empty();
        this.serializer.load(address);
        this.blockList = this.serializer.level.blockList;
        this.bgoList = this.serializer.level.bgoList;
        this.entityList = this.serializer.level.entityList;
        // gravity, etc...


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

module.exports.Level_Json = Level_Json;