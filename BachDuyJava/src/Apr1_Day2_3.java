import java.util.Scanner;

public class Apr1_Day2_3 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
//        compount operator: shorthand
//        int count = 1;
//        count++;
//        ++count;

//        count += 10;
////        count = count + 10;
//        count *= 2;
//        System.out.println(count);
//
//        int a = 123_456_789;
//        System.out.println(a);

//        Ex:
//        Enter a year: 2024
//        2024 is a leap year
//
//        Enter a year: 2023
//        2023 is not a leap year

//        System.out.print("Enter a year: ");
//        int year = sc.nextInt();
//
//        if (year % 100 == 0 && year % 400 == 0) {
//            System.out.println(year + " is a leap year");
//        } else if (year % 4 == 0) {
//            if (year % 100 == 0 && year % 400 != 0) {
//                System.out.println(year + " is NOT a leap year");
//            } else {
//                System.out.println(year + " is a leap year");
//            }
//        } else {
//            System.out.println(year + " is NOT a leap year");
//        }

//        System.out.println(10/0);

//        double 10/3 -> 3.33333333335

//        10/4 = 2.5

        // Compound interest calculator



//        Enter your amount you want to deposit: 100
//        Enter how many years you want to invest: 10

//        Year        Starting        Interest        Accumulated
//        1           100             5               105
//        2           105             5.25            110.25
//        ...
//        10

//        \ backward slash: escape character
//                \n: new line character
//                \": double quote
//        / forward slash

//        "Year"
//        System.out.println(" \"Year\" ");
//        System.out.println("\\^o^/");

//        \t: tab = 4 spaces
//        System.out.println("Year\tStarting\tInterest\tAccumulated");
//
//        System.out.printf("%-5d", 1);

        final double annualInterestRate = 5.0; // 5%/year

//        Principal Amount
        System.out.print("Enter starting amount: ");
        double startingAmount = sc.nextDouble();
        double savedStartingAmount = startingAmount;

        System.out.print("How many years: ");
        int years = sc.nextInt();

        // headings
        System.out.printf("%-10s", "Year");
        System.out.printf("%-15s", "Starting");
        System.out.printf("%-15s", "Earned");
        System.out.printf("%-15s\n", "Total");

        for (int i = 0; i < 50; i++) {
            System.out.print("-");
        }

        System.out.println();

        for (int year = 1; year <= years; year++) {
            // calculate for values
            double earned = startingAmount * (annualInterestRate/100);
            double total = startingAmount + earned;


            // display values in columns
            System.out.printf("%-10d", year);
            System.out.printf("%-15.2f", startingAmount);
            System.out.printf("%-15.2f", earned);
            System.out.printf("%-15.2f", total);
            System.out.println();

            startingAmount = total;
        }

        for (int i = 0; i < 50; i++) {
            System.out.print("-");
        }

        double gain = startingAmount - savedStartingAmount;
        System.out.printf("\n> You will earn $%.2f after %d years.\n", gain, years);
    }
}
