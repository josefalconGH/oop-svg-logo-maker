// packages const inquirer, SVG, Circle, Triangle, Square, writeFile
const inquirer = require("inquirer");
const SVG = require("./lib/svg");
const { Circle, Triangle, Square } = require("./lib/shapes");
const { writeFile } = require("fs/promises");

// user prompt to generate SVG file
const generateSVG = () => {
    inquirer.prompt([
        {
            type: "list",
            name: "shape",
            message: "What shape would you like in your svg?",
            choices: ["Circle", "Triangle", "Square"]
        },
        {
            type: "input",
            name: "shapeColor",
            message: "What color would you like your shape to be?"
        },
        {
            type: "input",
            name: "text",
            message: "What text would you like to add to your svg logo? (1-3 characters MAX)"
        },
        {
            type: "input",
            name: "textColor",
            message: "What color would you like your text to be?"
        }
    ])
        // promise to generate SVG file
        .then((res) => {
            console.log(res); // log user response

            let shape; // shape variable

            // switch statement to determine shape
            switch (res.shape) {
            case "Circle":
            shape = new Circle(res.shapeColor);
            break;
            case "Triangle":
            shape = new Triangle(res.shapeColor);
            break;
            case "Square":
            shape = new Square(res.shapeColor);
            break;
            }

            shape.setColor(res.shapeColor); // set shape color

            const svg = new SVG(shape); // create new SVG object
            svg.setShape(shape); // set shape of SVG object
            svg.setText(res.text, res.textColor); // set text of SVG object

            return writeFile("./examples/logo.svg", svg.render()); // write SVG file
        }).then(() => {
            // console log a success message
            console.log("Successfully created your SVG logo!");
        })
};

// call generateSVG function
generateSVG();
