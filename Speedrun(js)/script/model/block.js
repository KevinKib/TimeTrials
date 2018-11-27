const GameObject = require("./gameobject").GameObject;
const GameProperties = require("../gameproperties").GameProperties;

class Block extends GameObject {

    constructor(id, tileset, posx, posy) {
        super(id, tileset, posx, posy, GameProperties.blocksize(), GameProperties.blocksize());
        this.visible = true;
        this.collision = true;
    }
    
    getType() {
        return "Block";
    }

    // Might need to override CreateFloat();

}

module.exports.Block = Block;