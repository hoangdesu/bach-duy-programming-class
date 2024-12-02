package moviesApp;


import io.javalin.Javalin;
import io.javalin.core.util.RouteOverviewPlugin;

public class APIServer {

    public static final int         JAVALIN_PORT    = 7002;
    public static final String      CSS_DIR         = "css/";
    public static final String      IMAGES_DIR      = "images/";

    static RouteHandlers routeHandlers;
//    static EnhancedJDBC dbConnection;

    public static void main(String[] args) {
        Javalin app = Javalin.create(config -> {
            config.registerPlugin(new RouteOverviewPlugin("/help/routes"));
            config.addStaticFiles(CSS_DIR);
            config.addStaticFiles(IMAGES_DIR);
        }).start(JAVALIN_PORT);

        // EnhancedJDBC dbConnection = new EnhancedJDBC();

        // Configure Web Routes
        configureRoutes(app);

        routeHandlers = new RouteHandlers(app);
    }

    public static void configureRoutes(Javalin app) {
        app.get("/movies", new IndexRouteHandler());

        app.get("/movies/genre", new GenrePage());
        
        app.get("/movies/genre/:genre", ctx -> {
            routeHandlers.getMoviesByGenre(ctx);
        });

        app.get("/movies/rating/:rating", new GetMovieByAgeRatingHandler());
    }
}
