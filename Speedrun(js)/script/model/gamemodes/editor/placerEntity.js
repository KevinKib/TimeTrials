const Placer = require("./placer").Placer;

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
        return this.editor.factory_block();
    }

}

module.exports.PlacerEntity = PlacerEntity;