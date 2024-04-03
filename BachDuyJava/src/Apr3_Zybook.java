public class Apr3_Zybook {
    public static void main(String[] args) {
//        radius ^ 2
//        sphere = (4.0 / 3.0) π r3

//        pi = 3.14;
//        Math.PI

//        radius ^ 3
//        a ^ b => power
//        a to the power of b

//        radius * radius * radius;

//        double radius = 5;
//        double volume = Math.pow(radius, 3);
//        System.out.println("Volume = " + volume);
//
////        Scientific notation
//        double avogadrosNumber = 6.02e23; // 6.02 x 10^23
//        System.out.println(avogadrosNumber * 10);
//
//        System.out.println(1e-7);

//        age: var
//        birthYear: const

//        final int birthYear = 1995;
//        birthYear = 2004;

//        System.out.println(birthYear);

//        Type conversions
        // Implicit
        System.out.println(3 + "a"); // 3a -> int + str = str
        System.out.println(3 + 'a'); // 100 -> 3 + 97 = 100 => int + char => int + int
        System.out.println(true + "1" + 2); // => str
        System.out.println(1 + 3.0);
//        int * double = ?

//        string concatenation: ghep chuoi

//        Type casting
//        int res = (int) (1 + 3.9);
//        System.out.println(res);

//        str <-> int => no no
//        char <-> int => ok


        char myChar = 'A';

        System.out.println(myChar);
        System.out.println((int) myChar); // 65

        System.out.println((char) 122);

//        int + int = int
//       int / int = int

        int students = 30;
//        (double) students / (double) gpa => double average


//        String: array of characters
//            "Duy" = 'D' + 'u' + 'y'

        System.out.println((char) ('a' + 'b')); // char + char => int + int = int
        System.out.println('a' + 'b');
        System.out.println('a' + "c" + 'b');
        System.out.println("" + 'a' + 'b');
        System.out.println('a' + 'b' + "");

//        plainText -> encryption algorithm + key -> cypher (encrypted message)

//        Caesar algorithm
        String plainText = "Java";
        int key = 5;
//        Java -> Ofaf

//        Brute force
//        try key 1 -> 24

//        "Java" ->
//        'J'
//        'a'
//        'v'
//        'a'

        String message = "Java is really fun ^o^";

        String encryptedMessage = "";
        for (int i = 0; i < message.length(); i++) {
            System.out.printf("index = %d, char = %c, ascii = %d \n", i, message.charAt(i), (int) message.charAt(i));
            int encryptedAscii = (int) message.charAt(i) + key;
            char encryptedChar = (char) encryptedAscii;
            System.out.printf("encrypted char: %c\n",  encryptedChar);
//            encryptedMessage += (encryptedChar + "");
            encryptedMessage += String.valueOf(encryptedChar);
        }

        System.out.println("Encrypted message: " + encryptedMessage);



        // Lv1: encrypt message
//        check overflow:
//        1. if x + key > range
//        2. x + key % range -> xoay vong


//        Lv2: Decrypt message with a key



//        Lv3: Brute force

    }
}
