package May28_OOP;

public abstract class Species {

    public static String className = "Species class";

    public void eat() {
        System.out.println("species eating");
    }

//    error
//    public abstract void drink() {
//        System.out.println("speci");
//    }

    // no definition, only an idea
    public abstract void drink();


    public static void getClassName() {
        System.out.println("Species class");
    }

}
