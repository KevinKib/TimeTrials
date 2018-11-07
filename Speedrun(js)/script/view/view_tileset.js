const View = require("./view").View;

class View_Tileset extends View {

    constructor(model, image) {
        super(model);
        this.image = image;
    }

}

module.exports.View_Tileset = View_Tileset;