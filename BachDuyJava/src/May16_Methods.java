public class May16_Methods {
    public static void main(String[] args) {
        System.out.println(hi());
        System.out.println(getNum3());

//        Ternary: shorthand if-else
        String gender = "female";

        String name = gender.equals("male") ? "John" : "Marry";

        System.out.println(name);

        System.out.println(getMovieRating(12));
        System.out.println(getMovieRating(17));

        System.out.println(getMovieRating(59));

        String rating1 = getMovieRating(12);
//        if (rating1.equals("children")) {
//            System.out.println("function works correctly");
//        } else {
//            System.out.println("function failed");
//        }

        System.out.println("testing started...");
        assert getMovieRating(12).equals("adult") : "Assertion Get movie rating failed";
        int num = -1;
        assert num > 0 : "Error: num is not > 0";

        System.out.println("testing stop");



//        8 vs 4 = 32
//            9 * 21 = 189
//                    63

//        HW: Least-common multiple calculator


    }

    public static String hi() {
        if (true) {
            return "hi";
        }

        return "hi";
    }

    public static int getNum3() {
        for (int i = 0; i < 10; i++) {
            System.out.println(i);
            if (i == 3) return i; // similar to break
        }
        return 0;
    }

    public static String getMovieRating(int age) {
//        if age >= 18 -> "adult"
//        else -> "children"

//        >=18: adult
//        13-18: teenager
//        <13: children

        return age >= 18 ? "adult" :
                age >= 13 && age < 18 ? "teenager" : "children";
    }
}
