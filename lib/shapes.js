// constructor object for Shape class
class Shape {
  constructor() {
    this.color = "";
  }
  setColor(color) {
    this.color = color;
  }
};

// Circle class extends Shape class
class Circle extends Shape {
    // render method for Circle class
    render() {
        return `<circle cx="120" cy="105" r="80" style="stroke:purple;stroke-width:3" fill="${this.color}"/>`;
    }
};

// Triangle class extends Shape class
class Triangle extends Shape {
    // render method for Triangle class
    render() {
        return `<polygon points="120, 20 200, 200 40, 200" style="stroke:purple;stroke-width:3" fill="${this.color}"/>`;
    }
};

// Square class extends Shape class
class Square extends Shape {
    // render method for Square class
    render() {
        return `<rect width="200" height="200" x="20" y="20" style="stroke:purple;stroke-width:3" fill="${this.color}"/>`;
    }
};

// export Circle, Triangle, and Square classes
module.exports = { Circle, Triangle, Square };
