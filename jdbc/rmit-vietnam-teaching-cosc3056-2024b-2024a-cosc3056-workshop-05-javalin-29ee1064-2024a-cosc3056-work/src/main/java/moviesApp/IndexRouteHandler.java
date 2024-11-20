package moviesApp;

import app.Movie;
import io.javalin.http.Context;
import io.javalin.http.Handler;
import org.jetbrains.annotations.NotNull;

import java.sql.Connection;
import java.sql.DriverManager;
import java.util.ArrayList;

public class IndexRouteHandler implements Handler {
    @Override
    public void handle(@NotNull Context ctx) throws Exception {
//        connection = DriverManager.getConnection(DATABASE);
//        ... logic

        EnhancedJDBC enhancedJDBC = new EnhancedJDBC();
        ArrayList<Movie> movies = enhancedJDBC.getAllMovies();
        ctx.json(movies);
    }
}
