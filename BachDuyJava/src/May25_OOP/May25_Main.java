package May25_OOP;

import java.util.Scanner;

public class May25_Main {
    public static void main(String[] args) {
//        Scanner;
        String name = "Duy";
        String name2 = "Hoang";

        Integer age = 20;
//        age.
//        name2.

//        creating an object instance from a class
        Car mercedes = new Car("Mercedes", 3.0);
        Car mclaren = new Car("McLaren", 10.0);

        System.out.println(Car.className);

//        System.out.println(mercedes.name);
//        System.out.println(mclaren.name);

        System.out.println(mercedes.brand);
        System.out.println(mercedes.price);

        System.out.println(mclaren.brand);
        System.out.println(mclaren.price);

        mclaren.drive();
        mercedes.drive();

        mercedes.speeding(80);
        mclaren.speeding(120);

        mercedes.price = 4.0;
        System.out.println("New price: " + mercedes.price);


    }
}
