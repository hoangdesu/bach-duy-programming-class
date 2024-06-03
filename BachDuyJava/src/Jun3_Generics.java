public class Jun3_Generics {
    public static void main(String[] args) {

        System.out.println("this is a string");
        System.out.println(123);
        System.out.println(123.456);
        System.out.println();

        print(123);
        print("hehe");
        print("haha" + 123);

        String blablabaaskdjahskdjhsakdjhl = "";
        System.out.println(bla);

        // TODOS:
//        1. generics
//        2. hashmap<K, V>
//        3. GUI
    }

//    Generics
    public static <T> void print(T value) {
        System.out.println(value);
    }


}
