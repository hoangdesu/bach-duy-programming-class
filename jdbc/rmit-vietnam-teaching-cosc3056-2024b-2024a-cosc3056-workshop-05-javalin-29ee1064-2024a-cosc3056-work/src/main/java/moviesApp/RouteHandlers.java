package moviesApp;

import app.JDBCConnection;
import app.Movie;
import io.javalin.Javalin;
import io.javalin.http.Context;
import org.jetbrains.annotations.NotNull;

import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.ArrayList;

public class RouteHandlers {
    Javalin app;

    public RouteHandlers(Javalin app) {
        this.app = app;
    }

    public void getMoviesByGenre(@NotNull Context ctx) throws SQLException {
        String genre = ctx.pathParam("genre");

//        connection = DriverManager.getConnection(DATABASE);
        // query ....

        EnhancedJDBC jdbcConnection = new EnhancedJDBC();

        ArrayList<Movie> movies = jdbcConnection.getMoviesByGenre(genre);

        ctx.json(movies);
    }
}
