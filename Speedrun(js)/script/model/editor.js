class Editor {

    constructor() {
        this.currentBlockId = 0;
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