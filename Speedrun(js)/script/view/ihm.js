const View = require("./view").View;
const View_TimeTrial = require("./view_timetrial").View_TimeTrial;
const View_Menu = require("./view_menu").View_menu;
const View_Editor = require("./view_editor").View_Editor;
const SpriteManager = require("./spritemanager").SpriteManager;


class IHM extends View {

    constructor(model) {
        super(model);
        this.createViews();
    }

    setGamemode(name) {
        switch(name) {

        case "Menu":
            this.gamemodeView = new View_Menu(this.model.gamemode);
            break;
        case "TimeTrial":
            this.gamemodeView = new View_TimeTrial(this.model.gamemode);
            break;
        case "Editor":
            this.gamemodeView = new View_Editor(this.model.gamemode);
            break;
        }
    }

    createViews() {
        this.gamemodeView = new View_Menu(this.model.gamemode);
    }

    draw() {
        this.gamemodeView.draw();
    }

    preload() {
        SpriteManager.load();
    }

}

module.exports.IHM = IHM;