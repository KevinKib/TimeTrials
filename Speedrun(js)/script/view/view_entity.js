const View = require("./view").View;

class View_Entity extends View {

    constructor(model) {
        super(model);
    }

    draw() {
        strokeWeight(2);
        fill(this.model.color.r,this.model.color.g,this.model.color.b);
        ellipse(this.model.pos.x, this.model.pos.y-this.model.size.y/2, this.model.size.x, this.model.size.y);
    }

}

module.exports.View_Entity = View_Entity;