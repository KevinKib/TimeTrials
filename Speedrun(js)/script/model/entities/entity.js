class Entity {

    constructor() {
        // Constant properties
        this.pos = {x: 100, y: 0};
        this.size = {x: 32, y: 32};
        this.maxSpeed = 9;
        this.jumpHeight = 10.5;
        this.gainSpeed = 1;
        this.isMoving = false;
        this.onGround = false;
        this.color = {
            r: 100,
            g: 255,
            b: 100
        };
        this.inputStorage = {
            LEFT: false,
            RIGHT: false,
            DOWN: false,
            UP: false
        };

        this.isJumping = false;

        // Variables
        this.speed = {x: 0, y: 0};
    }


    loop() {
        this.inputStorage = {
            LEFT: false,
            RIGHT: false,
            DOWN: false,
            UP: false
        };

        let isMoving = false;
        this.isJumping = false;

        this.input();

        if (this.inputStorage.LEFT) {
            this.updateSpeed(-this.gainSpeed);
            isMoving = true;
        }
        if (this.inputStorage.RIGHT) {
            this.updateSpeed(+this.gainSpeed);
            isMoving = true;
        }
        if (this.inputStorage.DOWN) {
            // lol
        }
        if (this.inputStorage.UP) {
            this.jump();
        }

        this.isMoving = isMoving;
    }

    input() {
        // Abstract
    }
    

    updateSpeed(gain) {
        this.speed.x += gain;

        // Cap speed
        if (abs(this.speed.x) > abs(this.maxSpeed)) {
            this.speed.x = this.maxSpeed * Math.sign(this.speed.x);
        }
    }

    jump() {
        if (this.onGround) {
            this.speed.y -= this.jumpHeight;
            this.isJumping = true;
        }
    }

    updatePosition() {
        this.pos.x += this.speed.x;
        this.pos.y += this.speed.y;
    }
}

module.exports.Entity = Entity;