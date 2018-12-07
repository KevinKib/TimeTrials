const View = require("./view").View;
const View_Level = require("./view_level").View_Level;
const View_GameObject = require("./view_gameobject").View_GameObject;
const TilesetViewManager = require("./tilesetviewmanager").TilesetViewManager;

const Editor_Button_Save = require("./editor/editor_button_save").Editor_Button_Save;

let self;

class View_Editor extends View {

    constructor(model) {
        super(model);
        this.levelView = new View_Level(this.model.level);

        this.components = false;
        self = this;
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

        if (!this.components) {
            // Save button
            this.save = createButton("Save as");
            this.save.class("btn btn-primary editor_button");
            this.save.position(0, 0);
            this.save.mousePressed(this.action_save);

            this.inp = createInput("Text");
            this.inp.class("input-group mb-3 input-group-prepend input-group-text editor_input");
            this.inp.position(60,60);
            this.inp.input(this.action_input);

            this.components = true;
        }
        
    }

    action_save() {
        self.model.save();
    }

    action_input() {

    }

}

module.exports.View_Editor = View_Editor;