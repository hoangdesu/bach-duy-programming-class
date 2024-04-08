public class Apr8_Palindrome {
    public static void main(String[] args) {
//        for (int i = 0; i < 10; i++) {
//            if (i % 2 == 0) {
//                System.out.println(i);
//            } else {
//                continue;
//            }
//
////            i = 10;
////            System.out.println(i);
//        }

//        int i = 5;
//        while (i < 10) {
//            System.out.println(i);
//            i = 9;
//        }

//        Scanner sc = new Scanner(System.in);
//        String text = sc.nextLine();

        String text = "$ra!DaR@";

        String name = "";

        System.out.println(name);

        int headPtr = 0;
        int tailPtr = text.length() - 1;

        text = text.toLowerCase();
        boolean isPalindrome = true;

        while (headPtr <= tailPtr) {
            char headChar = (char) text.charAt(headPtr);
            char tailChar = (char) text.charAt(tailPtr);

            // convert all chars to lower
            // ...

            boolean isHeadValid = headChar >= 97 && headChar <= 122;
            boolean isTailValid = tailChar >= 97 && tailChar <= 122;

//            check if head or tail chars are invalid -> skip to next char
            if (!isHeadValid) {
                headPtr++;
                continue;
            } else if (!isTailValid) {
                tailPtr--;
                continue;
            }

            // if everything is in valid ranges, perform check between head vs tail chars
            if (headChar != tailChar) {
                isPalindrome = false;
                break;
            } else {
                headPtr++;
                tailPtr--;
                System.out.printf("head = %c (%d), tail = %c (%d) %n", headChar, headPtr, tailChar, tailPtr);
            }
        }

        if (isPalindrome) {
            System.out.println("palindrome");
        } else {
            System.out.println("not");
        }
    }
}
