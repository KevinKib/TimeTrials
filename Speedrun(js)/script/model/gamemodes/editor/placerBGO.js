const Placer = require("./placer").Placer;
const PlacerEntity = require("./placerEntity").PlacerEntity;
//const GameProperties = require("../../../gameproperties").GameProperties;
//const BGO = require("../../bgo").BGO;

class PlacerBGO extends Placer {

    constructor(editor) {
        super(editor);
    }

    place() {
        
    }
    
    pick() {
        
    }

    suppress() {
        
    }

    next() {
        return new PlacerEntity(this.editor);
    }

}

module.exports.PlacerBGO = PlacerBGO;