const GameMode = require("../gamemode").GameMode;
const GameProperties = require("../../../gameproperties").GameProperties;
const Level_Empty = require("../../levels/level_empty").Level_Empty;
//const Level_Test = require("../../levels/level_test").Level_Test;
const Block = require("../../block").Block;
//const BGO = require("../bgos/bgo").BGO;

class Editor extends GameMode {

    constructor() {
        super();
        this.level = new Level_Empty();
        this.fakeObject = new Block(0, this.level.tileset,
            GameProperties.floatToGrid(0), GameProperties.floatToGrid(0));
        this.currentBlock = 2;
        this.currentTileset = this.level.tileset;
    }

    onEachFrame() {
        this.input();
    }

    input() {

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
            this.level.addBlock(new Block(this.currentBlock, this.currentTileset,
                GameProperties.floatToGrid(mouseX), GameProperties.floatToGrid(mouseY)));
        }
        
    }
    
    pick() {
        this.level.blockList.forEach(function(block) {
            if (GameProperties.floatToGrid(block.pos.x) == GameProperties.floatToGrid(mouseX)
            && GameProperties.floatToGrid(block.pos.y) == GameProperties.floatToGrid(mouseY)) {
                this.currentBlock = block.id;
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

    exit() {

    }

    save() {

    }

    

}

module.exports.Editor = Editor;