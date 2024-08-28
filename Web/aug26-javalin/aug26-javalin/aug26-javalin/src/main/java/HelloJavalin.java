import io.javalin.Javalin;
import org.json.JSONObject;

public class HelloJavalin {
    public static void main(String[] args) {
        System.out.println("Hello Server");
//                        Dog dog1 = new Dog()
//                String name = "ahja"


        Javalin app = Javalin
                .create()
                .get("/", ctx -> ctx.result("Hello World"))
                .post("/", ctx -> {
//                    ctx.result("received a POST request at root")
                    String body = ctx.body();

                    JSONObject bodyJson = new JSONObject(body);

                    String firstName = (String) bodyJson.get("firstName");
                    String lastName = (String) bodyJson.get("lastName");

                    String fullName = String.format("%s %s", firstName, lastName);
                    bodyJson.put("fullName", fullName);

                    ctx.json(bodyJson.toString());
                })
                .put("/", ctx -> ctx.result("received a PUT request at root") )

                .get("/about", ctx -> ctx.html("<h1 style=\"color: red;\"><b>About me</b></h1>" +
                        "<img src=\"https://images.unsplash.com/photo-1484788984921-03950022c9ef?q=80&w=3500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D\">"))
                .get("/hello/{name}", ctx -> ctx.html("<h1> Hello " + ctx.pathParam("name").toUpperCase() + "!!!</h1>"))
                .get("/calculate-age/<birthYear>", ctx -> {
                    // logics
                    int birthYear = Integer.parseInt(ctx.pathParam("birthYear"));
                    int age = 2024 - birthYear;
                    String responseHtml = String.format("""
                            <h1>Welcome to Age calculator route</h1>
                            <p>You were born in %d</p>
                            <h3>So you are %d years old today</h3>
                            """, birthYear, age);
                    ctx.html(responseHtml);
//                    ctx.result();
                })
                .get("/orders/{food}", ctx -> {
//                    restaurant menu = ["com", "pho", "bun"];
                    String[] menu = {"com", "pho", "bun"}; // fake database

                    String template = "<h1>Food order app</h1>";

                    String food = ctx.pathParam("food");
                    boolean found = false;

                    for (int i = 0; i < menu.length; i++) {
                        if (food.equals(menu[i])) {
                            found = true;
                            break;
                        }
                    }

                    if (found) {
                        template += String.format("<p>Your order of %s is on the way!</p>", food);
                    } else {
                        template += "Your order is not found :(";
                    }

                    ctx.html(template);
                })
                .start(3001);

//        www.google.com/search?sca_esv=ad1fe64d584e8890&rlz=1C5CHFA_enVN1082VN1082&sxsrf=ADLYWIJa8MUNqnhanwt4USveA8PjXFO8YQ:1724831836277&q=path+param&udm=2&fbs=AEQNm0Aa4sjWe7Rqy32pFwRj0UkWd8nbOJfsBGGB5IQQO6L3J_86uWOeqwdnV0yaSF-x2joZDvir2QxhZkTA8rK1etu4ohtqlTKXOQ56HmFa2r_epsOxiy16FOMXiJ4LeWEjHR0xuhMnIIBdrzlZVgqL8BjDs6jlGPrydpZE6b_9X_eML1qjkcMeb2OlXRYBf1Q4EscvPdKS&sa=X&ved=2ahUKEwi08Zenm5eIAxV2cGwGHU--EakQtKgLegQICRAB&biw=2540&bih=1308&dpr=1#vhid=Qemcg2QWfFfEKM&vssid=mosaic

//        path param -> URL
//        query string -> URL
//        request body -> JSON, (XML)
    }
}
