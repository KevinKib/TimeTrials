const View = require("./view").View;
const View_Level = require("./view_level").View_Level;
const View_Entity = require("./view_entity").View_Entity;

const Component_Button = require("./component_button").Component_Button;

let self;

class View_TimeTrial extends View {

    constructor(model) {
        super(model);
        self = this;

        this.playerView = new View_Entity(this.model.player);
        this.levelView = new View_Level(this.model.level);
        this.save;

        this.componentsCreated = false;
    }

    draw() {
        this.levelView.draw();
        this.playerView.draw();

        if (!this.componentsCreated) {
            this.button = new Component_Button("Exit", 0, 0);

            this.save = createButton("Back");
            this.save.class("btn btn-primary editor_button");
            this.save.position(0, 0);
            this.save.mousePressed(this.action_back);

            this.componentsCreated = true;
        }

    }

    action_back() {
        self.model.back();
    }

}

module.exports.View_TimeTrial = View_TimeTrial;