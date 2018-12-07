const View = require("./view").View;

const Component_Button = require("./component_button").Component_Button;
const Menu_Title = require("./menu/menu_title").Menu_Title;

let self;

class View_menu extends View {

    constructor(model) {
        super(model);
        this.components = false;

        self = this;
    }

    draw() {
        
        if (!this.components) {
            this.title = new Menu_Title();
            this.title.create("TimeTrials", 90);

            // Play button
            this.play = createButton("Play");
            this.play.class("btn btn-primary menu_button");
            this.play.position(0, 210);
            this.play.center("horizontal");
            this.play.mousePressed(this.action_play);

            // Create button
            this.editor = createButton("Create");
            this.editor.class("btn btn-primary menu_button");
            this.editor.position(0, 310);
            this.editor.center("horizontal");
            this.editor.mousePressed(this.action_create);

            this.components = true;
            console.log(this);
        }
    }

    action_play() {
        console.log(self);
        self.model.toInstance("TimeTrial");
        self.removeAll();
    }

    action_create() {
        self.model.toInstance("Editor");
        self.removeAll();
    }

    removeAll() {
        this.title.remove();
        this.play.remove();
        this.editor.remove();
        this.components = false;
    }

}



module.exports.View_menu = View_menu;