package Thymeleaf;

import io.javalin.Javalin;
import io.javalin.rendering.template.JavalinThymeleaf;

public class ThymeleafServer {
    public static void main(String[] args) {
        Javalin app = Javalin.create(config -> {
            config.fileRenderer(new JavalinThymeleaf()); // need to install artifact "javalin-rendering". https://javalin.io/plugins/rendering
        });

        app.get("/", ctx -> {
            ctx.render("/templates/thymeleafapp.html"); // includes file extension
        });

        app.start(5678);
    }
}
