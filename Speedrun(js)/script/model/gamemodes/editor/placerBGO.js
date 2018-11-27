const Placer = require("./placer").Placer;

const GameProperties = require("../../../gameproperties").GameProperties;
const BGO = require("../../bgos/bgo").BGO;

class PlacerBGO extends Placer {

    constructor(editor) {
        super(editor);
        this.editor.fakeObject = new BGO(1, this.editor.level.bgoset, 0, 0);
    }

    place() {
        let canPlace = true;

        this.editor.level.bgoList.forEach(function(bgo) {
            if (GameProperties.floatToGrid(bgo.pos.x) == GameProperties.floatToGrid(mouseX)
            && GameProperties.floatToGrid(bgo.pos.y) == GameProperties.floatToGrid(mouseY)) {
                canPlace = false;
            }
        });

        if (canPlace) {
            this.editor.level.addBGO(new BGO(this.editor.fakeObject.id, this.editor.currentBGOset,
                GameProperties.floatToGrid(mouseX), GameProperties.floatToGrid(mouseY)));
        }
    }
    
    pick() {
        let self = this;
        this.editor.level.bgoList.forEach(function(bgo) {
            if (GameProperties.floatToGrid(bgo.pos.x) == GameProperties.floatToGrid(mouseX)
            && GameProperties.floatToGrid(bgo.pos.y) == GameProperties.floatToGrid(mouseY)) {
                self.editor.fakeObject.id = bgo.id;
            }
        });
    }

    suppress() {
        let self = this;

        this.editor.level.bgoList.forEach(function(bgo) {
            
            if (GameProperties.floatToGrid(bgo.pos.x) === GameProperties.floatToGrid(mouseX)
            && GameProperties.floatToGrid(bgo.pos.y) === GameProperties.floatToGrid(mouseY)) {
                self.editor.level.removeBGO(bgo);
            }
        });
    }

    getType() {
        return "PlacerBGO";
    }

    next() {
        return this.editor.factory.create("PlacerEntity");
    }

}

module.exports.PlacerBGO = PlacerBGO;