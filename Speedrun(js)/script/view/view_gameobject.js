const View = require("./view").View;

class View_GameObject extends View {

    constructor(model, tilesetView) {
        super(model);
        this.tilesetView = tilesetView;
    }

    draw() {
        let x = this.model.pos.x;
        let y = this.model.pos.y;
        let size = this.model.size;
        let tuple = this.model.tileset.calculate(this.model.id);
        let xStart = tuple.xStart;
        let yStart = tuple.yStart;
        
        image(this.tilesetView.image, x, y, size.x, size.y, xStart, yStart, size.x, size.y);
    }

}

module.exports.View_GameObject = View_GameObject;