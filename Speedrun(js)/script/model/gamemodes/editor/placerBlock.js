const Placer = require("./placer").Placer;
const GameProperties = require("../../../gameproperties").GameProperties;
const Block = require("../../block").Block;

class PlacerBlock extends Placer {

    constructor(editor) {
        super(editor);
        this.editor.fakeObject = new Block(1, this.editor.level.tileset, 0, 0);
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

    getType() {
        return "PlacerBlock";
    }

    next() {
        return this.editor.factory.create("PlacerBGO");
    }

}

module.exports.PlacerBlock = PlacerBlock;