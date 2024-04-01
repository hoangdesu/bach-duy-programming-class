import java.util.Scanner;

public class Apr1_Day2_3 {
    public static void main(String[] args) {
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

//        Scanner sc = new Scanner(System.in);
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

        final double interestRate = 5.0; // 5%

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

        // headings
        System.out.printf("%-10s", "Year");
        System.out.printf("%-12s\n", "Interest");

        for (int year = 1; year <= 5; year++) {

            System.out.printf("%-10d%-12d", year, year * 3);
            System.out.printf("%-10d", year * 20);
            System.out.println();
        }



    }
}
