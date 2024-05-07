import java.util.Scanner;

public class May3_Methods {

    public static void main(String[] args) {
        // hoisting
//        where to declare an identifier -> variable/method
//        variables: noun
//        methods: verb

        String name = "Duy";
        System.out.println(name);

//        name.toUpperCase();

//        try-catch
//        string split

        hi();

        int x = 1;
        int y = 5;

        System.out.println("Before swap:");
        System.out.println("x = " + x); // 1
        System.out.println("y = " + y); // 5

        // swap
//        int temp = x;
//        x = y;
//        y = temp;

        swap(x, y);

        System.out.println("\nOutside swap method: ");
        System.out.println("x = " + x); // 5
        System.out.println("y = " + y); // 1

        String progName = "Python";
        rename(progName);
        System.out.println(progName);

        // pass by reference
//        Cat cat = new Cat("doraemon");
//        rename(cat);
//        System.out.println(cat.name); // nobita
//
//        name = "nobita";

        // method nested inside method
//        void hello() {
//
//        }

//        Scanner

//        enter your birthday (any format): 26/02/1995
//        int numerology = calculateNumerology(dob);
//        Your numerology is 7



    }

    public static void hi() {
        System.out.println("hi!");
    }

    public static void swap(int x, int y) {
        hi();
        int temp = x;
        x = y;
        y = temp;

        System.out.println("\nInside swap method: ");
        System.out.println("x = " + x); // 5
        System.out.println("y = " + y); // 1
    }

    public static void rename(String name) {
        name = "Java";
    }
//
//    TODO:
//    - pass by reference vs pass by value
//    - method inside method
//    - access modifiers
//    - class methods/attributes

    // pass by value: khi pass 1 primitive type vao 1 method, value se duoc copy vao 1 vi tri khac
//    pass by reference: khi pass 1 object, modify object == modify original value


//    1. than so hoc
//    2. fib

//    mm/dd/yy || dd/mm/yy || yy/mm/dd
//    calculateNumerology(String dob) -> int myNumerology 1->9

//    try {
//        convert char to int
//
//    } catch (Exception e) {
//        skip if error
//    }
//
//    int[]  { 2, 6, 0, 2 ,9 ,5 }
//
//    while (length digit > 1) {
//        trim until length = 1
//    }
//
//    (int) "7" -> 7
//    (int) "/" -> error
}
