package May28_OOP;

public class Animal extends Species {
    public String name;
    @Override
    public void eat() {
        System.out.println("animal eating");
    }

    @Override
    public void drink() {
        System.out.println("sippp");
    }

//    2 ways to build up an animal
    public Animal() {}

    public Animal(String name) {
        this.name = name;
    }

}
