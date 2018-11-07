class Level {

    constructor(name, tileset, bgoset) {
        this.id = 0; // unique
        this.name = name;
        this.groundFriction = 0.8;
        this.airFriction = 0.97;
        this.gravity = 0.45;

        this.tileset = tileset;
        this.bgoset = bgoset;

        this.entityList = new Array();
        this.blockList = new Array();
        this.bgoList = new Array();

        this.createBlocks();
        this.createBGOs();
    }

    createBlocks() {
        // Abstract
    }

    createBGOs() {
        // Abstract
    }

    addBlock(block) {
        this.blockList.push(block);
    }

    addBGO(bgo) {
        this.bgoList.push(bgo);
    }


    loop() {
        let self = this;
        this.entityList.forEach(function(entity) {
            entity.loop();
            self.collision(entity);
            self.applyFriction(entity);
            self.applyGravity(entity);
            entity.updatePosition();
            
            //self.failSafe(entity);
        });
    }

    applyFriction(entity) {
        if (!entity.isMoving) {
            if (entity.onGround) {
                entity.speed.x *= this.groundFriction;
            }
            else {
                entity.speed.x *= this.airFriction;
            }
        }
    }

    applyGravity(entity) {

        if (!entity.onGround) {
            entity.speed.y += this.gravity;
        }
        
    }

    collision(entity) {

        let onGround = false;

        this.blockList.forEach(function(block) {

            if (block.collision) {
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
                
    
                if (under && inHorizontalRange && !entity.isJumping) {
                    entity.speed.y = 0;
                    entity.pos.y = block.pos.y;
                    onGround = true;
                }
    
                if (above && inHorizontalRange) {
                    entity.speed.y = 0;
                    entity.pos.y = block.pos.y + block.size.y*2;
                }
    
                if (onLeft && inVerticalRange) {
                    entity.speed.x = 0;
                    entity.pos.x = block.pos.x - entity.size.x/2;
                }
    
                if (onRight && inVerticalRange) {
                    entity.speed.x = 0;
                    entity.pos.x = block.pos.x + entity.size.x/2 + block.size.x;
                }
            }
        });

        entity.onGround = onGround;

    }

    failSafe(entity) {
        if (entity.pos.y > 480-64) {
            entity.speed.y = 0;
            entity.pos.y = 480-64;
            entity.onGround = true;
        }
    }

    
}

module.exports.Level = Level;