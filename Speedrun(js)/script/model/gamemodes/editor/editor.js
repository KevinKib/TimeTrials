const GameMode = require("../gamemode").GameMode;
const GameProperties = require("../../../gameproperties").GameProperties;
const Level_Empty = require("../../levels/level_empty").Level_Empty;
//const Tileset_SMWBlue = require("../../tilesets/tileset_smwblue").Tileset_SMWBlue;
//const Level_Test = require("../../levels/level_test").Level_Test;
const Block = require("../../block").Block;
//const BGO = require("../bgos/bgo").BGO;

class Editor extends GameMode {

    constructor() {
        super();
        this.level = new Level_Empty();
        this.level.name = "editor";
        this.currentTileset = this.level.tileset;
        this.fakeObject = new Block(1, this.level.tileset, 0, 0);
        this.keys = {
            UP: 38,
            DOWN: 40,
            LEFT: 37,
            RIGHT: 39,
            A: 65
        };
        this.maxInputDelay = 10;
        this.inputDelay = 0;
    }

    onEachFrame() {
        this.fakeObject.pos.x = (GameProperties.floatToGrid(mouseX)-1)*GameProperties.blocksize();
        this.fakeObject.pos.y = (GameProperties.floatToGrid(mouseY)-1)*GameProperties.blocksize();
        this.input();
    }

    input() {

        if (this.inputDelay > 0) {
            this.inputDelay--;
        }
        else {
            if (mouseIsPressed) {
            
                switch(mouseButton) {
                
                case LEFT:
                    this.place();
                    break;
                case RIGHT:
                    this.suppress();
                    break;
                case CENTER:
                    this.pick();
                    break;

                }
            }
    
            if (keyIsDown(this.keys.UP)) {
                this.indexUp();
                this.resetInputDelay();
            }
            if (keyIsDown(this.keys.DOWN)) {
                this.indexDown();
                this.resetInputDelay();
            }
            if (keyIsDown(this.keys.A)) {
                this.save();
            }
        }

    }

    resetInputDelay() {
        this.inputDelay = this.maxInputDelay;
    }

    place() {
        let canPlace = true;

        this.level.blockList.forEach(function(block) {
            if (GameProperties.floatToGrid(block.pos.x) == GameProperties.floatToGrid(mouseX)
            && GameProperties.floatToGrid(block.pos.y) == GameProperties.floatToGrid(mouseY)) {
                canPlace = false;
            }
        });

        if (canPlace) {
            this.level.addBlock(new Block(this.fakeObject.id, this.currentTileset,
                GameProperties.floatToGrid(mouseX), GameProperties.floatToGrid(mouseY)));
        }
        
    }
    
    pick() {
        let self = this;
        this.level.blockList.forEach(function(block) {
            if (GameProperties.floatToGrid(block.pos.x) == GameProperties.floatToGrid(mouseX)
            && GameProperties.floatToGrid(block.pos.y) == GameProperties.floatToGrid(mouseY)) {
                self.fakeObject.id = block.id;
            }
        });
    }

    suppress() {
        let self = this;

        this.level.blockList.forEach(function(block) {
            
            if (GameProperties.floatToGrid(block.pos.x) === GameProperties.floatToGrid(mouseX)
            && GameProperties.floatToGrid(block.pos.y) === GameProperties.floatToGrid(mouseY)) {
                self.level.removeBlock(block);
            }
        });
    }

    indexUp() {
        this.fakeObject.id++;
    }

    indexDown() {
        this.fakeObject.id--;
    }

    exit() {

    }

    switchGameObjectType() {
        
    }

    save() {
        this.level.serializer.save();
    }

    

}

module.exports.Editor = Editor;