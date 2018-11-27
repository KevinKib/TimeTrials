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

    getType() {
        return "PlacerEntity";
    }

    next() {
        return this.editor.factory.create("PlacerBlock");
    }

}

module.exports.PlacerEntity = PlacerEntity;