class Timer {

    constructor(framerate) {
        this.framerate = framerate;
        this.currentFrame = 0;
        this.millisecond = 0;
        this.second = 0;
        this.minute = 0;
        this.hour = 0;
    }

    // Manages frames and milliseconds
    frame() {
        this.currentFrame++;
        if (this.currentFrame >= this.framerate) {
            this.currentFrame = 0;
            this.addSecond();
        }

        this.millisecond = this.currentFrame / this.framerate * 1000;
    }

    // Manages seconds
    addSecond() {
        this.second++;
        if (this.second >= 60) {
            this.second = 0;
            this.addMinute();
        }
    }

    // Manages minutes
    addMinute() {
        this.minute++;
        if (this.minute >= 60) {
            this.minute = 0;
            this.addHour();
        }
    }

    // Manages hours
    addHour() {
        this.hour++;
    }

}

module.exports.Timer = Timer;