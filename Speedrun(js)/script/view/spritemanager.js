
class SpriteManager {

    static load() {
        SpriteManager.background_sky = loadImage("sprites/background/sky.png");
        SpriteManager.bgoset_grass = loadImage("sprites/bgo/grass.png");
        SpriteManager.tileset_BlueGrass = loadImage("sprites/tileset/smw_blue.png");
    }

}

module.exports.SpriteManager = SpriteManager;