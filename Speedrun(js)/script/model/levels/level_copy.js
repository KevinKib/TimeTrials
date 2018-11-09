const Level = require("./level").Level;
const Level_Test = require("./level_test").Level_Test;
const Tileset_SMWBlue = require("../tilesets/tileset_smwblue").Tileset_SMWBlue;
const BGOset_Grass = require("../tilesets/bgoset_grass").BGOset_Grass;

class Level_Copy extends Level {

    constructor() {
        super("Copy level", new Tileset_SMWBlue(), new BGOset_Grass());

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