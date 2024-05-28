import java.util.ArrayList;

public class May19_Methods {
    public static void main(String[] args) {
        ArrayList<Integer> numbers = new ArrayList<>();

        for (int i = 1; i <= 10; i++) {
            numbers.add(i);
        }

        System.out.println(numbers);

        for (int i = 0; i < numbers.size(); i++) {
            System.out.println(numbers.get(i) + ": " + numbers.size());
            numbers.remove(i);
            i--;
            System.out.println(numbers);
        }
    }
}
