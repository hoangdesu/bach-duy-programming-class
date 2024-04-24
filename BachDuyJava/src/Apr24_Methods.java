import UtilsPackage.UtilMethods;

import java.util.Arrays;

public class Apr24_Methods {

    //    1 input, no output
    public static void introduce(String name) {
        System.out.println("Hi my name is " + name);
    }

    public static void main(String[] args) {
//        2. call, execute, invoke, run a method

//        args:
        System.out.println("Args: " + Arrays.toString(args));

        if (args[1].equals("on")) {
            System.out.println(">> DEV MODE IS ON");
        }

        sayHello();

        introduce("Duy");

        String myName = "Brian";
        introduce(myName);

        longIntroduce("Hoang", 29, "Vietnam");

        int sum = add(1, 2);
        System.out.println(sum * 2);

//        String name = sc.nextLine();

        int[] myNums = createNumberArray(5, 10);

        System.out.println(Arrays.toString(myNums));

//        int a, b, c, d;
//        d = 5;
//
//        System.out.println(d);

//        using method from another file

        Apr24_Utils.helloFromAnotherFile();

        UtilMethods.laugh();

//        hoisting: methods are hoisted

//        TODO: public vs private scopes
    }

//    methods == functions: ham
//    method: function inside a class

//    block of code that performs a specific task

//    1. define a method

//    no input, no output
    public static void sayHello() {
        String name = "Duy";
        System.out.println("Hello " + name);
    }



//    multiple inputs, no output

/**
 * this method takes in 3 parameters and returns nothing :D
 *
 * @param name: your name plz
 * @param age: when u were born
 * @param country: where?
 * @return nothing :D
 * **/
    public static void longIntroduce(String name, int age, String country) {
        System.out.printf("My name is %s, I am %d years old and I came from %s\n", name, age, country);
    }

//    no input, 1 output
//    method signature
//    access-modifier static return-type method-name(param-list) {}

    public static int add(int a, int b) {
        int total = a + b;
        return total;
    }

//    multiple inputs, 1 output
    public static int[] createNumberArray(int from, int to) {

//        return {1, 2, 3};

        int len = to - from + 1;

        int[] numbers = new int[len];

        int counter = from;
        for (int i = 0; i <numbers.length; i++) {
            numbers[i] = counter;
            counter++;
        }

        return numbers;
    }

//    return 1, 2
//
//    int a, b = getNums()

}
