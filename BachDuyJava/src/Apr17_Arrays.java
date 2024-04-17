import java.util.ArrayList;
import java.util.Arrays;

public class Apr17_Arrays {
    public static void main(String[] args) {
//        short circuit

//        boolean isRaining = false;
//        if (true || isRaining) {
//
//        }

//        Arrays
//        a collection of items that share the same data type

        int[] nums = {1, 2, 3};
        int numbers[] = {1, 2, 3}; // C-style still legit, but not recommended
        int[] copiedNums = nums;

        String[] favoriteGames = {"Lien minh", "Overwatch", "Ori and the blind forest", "Undertale", "Valorant"};

        System.out.println(favoriteGames); // memory address

//        index starts from 0

//        Accessing elements in an array
//        System.out.println(favoriteGames[0]); // lien minh
//        System.out.println(favoriteGames[1]);
//        System.out.println(favoriteGames[2]);

        System.out.println(favoriteGames.length);

//        reassign value
        favoriteGames[1] = "Apex Legend";


//        Array: static array -> fixed length
//        ArrayList: dynamic array -> varied length

//        traditional for loop: using i for index
        for (int i = 0; i < favoriteGames.length; i++) {
//            String game = favoriteGames[i];
            System.out.println(i+1 + ". " + favoriteGames[i]);
        }

//        enhanced for loop
//        for (String game : favoriteGames) {
//            System.out.println(game);
//        }

//        while i < array length

//        built-in class Arrays
        System.out.println(Arrays.toString(favoriteGames));

        System.out.println(Arrays.equals(nums, numbers)); // check elements
        System.out.println(nums.equals(numbers));
        System.out.println(nums.equals(copiedNums)); // check memory


//        list ~= array

//        reversed list
//        int counter = 1;
//        for (int i = favoriteGames.length - 1; i >= 0; i--) {
//            System.out.println(favoriteGames[i]);
//            counter++;
//        }

//        int i = favoriteGames.length - 1;
//        int counter = 1;
//
//        while (i >= 0) {
//            System.out.println(counter + ". " + favoriteGames[i]);
//            i--;
//            counter++;
//        }

        double[] testMarks = {9, 6.5, 2, 9.9, 7};

//        total -> average (mean)

//        kĩ thuật gom hàng -> totalling

        double total = 0;

        for (double mark : testMarks) {
            total += mark;
        }

//        for (int i = 0; i < testMarks.length; i++) {
//            total += testMarks[i];
//        }

        System.out.println("Total marks: " + total);

        double mean = total / testMarks.length;
        System.out.println("Average marks for class: " + mean);

//        find min vs max

//        temporarily assign first value as min and max
        double min = testMarks[0];
        double max = testMarks[0];

        for (double mark : testMarks) {
            if (mark < min) min = mark;
            if (mark > max) max = mark;
        }

        System.out.println("Min mark: " + min);
        System.out.println("Max mark: " + max);

        String[] food = new String[10]; // initialize a fixed-length array with empty values

        food[3] = "takoyaki";

        System.out.println(Arrays.toString(food));

        String[] drinks = new String[] {"coca", "pepsi", "coffee"}; // init and assign values

        System.out.println(Arrays.toString(drinks));

//        HW:
        String[] users;
        String[] passwords;
    }
}
