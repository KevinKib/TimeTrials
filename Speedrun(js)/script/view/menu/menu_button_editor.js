const Menu_Button = require("./menu_button").Menu_Button;

let self;

class Menu_Button_Editor extends Menu_Button {

    constructor(model, menuView) {
        super(model, menuView);

        // Called so we don't lose sight of the object when calling mousePressed()
        self = this;
    }

    onAction() {
        self.menuView.removeAll();
        self.model.onAction();
    }

}

module.exports.Menu_Button_Editor = Menu_Button_Editor;