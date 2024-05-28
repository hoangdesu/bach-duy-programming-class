package May28_OOP;

import java.util.Scanner;

public class Main_OOP {
    public static void main(String[] args) {
//    3. Abstraction
//        Species s = new Species(); // abstract classes cannot be used to create objects

        Hooman h1 = new Hooman();
        h1.eat();

        Animal animal = new Animal();
        animal.eat();
        animal.drink();

        Species.getClassName();
        System.out.println(Species.className);

        Animal.getClassName();

        // need to instantiate an object before we can call methods
        Scanner sc = new Scanner(System.in);
//        Scanner.nextLine();

        // can call directly from the Math class
//        Math.atan();

        System.out.println();


//        Transportation t = new Transportation();

        Truck t = new Truck();
        t.deliver();

        Animal wildAnimal = new Animal("Wild animal");

        System.out.println("I have a " + wildAnimal.name);


        Pet myPet = new Pet("My pet");
        System.out.println("This is " + myPet.name);

        myPet.drink();

    }
}
