module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "globals": {
        "image": false,
        "module": false,
        "require": false,
        "createCanvas": false,
        "frameRate": false,
        "keyIsDown": false,
        "abs": false,
        "loadImage": false,
        "strokeWeight": false,
        "fill": false,
        "ellipse": false,
        "textSize": false,
        "text": false,
        "mouseIsPressed": false,
        "mouseButton": false,
        "LEFT": false,
        "RIGHT": false,
        "CENTER": false
    },
    "rules": {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "windows"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};