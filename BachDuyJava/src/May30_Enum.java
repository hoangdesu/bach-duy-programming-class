import java.util.Scanner;

public class May30_Enum {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
//        String trafficLight = sc.nextLine();
//
//        if (trafficLight.equals("red")) {
//            System.out.println("Stop");
//        } else if (trafficLight.equals("greeen")) {
//            System.out.println("Go go");
//        } else if (trafficLight.equals("yellow")) {
//            System.out.println("Slow down");
//        }

        enum TrafficLights {
            RED,
            GREEN,
            YELLOW
        }

        TrafficLights option = TrafficLights.GREEN;

        if (option == TrafficLights.RED) {
            System.out.println("Stop");
        } else if (option.equals(TrafficLights.GREEN)) {
            System.out.println("Go!");
        }

//        dynamic type
//        var i = 1.0;
//        var name = "hello";

//        let name = "Duy";
//        static type

        DrinksEnum order = DrinksEnum.COFFEE;

        System.out.println(DrinksClass.COFFEE);

        DrinksClass myDrink = new DrinksClass();

        System.out.println(myDrink);



    }
}
