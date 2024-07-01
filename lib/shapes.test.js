// packages const Circle, Triangle, Square, SVG
const { Circle, Triangle, Square } = require("../lib/shapes");
const SVG = require("../lib/svg");

// circle shape test
describe("Circle", () => {
    // test case
    test("Creates a new Circle obj this is Red", () => {
        // expected output
        const expected = `<circle cx="120" cy="105" r="80" style="stroke:purple;stroke-width:3" fill="red"/>`;
        // new instance of circle class
        const circle = new Circle();

        // set color of circle obj to red
        circle.setColor("red");
        // render circle obj to generate SVG circle element string
        const output = circle.render();

        // compare rendered output with expected string
        expect(output).toEqual(expected);
    });
    // Define a test case with a description "Creates a new circle object that is orange"
    test("Creates a new Circle object that is blue", () => {
        // Define the expected output
        const expected = `<circle cx="120" cy="105" r="80" style="stroke:purple;stroke-width:3" fill="blue"/>`;
        // Create a new instance of the circle class
        const circle = new Circle();

        // Set the color of the circle object to orange
        circle.setColor("blue");
        // Render the circle object to generate the SVG circle element string
        const output = circle.render();

        // Compare the rendered output with the expected string
        expect(output).toEqual(expected);
    });
});

// triangle shape test
describe("Triangle", () => {
    // test case
    test("Creates a new Triangle obj this is Green", () => {
        // expected output
        const expected = `<polygon points="120, 20 200, 200 40, 200" style="stroke:purple;stroke-width:3" fill="green"/>`;
        // new instance of triangle class
        const triangle = new Triangle();

        // set color of triangle obj to green
        triangle.setColor("green");
        // render triangle obj to generate SVG triangle element string
        const output = triangle.render();

        // compare rendered output with expected string
        expect(output).toEqual(expected);
    });
    // Define a test case with a description "Creates a new triangle object that is purple"
    test("Creates a new Triangle object that is purple", () => {
        // Define the expected output
        const expected = `<polygon points="120, 20 200, 200 40, 200" style="stroke:purple;stroke-width:3" fill="purple"/>`;
        // Create a new instance of the triangle class
        const triangle = new Triangle();

        // Set the color of the triangle object to purple
        triangle.setColor("purple");
        // Render the triangle object to generate the SVG triangle element string
        const output = triangle.render();

        // Compare the rendered output with the expected string
        expect(output).toEqual(expected);
    });
});

// square shape test
describe("Square", () => {
    // test case
    test("Creates a new Square obj this is Blue", () => {
        // expected output
        const expected = `<rect width="200" height="200" x="20" y="20" style="stroke:purple;stroke-width:3" fill="blue"/>`;
        // new instance of square class
        const square = new Square();

        // set color of square obj to blue
        square.setColor("blue");
        // render square obj to generate SVG square element string
        const output = square.render();

        // compare rendered output with expected string
        expect(output).toEqual(expected);
    });
    // Define a test case with a description "Creates a new square object that is yellow"
    test("Creates a new Square object that is yellow", () => {
        // Define the expected output
        const expected = `<rect width="200" height="200" x="20" y="20" style="stroke:purple;stroke-width:3" fill="yellow"/>`;
        // Create a new instance of the square class
        const square = new Square();

        // Set the color of the square object to yellow
        square.setColor("yellow");
        // Render the square object to generate the SVG square element string
        const output = square.render();

        // Compare the rendered output with the expected string
        expect(output).toEqual(expected);
    });
});

// SVG test
describe("SVG", () => {
    // test case
    test("Creates a new SVG obj with a Circle and Text", () => {
        // expected output
        const expected = `<svg version="1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg"><circle cx="120" cy="105" r="80" style="stroke:purple;stroke-width:3" fill="red"/><text x="120" y="125" font-size="40" text-anchor="middle" fill="black">SVG</text></svg>`;
        // new instance of circle class
        const circle = new Circle();
        // set color of circle obj to red
        circle.setColor("red");
        // new instance of SVG class
        const svg = new SVG();
        // set shape of SVG object
        svg.setShape(circle);
        // set text of SVG object
        svg.setText("SVG", "black");
        // render SVG object to generate SVG element string
        const output = svg.render();
        // compare rendered output with expected string
        expect(output).toEqual(expected);
    });
    // Define a test case with a description "Creates a new SVG object with a triangle and text"
    test("Creates a new SVG object with a Triangle and Text", () => {
        // Define the expected output
        const expected = `<svg version="1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg"><polygon points="120, 20 200, 200 40, 200" style="stroke:purple;stroke-width:3" fill="green"/><text x="120" y="125" font-size="40" text-anchor="middle" fill="black">SVG</text></svg>`;
        // Create a new instance of the triangle class
        const triangle = new Triangle();
        // Set the color of the triangle object to green
        triangle.setColor("green");
        // Create a new instance of the SVG class
        const svg = new SVG();
        // Set the shape of the SVG object
        svg.setShape(triangle);
        // Set the text of the SVG object
        svg.setText("SVG", "black");
        // Render the SVG object to generate the SVG element string
        const output = svg.render();
        // Compare the rendered output with the expected string
        expect(output).toEqual(expected);
    });
});
