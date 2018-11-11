const View = require("./view").View;
const View_Tileset = require("./view_tileset").View_Tileset;
const View_GameObject = require("./view_gameobject").View_GameObject;
const SpriteManager = require("./spritemanager").SpriteManager;
const View_Level = require("./view_level").View_Level;

class View_Editor extends View {

    constructor(model) {
        super(model);
        
        this.levelView = new View_Level(this.model.level);

        this.defined = false;

        
    }

    draw() {
        if (!this.defined) {
            let tilesetView = new View_Tileset(this.model.currentTileset, SpriteManager.tileset_BlueGrass);
            this.fakeObjectView = new View_GameObject(this.model.fakeObject, tilesetView);
            this.defined = true;
        }
        this.levelView.draw();
        this.fakeObjectView.draw();
    }

}

module.exports.View_Editor = View_Editor;