class Button {

    constructor(m, i) {
        this.menu = m;
        this.instancename = i;
    }

    onAction() {
        this.menu.toInstance(this.instancename);
    }

}

module.exports.Button = Button;