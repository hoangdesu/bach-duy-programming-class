import java.util.Arrays;
import java.util.Scanner;

public class Apr18_Hangman {
    public static void main(String[] args) {
//        String hint = "capital of vietnam";
//        String answer = "hanoi";

//
////        userInput == answer -> done
//
//
//
//
////        Hint: "capital of vietnam"
////
////        _ _ _ _ _
////
////        enter a character: a
////
////        _ a _ _ _
////
////        h a n o i
//
////        Strings are immutable
//
////        String[] answers = {"hanoi", "hcmc"};
////
////        answers[1] = "ho chi minh city";
////
////        System.out.println(Arrays.toString(answers));
//
////        String guess = "";
//
//        String[] guess = new String[answer.length()];
//
//        System.out.println(Arrays.toString(guess));
//
//        int lives = 5;
//
////        char[] answers;
////        answers.
//
//        String[] answers = {};
//        answers.

//        Level 1: a single pair of question and answer

        String hint = "Capital of Japan";
        String answer = "vietnam";
        int lives = 5;

        int[] nums = new int[5];

        System.out.println(Arrays.toString(nums));

        String[] guess = new String[answer.length()];

//        StringBuilder sb = new StringBuilder();
//
//        for (String charac : a) {
//            sb.append(charac)
//        }
//
//        sb.toString()
//        System.out.println(a.toString());

        Scanner sc = new Scanner(System.in);

        while (true) {
            // display game stats
            System.out.println("\nHint: " + hint);
            System.out.println("Lives: " + lives);
            System.out.println(answer.length() + " character long");

            for (String c : guess) {
                if (c == null) {
                    System.out.print("_ ");
                } else {
                    System.out.print(c + " ");
                }
            }

            System.out.print("\nEnter your guess: ");
            String userGuess = sc.nextLine();

            // check if answer contains userGuess
            for (int i = 0; i < answer.length(); i++) {
                if (String.valueOf(answer.charAt(i)).equals(userGuess)) {
                    guess[i] = userGuess;
                    System.out.println("Correct!!");
                }
            }

            System.out.println();



        }


//        String[] a = {"a", "b", "c"};
//        System.out.println(a.toString());

    }


}
