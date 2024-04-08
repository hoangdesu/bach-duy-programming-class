import java.util.Scanner;

public class Apr4_Palindrome {
    public static void main(String[] args) {
        // two pointers
//        String text = "radar";

        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a word to check palindrome: ");
        String text = sc.nextLine();

//        Lv 1: plain string, no special chars

        boolean isPalindrome = true;

        for (int i = 0; i < text.length()/2; i++) {
//            System.out.println(text.charAt(i));
            int headPointer = i; // 0
            int tailPointer = text.length() - (headPointer + 1); //  last index = length - 1

            char headChar = text.charAt(headPointer);
            char tailChar = text.charAt(tailPointer);

//            == != so sanh char

            if (headChar != tailChar) {
                isPalindrome = false;
                break;
            }

            System.out.println("" + headPointer + headChar + " : " + tailPointer + tailChar);
        }

        if (isPalindrome) {
            System.out.println(text + " is palindrome");
        } else {
            System.out.println(text + " is NOT palindrome");
        }


//        Lv 2: case-insensitive palindrome checker
        // OK

//        Lv 3: check palindrome, ignoring special characters
//        > 2 approaches
//        for vs while

//        loop thru each char:
//
//        if headChar && tailChar in range a-z:
//            if headChar != tailChair
//        else:
//            if headChar is special char:
//                move head to right 1 index

//        option 2: clean up string + 2 pointers
//
//        "Step not on pets" -> "stepnotonpets"


//        option 3: split & compare strings

//        s1 = "stepno";
//        s2 = "onpets";
//
//        3a: sort strings
//        s1 = "enopst";
//        s2 = "enopst";
//
//        if s1.equals(s2) -> palindrome

    }
}
