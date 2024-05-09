package May9;

public class May9_OtherMethods {

    public static String today = "May 9";
    private static String password = "secret";

    public static void sayHi() {
        System.out.println("Hi from other class!");
    }

    protected static void hello() {
        System.out.println("Hello from other methods class");
        System.out.println(May9_Methods.num);
    }

    private static void printPassword() {
        System.out.println(password);
    }

    public static void exposePassword() {
        printPassword();
    }
}
