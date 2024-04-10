import java.util.InputMismatchException;
import java.util.Scanner;

public class Apr10_SwitchCase {
    public static void main(String[] args) {
//        String name = "python";
//
//        switch (name) {
//            case "java":
//                System.out.println("java");
//                 break;
//            case "python":
//                System.out.println("python");
//                break;
//            case "go":
//                System.out.println("go");
//                break;
//        }
//        .equals()

        Scanner sc = new Scanner(System.in);

//        String firstName = sc.next(); // only extract from first index to whitespace char
//        String lastName = sc.next();
//
//
//        System.out.println("firstName: " + firstName);
//        System.out.println("lastName: " + lastName);

//        Double.valueOf(sc.nextLine())

        System.out.print("Enter a integer: ");
        // Integer.parseInt(sc.nextLine());

//        input validation => if ok, then perform casting

//        int num = sc.nextInt();
//
//        System.out.println(num);

        String userInputStr = sc.nextLine();

//        try - catch block

        try {
            int num = Integer.parseInt(userInputStr);
            System.out.println(num);
        } catch (NumberFormatException err) {
            System.out.println("Error casting from str to int: " + err.getLocalizedMessage());
        }

//        validate data type

//        Exception:
//            - InputMismatchException
//            - RuntimeException
//            - NumberFormatException
//            - ...

        System.out.println("After casting user input from str to int");

    }


}
