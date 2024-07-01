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
        return `<circle cx="150" cy="100" r="80" fill="${this.color}"/>`;
    }
};

// Triangle class extends Shape class
class Triangle extends Shape {
    // render method for Triangle class
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}"/>`;
    }
};

// Square class extends Shape class
class Square extends Shape {
    // render method for Square class
    render() {
        return `<rect x="90" y="40" width="120" height="120" fill="${this.color}"/>`;
    }
};

// export Circle, Triangle, and Square classes
module.exports = { Circle, Triangle, Square };
