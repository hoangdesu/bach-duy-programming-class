package May28_OOP;

public class Truck implements Transportation {
    @Override
    public void deliver() {
        System.out.println("deliver by land");
    }

    @Override
    public void drive() {
        //
    }
}
