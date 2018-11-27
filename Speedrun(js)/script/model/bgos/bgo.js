const GameObject = require("../gameobject").GameObject;
const GameProperties = require("../../gameproperties").GameProperties;

class BGO extends GameObject {

    constructor(id, tileset, posx, posy) {
        super(id, tileset, posx, posy, GameProperties.blocksize(), GameProperties.blocksize());
        this.visible = true;
        this.collision = false;
    }

    getType() {
        return "BGO";
    }

}

module.exports.BGO = BGO;