// constructor object for SVG class
class SVG {
    // constructor method for SVG class
    constructor() {
        this.text = "";
        this.shape = "";
    }

    // render method for SVG class
    render() {
        return `<svg version="1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg">${this.shape}${this.text}</svg>`;
    }

    // setText method for SVG class
    setText(text, color) {
        // validate text input
        if (text.length > 3) {
            throw new Error("(1-3 characters MAX)");
        }
        // set text attribute
        this.text = `<text x="150" y="150" font-family="Verdana" font-size="35" text-anchor="middle" fill="${color}">${text}</text>`;
    }

    // setShape method for SVG class
    setShape(shape) {
        this.shape = shape.render();
    }
};

// export SVG class
module.exports = SVG;
