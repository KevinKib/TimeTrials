const Component_Button = require("../component_button").Component_Button;

let self;

class Editor_Button_Save extends Component_Button {

    constructor(model, editorView) {
        super(model, editorView, "editor_button");

        // Called so we don't lose sight of the object when calling mousePressed()
        self = this;
    }

    onAction() {
        self.model.onAction();
    }
}

module.exports.Editor_Button_Save = Editor_Button_Save;