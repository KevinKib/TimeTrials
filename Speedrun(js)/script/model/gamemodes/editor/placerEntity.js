const Placer = require("./placer").Placer;
const PlacerBlock = require("./placerblock").PlacerBlock;
//const GameProperties = require("../../../gameproperties").GameProperties;
//const BGO = require("../../bgo").BGO;

class PlacerEntity extends Placer {

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
        return new PlacerBlock(this.editor);
    }

}

module.exports.PlacerEntity = PlacerEntity;