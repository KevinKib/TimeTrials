const View = require("./view").View;
const View_GameObject = require("./view_gameobject").View_GameObject;
const View_Level = require("./view_level").View_Level;

class View_Editor extends View {

    constructor(model) {
        super(model);
        this.fakeObjectView = new View_GameObject(this.model.fakeObject);
        this.levelView = new View_Level(this.model.level);
    }

    draw() {
        //this.fakeObjectView.draw();
        this.levelView.draw();
    }

}

module.exports.View_Editor = View_Editor;