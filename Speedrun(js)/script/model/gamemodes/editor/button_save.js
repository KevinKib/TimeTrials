class Button_Save {

    constructor(editor) {
        this.editor = editor;
    }

    onAction() {
        this.editor.save();
    }

}

module.exports.Button_Save = Button_Save;