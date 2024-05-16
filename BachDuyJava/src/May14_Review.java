import java.util.ArrayList;

public class May14_Review {
    public static void main(String[] args) {
        ArrayList<ArrayList<String>> groups = new ArrayList<>();

//        String[] hundredth =
//                max 3 static string arrays

//        [0,0,0]


//        set(i, num)

//        for (int i = 0; i < 10; i++) {
//            System.out.println(i);
//            if (true) {
//                i = 8; // stuck in while loop
//            }
//        }

        int num = 123456789;

        String numStr = String.valueOf(num);

//        boolean isHundredth = false;

        int counter = 0;
        for (int i = numStr.length() - 1; i >= 0; i--) {
            if (counter % 3 == 0) {
                System.out.println("-");
            }
            System.out.print(numStr.charAt(i) + ", ");
            counter++;

//            [i] == 0 && [i+1] == 0 {
//                += "trăm";
//                isHundredth = true;
//            }
        }

//        if (isHundredth) {
//            ...
//        }

//        for 10 nums
//
//            randomInt = (int) (Math.random() * 999999999);
//                sout


//        readNum(String num, int index) {
//            String reading = "";
//            switch (num) {
//                case 1 -> reading = "một";
//                case 9 -> reading = "chín";
//            }
//
//            // 401: bon tram linh mot
//            if (num == 0 && index == 1) {
//                reading = "linh";
//            }
//        }

//        readNum()
//        [[1,2,3], [4,5,6], [7,8,9]]
//        [[], [4,0,6], [7,8,9]]
//        [[x,1,2], [4,5,6], [7,8,9]]




    }
}
