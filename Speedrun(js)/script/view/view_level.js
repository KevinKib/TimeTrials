const View = require("./view").View;
const View_Tileset = require("./view_tileset").View_Tileset;
const View_GameObject = require("./view_gameobject").View_GameObject;
const SpriteManager = require("./spritemanager").SpriteManager;

class View_Level extends View {

    constructor(model) {
        super(model);
        this.spritesDefined = false;
        this.bgoViews = new Array();
        this.blockViews = new Array();
    }

    createBGOs() {
        let bgosetView = new View_Tileset(this.model.bgoset, SpriteManager.bgoset_grass);
        let self = this;
        this.model.bgoList.forEach(function(bgo) {
            self.bgoViews.push(new View_GameObject(bgo, bgosetView));
        });
    }

    createBlocks() {
        let tilesetView = new View_Tileset(this.model.tileset, SpriteManager.tileset_BlueGrass);
        let self = this;
        this.model.blockList.forEach(function(block) {
            self.blockViews.push(new View_GameObject(block, tilesetView));
        });
    }

    draw() {
        image(SpriteManager.background_sky, 0, 0);

        if (!this.spritesDefined) {
            this.createBGOs();
            this.createBlocks();
            this.spritesDefined = true;
        }
        this.drawBGOs();
        this.drawBlocks();
    }

    drawBGOs() {
        
        this.bgoViews.forEach(function(bgoView) {
            bgoView.draw();
        });

    }

    drawBlocks() {

        this.blockViews.forEach(function(blockView) {
            blockView.draw();
        });

    }

    displayInformation() {
        let entity = this.model.entityList[0];

        fill(0,0,0);
        strokeWeight(1);
        textSize(16);

        // variables
        let top = false;
        let bottom = false;
        let left = false;
        let right = false;

        let block = this.model.blockList[43];

        this.model.blockList.forEach(function(block) {
            let inHorizontalRange = (entity.pos.x >= block.pos.x) && (entity.pos.x < block.pos.x + block.size.x);
            let inVerticalRange   = (entity.pos.y > block.pos.y) && (entity.pos.y <= block.pos.y + block.size.y);
            
            let under = entity.pos.y + entity.speed.y >= block.pos.y
                        && entity.pos.y - entity.size.y + entity.speed.y < block.pos.y;
            let above = entity.pos.y - entity.size.y + entity.speed.y <= block.pos.y + block.size.x 
                        && entity.pos.y - entity.size.y + entity.speed.y >= block.pos.y;
            
            let onLeft  = entity.pos.x + (entity.size.x/2) + entity.speed.x >= block.pos.x
                        && entity.pos.x + (entity.size.x/2) + entity.speed.x <= block.pos.x + block.size.x;
            let onRight = entity.pos.x - (entity.size.x/2) + entity.speed.x <= block.pos.x + block.size.x
                        && entity.pos.x - (entity.size.x/2) + entity.speed.x >= block.pos.x;

            top     = top||(under&&inHorizontalRange&&!entity.isJumping);
            bottom  = bottom||(above&&inHorizontalRange);
            left    = left||(onLeft&&inVerticalRange);
            right   = right||(onRight&&inVerticalRange);
        });


        text("cury : "+entity.pos.y, 10, 30);
        text("by  : "+block.pos.y, 10, 50);
        text("top: "+(top), 10, 70);
        text("bottom: "+(bottom), 10, 90);
        text("left: "+(left), 10, 110);
        text("right: "+(right), 10, 130);
    }

}

module.exports.View_Level = View_Level;