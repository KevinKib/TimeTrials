const GameMode = require("../gamemode").GameMode;
const GameProperties = require("../../../gameproperties").GameProperties;
const Level_Empty = require("../../levels/level_empty").Level_Empty;
const PlacerFactory = require("./placerfactory").PlacerFactory;


class Editor extends GameMode {

    constructor() {
        super();
        this.level = new Level_Empty();
        this.level.name = "editor";
        this.currentTileset = this.level.tileset;
        this.currentBGOset = this.level.bgoset;
        // this.fakeObject
        this.keys = {
            UP: 38,
            DOWN: 40,
            LEFT: 37,
            RIGHT: 39,
            A: 65,
            B: 66
        };
        this.maxInputDelay = 10;
        this.inputDelay = 0;

        this.factory = new PlacerFactory(this);
        this.placer = this.factory.create("PlacerBlock");
    }

    onEachFrame() {
        this.fakeObject.pos.x = (GameProperties.floatToGrid(mouseX)-1)*GameProperties.blocksize();
        this.fakeObject.pos.y = (GameProperties.floatToGrid(mouseY)-1)*GameProperties.blocksize();
        this.input();
    }

    input() {

        if (this.inputDelay > 0) {
            this.inputDelay--;
        }
        else {
            if (mouseIsPressed) {
            
                switch(mouseButton) {
                
                case LEFT:
                    this.place();
                    break;
                case RIGHT:
                    this.suppress();
                    break;
                case CENTER:
                    this.pick();
                    break;

                }
            }
    
            if (keyIsDown(this.keys.UP)) {
                this.indexUp();
                this.resetInputDelay();
            }
            if (keyIsDown(this.keys.DOWN)) {
                this.indexDown();
                this.resetInputDelay();
            }
            if (keyIsDown(this.keys.A)) {
                this.save();
                this.resetInputDelay();
            }
            if (keyIsDown(this.keys.B)) {
                this.next();
                this.resetInputDelay();
            }
        }

    }

    resetInputDelay() {
        this.inputDelay = this.maxInputDelay;
    }

    place() {
        this.placer.place();
    }
    
    pick() {
        this.placer.pick();
    }

    suppress() {
        this.placer.suppress();
    }

    indexUp() {
        this.fakeObject.id++;
    }

    indexDown() {
        this.fakeObject.id--;
    }
    
    next() {
        this.placer = this.placer.next();
    }


    exit() {

    }

    switchGameObjectType() {
        
    }

    save() {
        this.level.serializer.save();
    }

    

}

module.exports.Editor = Editor;