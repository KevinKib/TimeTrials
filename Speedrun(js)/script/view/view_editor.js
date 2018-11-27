const View = require("./view").View;
const View_Level = require("./view_level").View_Level;
const View_GameObject = require("./view_gameobject").View_GameObject;
const TilesetViewManager = require("./tilesetviewmanager").TilesetViewManager;

class View_Editor extends View {

    constructor(model) {
        super(model);
        this.levelView = new View_Level(this.model.level);
    }

    draw() {
        let tilesetView = TilesetViewManager.getTilesetView(this.model.currentTileset.name);
        let bgosetView = TilesetViewManager.getBGOsetView(this.model.currentBGOset.name);

        this.fakeObjectView;

        switch(this.model.fakeObject.getType()) {
        
        case "Block":
            this.fakeObjectView = new View_GameObject(this.model.fakeObject, tilesetView);
            break;
        case "BGO":
            this.fakeObjectView = new View_GameObject(this.model.fakeObject, bgosetView);
            break;
        }

        
        this.levelView.draw();
        this.fakeObjectView.draw();
    }

}

module.exports.View_Editor = View_Editor;