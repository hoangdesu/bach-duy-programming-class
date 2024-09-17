package Thymeleaf;

import io.javalin.Javalin;
import io.javalin.rendering.template.JavalinThymeleaf;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Hashtable;
import java.util.Map;

public class ThymeleafServer {
    static class Car {
        public String name;
        public double price;
        public String image;

        public Car(String name, double price, String image) {
            this.name = name;
            this.price = price;
            this.image = image;
        }

//        MUST HAVE GETTERS :/
        public String getName() {
            return name;
        }

        public double getPrice() {
            return price;
        }

        public String getImage() {
            return image;
        }
    }
    public static void main(String[] args) {
        Javalin app = Javalin.create(config -> {
            config.fileRenderer(new JavalinThymeleaf()); // need to install artifact "javalin-rendering". https://javalin.io/plugins/rendering
            config.staticFiles.add("/templates");
        });

        app.get("/", ctx -> {
//            automatically look into the resources folder
            ctx.render("/templates/thymeleafapp.html"); // includes file extension
        });

        app.get("/hello/{name}", ctx -> {
            String name = ctx.pathParam("name");
            System.out.println(name);

            Map<String, Object> data = new HashMap<>();
//            Hashtable<String, String> ht = new Hashtable<>();
//            ht.put("country", "Vietnam");
            data.put("userName", name);
            data.put("year", 1995);

            ArrayList<Car> cars = new ArrayList<Car>();
            cars.add(new Car("Mercedes AMG GT", 50_000, "https://legendarymotorcar.com/images/vehicles/2023/10/2021-Mercedes-Benz-GT-Black-Series-2678-64.jpg"));
            cars.add(new Car("Lamborghini Huracan", 500_000, "https://storage.googleapis.com/otomanimage/n987/lamborghini-huracan-2023-0.jpeg"));

            data.put("cars", cars);

            System.out.println(cars.get(0).name);


            ctx.render("/templates/hello-name.html", data);
        });

        app.start(5678);
    }
}
