import java.util.Arrays;

public class May24_Recursive {
    public static void main(String[] args) {
        int[] array = buildArray(5, 10);
        System.out.println(Arrays.toString(array));
    }

    public static int[] buildArray(int a, int b) {
        if (a > b) {
            return new int[0];
        }

        int[] rest = buildArray(a + 1, b);
        int[] result = new int[rest.length + 1];
        result[0] = a;
        System.arraycopy(rest, 0, result, 1, rest.length);
        return result;
    }

//    isPrime(7) {
//
//    }
//    isPrimeRecursive()
}
