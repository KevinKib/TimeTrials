const View = require("../view").View;

let self;

class Menu_Button extends View {

    constructor(model, menuView) {
        super(model);
        this.menuView = menuView;
    }

    create(name, y, color) {

        this.__component = createButton(name);
        this.__component.class("btn btn-primary menu_button");
        this.__component.position(0, y);
        this.__component.center("horizontal");
        this.__component.mousePressed(this.onAction);
    }

    remove() {
        this.__component.remove();
    }

    draw() {
        
    }

}

module.exports.Menu_Button = Menu_Button;