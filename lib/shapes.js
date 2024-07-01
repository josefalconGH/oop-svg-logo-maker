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
        return `<circle cx="150" cy="150" r="100" fill="${this.color}"/>`;
    }
};

// Triangle class extends Shape class
class Triangle extends Shape {
    // render method for Triangle class
    render() {
        return `<polygon points="150, 50 100, 150 200, 150" fill="${this.color}"/>`;
    }
};

// Square class extends Shape class
class Square extends Shape {
    // render method for Square class
    render() {
        return `<rect x="100" y="100" width="100" height="100" fill="${this.color}"/>`;
    }
};

// export Circle, Triangle, and Square classes
module.exports = { Circle, Triangle, Square };
