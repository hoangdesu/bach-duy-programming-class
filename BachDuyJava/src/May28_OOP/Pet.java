package May28_OOP;

public class Pet extends Animal {
    public Pet(String name) {
        super(name); // invoke parent's constructor (based on the signature)
    }

    // polymorphism
    @Override
    public void drink() {
        System.out.println(this.name + " sipping water");
    }
}
