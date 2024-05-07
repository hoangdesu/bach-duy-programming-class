import java.util.Scanner;

public class Apr8_StringMethods {
    public static void main(String[] args) {
        String champ = "zed"; // champ = object of type String. String is a class
        String map = "Summoner's Rift";
//        Scanner sc = new Scanner(System.in);
//        map = sc.nextLine();

        // string methods can be chained
        System.out.println(String.valueOf(champ.toLowerCase().equals("asjdkasjdhkajdh")).toUpperCase());

        System.out.println("          ".isBlank()); // true
        System.out.println("  ".isEmpty()); // length == 0

        System.out.println(map.indexOf("R"));
        System.out.println(map.indexOf("moner")); // starting index = 3
        System.out.println(map.indexOf("m")); // first index found
        System.out.println(map.indexOf("zzz")); // -1

        System.out.println(map.contains("'s"));

        System.out.println("abc".compareTo("ccc"));

        System.out.println(map.endsWith("t"));

        System.out.println(map.lastIndexOf("m")); // 3

        System.out.println("ha".repeat(3));

        System.out.println(map.startsWith("Sum"));

        Integer a = 3;
        System.out.println(a.getClass());

        String email = "hoangdesu@gmail.com";
        System.out.println(email.matches("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$"));

        // class methods: exists on class

//        Regular expression: pattern matching
//        [mavung: int]([A-Z])
//        [num num num . num num]
//
//        51K-472.56
//        69Z-123.456

//        HW: map a phonenumber in text to number
//        "1800-APPLE" -> "1800-27753"

    }
}
