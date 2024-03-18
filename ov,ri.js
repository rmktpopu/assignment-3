class Shape {
    // Method Overloading
    public void draw() {
        System.out.println("Drawing a shape...");
    }

    public void draw(String color) {
        System.out.println("Drawing a shape with color: " + color);
    }

    // Method Overriding
    public void displayInfo() {
        System.out.println("This is a shape.");
    }
}

class Circle extends Shape {
    // Method Overriding
    @Override
    public void displayInfo() {
        System.out.println("This is a circle.");
    }
}

public class Main {
    public static void main(String[] args) {
        // Method Overloading demonstration
        Shape shape = new Shape();
        shape.draw(); // Calls draw() without parameters
        shape.draw("red"); // Calls draw() with a parameter

        // Method Overriding demonstration
        Shape circle = new Circle();
        circle.displayInfo(); // Calls overridden method displayInfo() in Circle class
    }
}
