class Button_Back {

    constructor(timetrial) {
        this.timetrial = timetrial;
    }

    onAction() {
        this.timetrial.back();
    }

}

module.exports.Button_Save = Button_Back;