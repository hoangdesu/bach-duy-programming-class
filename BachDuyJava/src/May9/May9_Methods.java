package May9;

public class May9_Methods {
    // class properties

    // global scope
    static int num = 2;

    public static void main(String[] args) {
//        local scope
//        int num = 2;

        add1();
        System.out.println(num);

//        sayHi();
        May9_OtherMethods.sayHi();
        May9_OtherMethods.hello();

        May9_OtherMethods.today = "Dec 31";
        System.out.println(May9_OtherMethods.today);

//        System.out.println(May9_OtherMethods.password);

        May9.May9_OtherMethods.exposePassword();
//        May9.May9_OtherMethods.password = "hacked";

//        getters / setters
    }

    public static void sayHi() {
        System.out.println("Hi from main");
    }


    public static void add1() {
        num = num + 1;
    }



    //    pass by reference vs pass by value

//    static keyword: only one instance of a static member exists

//    access modifiers:
//    - public: mark to be publicly visible to all other classes
//    - private: mark to be only visible within THE SAME CLASS
//    - protected: mark to be visible within the SAME PACKAGE (folder) (even in a different class)

}
