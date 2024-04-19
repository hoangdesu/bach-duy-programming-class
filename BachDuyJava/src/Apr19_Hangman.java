import java.io.FileInputStream;
import java.io.IOException;
import java.lang.reflect.Array;
import java.sql.SQLOutput;
import java.util.Arrays;
import java.util.Scanner;

public class Apr19_Hangman {
    public static void main(String[] args) throws IOException {
        // 1. retrieve data from file, build question data
        FileInputStream fis = new FileInputStream("./src/questionsDB.csv");
        Scanner fileScanner = new Scanner(fis);

        String[] hints = new String[4];
        String[] answers = new String[4];

        int currentIndex = 0;

        while (fileScanner.hasNext()) {
            String line = fileScanner.nextLine();
            String[] splittedLine = line.split(",");

            String hint = splittedLine[0];
            String answer = splittedLine[1];

//            System.out.println(Arrays.toString(splittedLine));

            hints[currentIndex] = hint;
            answers[currentIndex] = answer;

            currentIndex++;
        }

//        System.out.println(Arrays.toString(hints));
//        System.out.println(Arrays.toString(answers));

//        2. game loop

//        int roundIndex = 0; // round 1 == roundIndex = 0
        int roundIndex = (int) (Math.random() * answers.length); // 0 -> 3
        int lives = 5;

        String currentHint = hints[roundIndex];
        String currentAnswer = answers[roundIndex];

        String[] currentGuess = new String[currentAnswer.length()];

        Scanner sc = new Scanner(System.in);

        while (true) {
            // 1. print game statistics

            System.out.println(currentHint + " - " + currentAnswer);
            System.out.println("Question: " + (roundIndex + 1));
//
            System.out.println(Arrays.toString(currentGuess));

            System.out.println("Hint: " + currentHint);
            System.out.printf("The answer has %d letters\n", currentAnswer.length());

            for (String c : currentGuess) {
                if (c == null) {
                    System.out.print("_ ");
                } else {
                    System.out.print(c + " ");
                }

            }

            System.out.print("\nEnter your guess: ");
            String userGuess = sc.nextLine();

            for (int i = 0; i < currentAnswer.length(); i++) {
                if (userGuess.equals(String.valueOf(currentAnswer.charAt(i)))) {
                    currentGuess[i] = userGuess;
                }
            }


            // check win condition
            StringBuilder finalAnswer = new StringBuilder();
            for (String c : currentGuess) {
                finalAnswer.append(c);
            }

            if (finalAnswer.toString().equals(currentAnswer)) {
                System.out.println("You win!! Here is the new round");
                roundIndex = (int) (Math.random() * answers.length);
                currentHint = hints[roundIndex];
                currentAnswer = answers[roundIndex];
                currentGuess = new String[currentAnswer.length()];
            }

            System.out.println();
        }


    }
}
