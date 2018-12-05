const View = require("../view").View;

class Menu_Title extends View {

    constructor() {
        super(null);
    }

    create(name, y) {
        this.__component = createElement("h1", name);
        this.__component.position(0, y);
        this.__component.center("horizontal");
    }

    remove() {
        this.__component.remove();
    }

    draw() {
        
    }

}

module.exports.Menu_Title = Menu_Title;