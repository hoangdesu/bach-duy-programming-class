package May25_OOP;

public class Car {


//    class properties / fields => using static keyword
    public static String className = "this is a car class";

    // object properties: shared among all objects
    String name = "this is a car object";

    public String brand;
    public double price;

    // constructor: public method to build an object using diff inputs
    public Car(String brand, double price) {
        this.brand = brand;
        this.price = price;
        System.out.println("Created car name " + brand + " price = " + price);
    }

//    class methods
    public void drive() {
        System.out.println(this.brand + " go vrummm 💨");
    }

    public void speeding(double speed) {
        System.out.println(this.brand + " going at " + speed + " km/h");
    }

}
