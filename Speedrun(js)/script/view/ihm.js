const View = require("./view").View;
const View_Entity = require("./view_entity").View_Entity;
const View_Level = require("./view_level").View_Level;
const SpriteManager = require("./spritemanager").SpriteManager;


class IHM extends View {

    constructor(model) {
        super(model);
        this.createViews();
    }

    createViews() {
        this.playerView = new View_Entity(this.model.player);
        this.levelView = new View_Level(this.model.level);
    }

    draw() {
        this.levelView.draw();
        this.playerView.draw();
    }

    preload() {
        SpriteManager.load();
    }

}

module.exports.IHM = IHM;