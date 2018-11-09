const View = require("./view").View;
const View_TimeTrial = require("./view_timetrial").View_TimeTrial;
const SpriteManager = require("./spritemanager").SpriteManager;


class IHM extends View {

    constructor(model) {
        super(model);
        this.createViews();
    }

    createViews() {
        this.gamemodeView = new View_TimeTrial(this.model.gamemode);
    }

    draw() {
        this.gamemodeView.draw();
    }

    preload() {
        SpriteManager.load();
    }

}

module.exports.IHM = IHM;