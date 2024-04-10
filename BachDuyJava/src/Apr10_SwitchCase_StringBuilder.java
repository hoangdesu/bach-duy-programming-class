public class Apr10_SwitchCase_StringBuilder {
    public static void main(String[] args) {
//        String apple = "apple";
//        String number = "";
//
////        String input = sc.nextLine(); -> String
//
//        String replaced = "";
//        replaced = String.valueOf(apple.charAt(0)).replace(apple.charAt(0), '2');
//
//        number += replaced;
//        System.out.println(number);

//        switch - case: if - else if - else

//        Scanner sc = new Scanner(System.in);

//        Data mapping

//        StringBuilder

//        - Strings are IMMUTABLE

        String text = "1800-apple"; // 1800-27753
        text = "1300-micro";
        text += "softzzz";

//        String n = "";

        StringBuilder number = new StringBuilder();
        // using ArrayList behind the scene to optimize performance, reduce memory re-allocation

        for (int i = 0; i < text.length(); i++) {
            char currentChar = text.charAt(i);

//            n += String.valueOf(currentChar);

            switch (currentChar) {
                // a || b || c
                case 'a', 'b', 'c':
                    number.append("2");
                    break;
                case 'd', 'e', 'f':
                    number.append("3");
                    break;
                case 'g', 'h', 'i':
                    number.append("4");
                    break;
                case 'j':
                case 'k':
                case 'l':
                    number.append("5");
                    break;
                case 'm', 'n', 'o':
                    number.append("6");
                    break;
                case 'p', 'q', 'r', 's':
                    number.append("7");
                    break;
                case 't', 'u', 'v':
                    number.append("8");
                    break;
                case 'w', 'x', 'y', 'z':
                    number.append("9");
                    break;
                default:
                    number.append(currentChar);
                    break;
            }
        }

        System.out.println(number.toString());
    }
}
