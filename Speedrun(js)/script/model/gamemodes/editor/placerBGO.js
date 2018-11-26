const Placer = require("./placer").Placer;

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
        return this.editor.factory_entity();
    }

}

module.exports.PlacerBGO = PlacerBGO;