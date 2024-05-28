public class May22_Methods {
    public static void main(String[] args) {
        int num = 5;
        System.out.println("iterativeFactorial: " + iterativeFactorial(num)); // 24
        System.out.println("recursiveFactorial: " + recursiveFactorial(num)); // 24

//        0! = 1
        System.out.println(recursiveFactorial(0)); // 1
        System.out.println("iterativeFactorial: " + iterativeFactorial(0)); // 24

    }

    public static int iterativeFactorial(int num) {
//        x! = x * (x-1) * (x-2) * ... * 1
        int total = 1;
        for (int i = num; i > 1; i--) {
            total *= i;
        }
        return total;
    }

//    factorial(5) -> 5*4*3*2*1
//    f(5) * f(4) * f(3) * f(2) * f(1) => 1 *
    public static int recursiveFactorial(int num) {
//        System.out.println("inside recursive fac: " + num);
        if (num == 0) return 1;
        return num * recursiveFactorial(num  - 1);
    }

//    isPalindromeRecursive(String) -> boolean

//    reverseString(String) -> String
}
