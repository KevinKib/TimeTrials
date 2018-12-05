const View = require("./view").View;
const View_Level = require("./view_level").View_Level;
const View_Entity = require("./view_entity").View_Entity;

class View_TimeTrial extends View {

    constructor(model) {
        super(model);
        this.playerView = new View_Entity(this.model.player);
        this.levelView = new View_Level(this.model.level);

        this.componentsCreated = false;
    }

    draw() {
        this.levelView.draw();
        this.playerView.draw();

        if (!this.componentsCreated) {
            this.button = createButton("submit");
            this.button.class("btn btn-primary");
            this.button.position(0, 0);
            this.componentsCreated = true;
        }
        

    }

}

module.exports.View_TimeTrial = View_TimeTrial;