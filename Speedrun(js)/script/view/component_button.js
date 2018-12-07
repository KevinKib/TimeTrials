const View = require("./view").View;

let self;

class Component_Button extends View {

    constructor(model, menuView, css) {
        super(model);
        this.menuView = menuView;
        this.css = css;
    }

    create(name, y) {

        this.__component = createButton(name);
        this.__component.class("btn btn-primary "+this.css);
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

module.exports.Component_Button = Component_Button;