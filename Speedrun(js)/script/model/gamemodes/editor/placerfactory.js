const PlacerBlock = require("./placerblock").PlacerBlock;
const PlacerBGO = require("./placerBGO").PlacerBGO;
const PlacerEntity = require("./placerEntity").PlacerEntity;

class PlacerFactory {

    constructor(editor) {
        this.editor = editor;
    }

    create(type) {
        let placer;

        switch(type) {

        case "PlacerBlock": 
            placer = new PlacerBlock(this.editor);
            break;
        case "PlacerBGO": 
            placer = new PlacerBGO(this.editor);
            break;
        case "PlacerEntity": 
            placer = new PlacerEntity(this.editor);
            break;
            
        }

        return placer;
    }

}

module.exports.PlacerFactory = PlacerFactory;