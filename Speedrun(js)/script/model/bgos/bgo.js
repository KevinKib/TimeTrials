const GameObject = require("../gameobject").GameObject;

class BGO extends GameObject {

    constructor(id, tileset, posx, posy, sizex, sizey) {
        super(id, tileset, posx, posy, sizex, sizey);
        this.visible = true;
        this.collision = false;
    }

}

module.exports.BGO = BGO;