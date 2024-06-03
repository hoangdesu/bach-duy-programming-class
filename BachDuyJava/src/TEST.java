public class TEST {
    public static void main(String[] args) {
        print("Hi!");
        print(5);
    }

    // generics
    public static <T> void print(T val) {
        System.out.println(val);
    }
}
