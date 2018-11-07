const GameProperties = require("../gameproperties").GameProperties;

class GameObject {

    constructor(id, tileset, posx, posy, sizex, sizey) {
        this.id = id;
        this.tileset = tileset;
        this.size = {x: sizex, 
            y: sizey};
        this.pos = {x: (posx-1)*GameProperties.blocksize(), 
            y: (posy-1)*GameProperties.blocksize()};


        // Properties
        this.visible = true;
        this.collision = false;
    }

    static createFloat(id, tileset, x, y, sizex, sizey) {
        let obj = new GameObject(id, tileset, 0, 0, sizex, sizey);
        obj.pos.x = x;
        obj.pos.y = y;
        return obj;
    }

}

module.exports.GameObject = GameObject;