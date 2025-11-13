interface Shape {
    area(): number;
  }
  
  class Circle implements Shape {
    constructor(private radius: number) {}
    area(): number {
      return Math.PI * this.radius ** 2;
    }
  }
  
  class Rectangle implements Shape {
    constructor(private width: number, private height: number) {}
    area(): number {
      return this.width * this.height;
    }
  }
  
  class AreaCalculator {
    totalArea(shapes: Shape[]): number {
      return shapes.reduce((total, shape) => total + shape.area(), 0);
    }
  }
  
  const shapes: Shape[] = [
    new Circle(5),
    new Rectangle(10, 20),
  ];
  
  const calculator = new AreaCalculator();
  console.log('Área total:', calculator.totalArea(shapes));
  