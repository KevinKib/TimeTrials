const GameMode = require("./gamemode").GameMode;

class Editor extends GameMode {

    constructor() {
        super();
        this.currentBlock = 0;
        this.currentTileset = 0;
    }

    input() {

        if (mouseIsPressed) {
            switch(mouseButton) {
            
            case LEFT:
                this.place();
                break;
            case RIGHT:
                this.pick();
                break;
            case CENTER:
                this.suppress();
                break;
            }
        }

    }

    place() {

    }
    
    pick() {

    }

    suppress() {

    }

    exit() {

    }

    save() {

    }

    

}

module.exports.Editor = Editor;