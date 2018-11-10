const GameMode = require("../gamemode").GameMode;
const GameProperties = require("../../../gameproperties").GameProperties;
const Level_Empty = require("../../levels/level_empty").Level_Empty;
const Block = require("../../block").Block;
//const BGO = require("../bgos/bgo").BGO;

class Editor extends GameMode {

    constructor() {
        super();
        this.level = new Level_Empty();
        this.currentBlock = 0;
        this.currentTileset = 0;
    }

    input() {

        if (mouseIsPressed) {
            switch(mouseButton) {
            
            case LEFT:
                this.place();
                break;
            case RIGHT:
                this.pick();
                break;
            case CENTER:
                this.suppress();
                break;
            }
        }

    }

    place() {
        this.level.addBlock(new Block(this.currentBlock, this.currentTileset,
            GameProperties.floatToGrid(mouseX), GameProperties.floatToGrid(mouseY)));
    }
    
    pick() {

    }

    suppress() {
        this.level.forEach(function(block) {
            if (block.pos.x == GameProperties.floatToGrid(mouseX) && block.pos.y == GameProperties.floatToGrid(mouseY)) {
                this.level.removeBlock(block);
            }
        });
    }

    exit() {

    }

    save() {

    }

    

}

module.exports.Editor = Editor;