const View = require("./view").View;

const Menu_Button = require("./menu/menu_button").Menu_Button;
const Menu_Button_Play = require("./menu/menu_button_play").Menu_Button_Play;
const Menu_Button_Editor = require("./menu/menu_button_editor").Menu_Button_Editor;
const Menu_Title = require("./menu/menu_title").Menu_Title;

class View_menu extends View {

    constructor(model) {
        super(model);
        this.components = false;
    }

    draw() {
        
        if (!this.components) {
            this.title = new Menu_Title();
            this.title.create("TimeTrials", 90);
            this.play = new Menu_Button_Play(this.model.play, this);
            this.play.create("Play", 210, "blue");
            this.editor = new Menu_Button_Editor(this.model.editor, this);
            this.editor.create("Create", 310, "red");
            this.components = true;
        }

    }

    removeAll() {
        this.title.remove();
        this.play.remove();
        this.editor.remove();
        this.components = false;
    }

}

module.exports.View_menu = View_menu;