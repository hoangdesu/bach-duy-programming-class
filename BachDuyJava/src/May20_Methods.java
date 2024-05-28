public class May20_Methods {
    public static void main(String[] args) {
//        introduce("Duy");

//        String name = "Duy";

//        String name = "Bach Duy"; // cannot have duplicated identifiers for variables

//        introduce("Duy", "Taiwan");

//        introduce(20);

//        addFirst(el)

//        hi();

//        factorial(3); 3 * 2 * 1 = 6 // for -> iterative approach (loops)
//        recursiveFactorial(3)

//        while (true) {
//            System.out.println("hi");
//        }

//        countUp(1);
    }

    public static void introduce(String name) {
        System.out.println("Hi my name is " + name);
    }

//    method overloading
    public static void introduce(String name, String country) {
        System.out.println("My name is " + name + " and I am from " + country);
    }

    public static void introduce(int age) {
        System.out.println("Hi I am " + age + " years old");
    }

//    addFirst(el) {
//        add(0, el)
//    }

//    Recursive function
//    public static void hi() {
//        System.out.println("hi!!");
//        hi(); // -> causing stack overflow error
//    }

    public static void countUp(int i) {
        System.out.println(i);
//        base case: stop the recursion
        if (i == 10) {
            return;
        }
        countUp(i + 1);
    }

    // TODO: fib + factorial using recursion
//    HW: factorial using 2 approaches
}
