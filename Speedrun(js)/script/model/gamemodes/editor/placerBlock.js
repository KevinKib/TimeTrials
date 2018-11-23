const Placer = require("./placer").Placer;
const GameProperties = require("../../../gameproperties").GameProperties;
const Block = require("../../block").Block;
const PlacerBGO = require("./placerBGO").PlacerBGO;

class PlacerBlock extends Placer {

    constructor(editor) {
        super(editor);
    }

    place() {
        let canPlace = true;

        this.editor.level.blockList.forEach(function(block) {
            if (GameProperties.floatToGrid(block.pos.x) == GameProperties.floatToGrid(mouseX)
            && GameProperties.floatToGrid(block.pos.y) == GameProperties.floatToGrid(mouseY)) {
                canPlace = false;
            }
        });

        if (canPlace) {
            this.editor.level.addBlock(new Block(this.editor.fakeObject.id, this.editor.currentTileset,
                GameProperties.floatToGrid(mouseX), GameProperties.floatToGrid(mouseY)));
        }
    }
    
    pick() {
        let self = this;
        this.editor.level.blockList.forEach(function(block) {
            if (GameProperties.floatToGrid(block.pos.x) == GameProperties.floatToGrid(mouseX)
            && GameProperties.floatToGrid(block.pos.y) == GameProperties.floatToGrid(mouseY)) {
                self.editor.fakeObject.id = block.id;
            }
        });
    }

    suppress() {
        let self = this;

        this.editor.level.blockList.forEach(function(block) {
            
            if (GameProperties.floatToGrid(block.pos.x) === GameProperties.floatToGrid(mouseX)
            && GameProperties.floatToGrid(block.pos.y) === GameProperties.floatToGrid(mouseY)) {
                self.editor.level.removeBlock(block);
            }
        });
    }

    next() {
        return new PlacerBGO(this.editor);
    }

}

module.exports.PlacerBlock = PlacerBlock;