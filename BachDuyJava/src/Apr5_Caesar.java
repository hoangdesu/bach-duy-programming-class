public class Apr5_Caesar {
    public static void main(String[] args) {
//        String plainText = "chUc mUnG bAn dA tOn mAy Tieng cu0^.c dO`i de giaI dong mAt ma~ v0 Nghi~a nay` kaka =))";
        String plainText = "I L0VE JAVa <3";
        int key = 11;

        String cipher = encrypt(plainText, key);
        System.out.println("Cipher: " + cipher);

    }

    //    encrypt: alphanumeric a-z0-9
    //    everything else stays the same
    public static String encrypt(String plainText, int key) {
        StringBuilder cipher = new StringBuilder();

        for (int i = 0; i < plainText.length(); i++) {
            int plainAscii = plainText.charAt(i);

            boolean isLowerCase = plainAscii >= 97 && plainAscii <= 122;
            boolean isUpperCase = plainAscii >= 65 && plainAscii <= 90;
            boolean isDigit = plainAscii >= 48 && plainAscii <= 57;

            char encryptedChar;
//            if (isLowerCase || isUpperCase || isDigit) {
//                encryptedChar = (char) (97 + (plainAscii + key) % 123);
//            } else {
//                encryptedChar = (char) plainAscii;
//            }

            System.out.print("plaintext: " + plainText.charAt(i) + " - plainAscii: " + plainAscii);

            if (isUpperCase) {
                int encryptedAscii = ((plainAscii + key) % 91); // 91 is the upperbound for uppercase chars. Reset back to 0 if there's overflow
                if (encryptedAscii < 65) encryptedAscii += 65; // if there's a reset, add 65 to start at letter 'A'
//                System.out.println(" - encryptedAscii: " + encryptedAscii);
                encryptedChar = (char) encryptedAscii;
//                System.out.println("encryptedChar: " + encryptedChar);
            } else if (isLowerCase) {
                int encryptedAscii = ((plainAscii + key) % 123); // 123 is the upperbound for lowercase chars. Reset back to 0 if there's overflow
                if (encryptedAscii < 97) encryptedAscii += 97;
                encryptedChar = (char) encryptedAscii;
            } else if (isDigit) {
                int encryptedAscii = ((plainAscii + key) % 58); // 58 is the upperbound for digits. Reset back to 0 if there's overflow
                if (encryptedAscii < 48) encryptedAscii += 48;
                encryptedChar = (char) encryptedAscii;
            } else {
                encryptedChar = (char) plainAscii;
            }

            System.out.println();
            cipher.append(encryptedChar);


//            char encryptedAscii = (char) (plainAscii + key);
//            System.out.println(encryptedAscii);
        }

        return cipher.toString();
    }

//    some test cases:
//    key = 3: "Java is !fun zZz" -> "Mdyd lv !ixq cCc"
//    key = 5: "I L0VE JAVa <3" -> "N Q5AJ OFAf <8"
//    key = 6: "Lap tRiNh lA vUa cUa CaC nGh3^`" -> "Rgv zXoTn rG bAg iAg IgI tMn9^`
}
