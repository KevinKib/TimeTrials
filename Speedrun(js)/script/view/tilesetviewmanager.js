const View_Tileset = require("./view_tileset").View_Tileset;
const TilesetManager = require("../model/tilesets/tilesetmanager").TilesetManager;
const SpriteManager = require("./spritemanager").SpriteManager;

class TilesetViewManager {

    constructor() {
        this.viewList = new Array();

        this.viewList.push(new View_Tileset(TilesetManager.getTileset("SMWBlue"), SpriteManager.tileset_BlueGrass));
        this.viewList.push(new View_Tileset(TilesetManager.getBGOset("Grass"), SpriteManager.bgoset_grass));
    }

    static getView(name) {
        this.getInstance();

        let newTilesetView;
        this.instance.viewList.forEach(function(tilesetView) {
            if (tilesetView.model.name == name) {
                newTilesetView = tilesetView;
            }
        });
        return newTilesetView;
    }

    static getInstance() {
        if (this.instance == null) {
            this.instance = new TilesetViewManager();
        }
    }

}
TilesetViewManager.instance = null;

module.exports.TilesetViewManager = TilesetViewManager;