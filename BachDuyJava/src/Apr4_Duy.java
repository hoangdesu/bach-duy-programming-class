import java.util.Scanner;

public class Apr4_Duy {
    public static void main(String[] args) {
        Scanner scnr = new Scanner(System.in);
        System.out.print("Pleas enter a word: ");
//        String word = scnr.nextLine();
        String word = "#ra!DaR@";

        boolean isPalindrome = true;

        for (int head = 0; head < word.length() / 2; head++) {
            int tail = word.length() - (head + 1);

            char headChar = word.charAt(head);
            char tailChar = word.charAt(tail);

            while ((int) (headChar) < 65 || (int) headChar > 90 && (int) headChar < 97 || (int) headChar > 122) {
                head = head + 1;
                headChar = word.charAt(head);
                System.out.println("head: " + head);
            }
            while ((int) (tailChar) < 65 || (int) tailChar > 90 && (int) tailChar < 97 || (int) tailChar > 122) {
                tail = tail - 1;
                tailChar = word.charAt(tail);
                System.out.println("tail: " + tail);
            }
            if ((int) (headChar) >= 65 && (int) (headChar) <= 90) {
                headChar = (char) (headChar + 32);
            }
            if ((int) (tailChar) >= 65 && (int) (tailChar) <= 90) {
                tailChar = (char) (tailChar + 32);
            }
            if (headChar != tailChar) {
                isPalindrome = false;
                break;
            }
            System.out.println("" + head + " : " + headChar);
            System.out.println("" + tail + " : " + tailChar);
        }

        if (isPalindrome) {
            System.out.println(word + " is a palindrome");
        } else {
            System.out.println(word + " is not a palindrome");
        }
    }
}
