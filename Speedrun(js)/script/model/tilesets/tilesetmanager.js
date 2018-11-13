const Tileset_SMWBlue = require("./tileset_smwblue").Tileset_SMWBlue;
const BGOset_Grass = require("./bgoset_grass").BGOset_Grass;

// Singleton-like class
class TilesetManager {

    constructor() {
        this.tilesets = new Array();
        this.BGOsets = new Array();

        this.tilesets.push(new Tileset_SMWBlue());
        this.BGOsets.push(new BGOset_Grass());
    }

    static getTileset(name) {
        this.getInstance();

        let newTileset;
        this.instance.tilesets.forEach(function(tileset) {
            if (tileset.name == name) {
                newTileset = tileset;
            }
        });
        return newTileset;
    }

    static getBGOset(name) {
        this.getInstance();

        let newBGOset;
        this.instance.BGOsets.forEach(function(BGOset) {
            if (BGOset.name == name) {
                newBGOset = BGOset;
            }
        });
        return newBGOset;
    }

    static getInstance() {
        if (this.instance == null) {
            this.instance = new TilesetManager();
        }
    }

}
TilesetManager.instance = null;

module.exports.TilesetManager = TilesetManager;