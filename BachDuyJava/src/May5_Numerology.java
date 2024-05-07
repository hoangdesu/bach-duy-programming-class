import java.util.Arrays;

public class May5_Numerology {
    public static void main(String[] args) {
        int myNum = calculateNumerology("26/2/1995");
        System.out.println("Your numerology is " + myNum);

//        int[] fibSequence = getFibonacciSequence(6);
//        System.out.println(Arrays.toString(fibSequence));



    }

    public static int calculateNumerology(String dob) {
        int num = 0;
        for (int i = 0; i < dob.length(); i++) {
            try {
                num += Integer.parseInt(String.valueOf(dob.charAt(i)));
            } catch (NumberFormatException e) {
//                System.out.println("Skipping " + dob.charAt(i));
            }
        }

        if (num > 9) {
            String numStr = String.valueOf(num);
            num = Integer.parseInt(String.valueOf(numStr.charAt(0))) + Integer.parseInt(String.valueOf(numStr.charAt(1)));
        }

        return num;
    }

    public static int[] getFibonacciSequence(int elements) {


        int[] fibSequence = new int[elements];
        System.out.println("Testing method");

        return fibSequence;
    }

//    getFibonacciSequence(6)
//    {0 1 1 2 3 5}

//    1 2 3 4 5 6 7 8  9  10 11
//    0 1 1 2 3 5 8 13 21 34 55 ...

}

