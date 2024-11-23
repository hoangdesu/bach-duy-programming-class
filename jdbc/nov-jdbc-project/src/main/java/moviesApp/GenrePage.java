package moviesApp;

import java.util.ArrayList;
import java.util.HashMap;

import app.Movie;
import io.javalin.http.Context;
import io.javalin.http.Handler;

public class GenrePage implements Handler {
    @Override
    public void handle(Context ctx) throws Exception {
        String query = ctx.queryParam("q");

        EnhancedJDBC jdbc = new EnhancedJDBC();

        ArrayList<Movie> movies = new ArrayList<>();

        if (query != null) {
            movies = jdbc.getMoviesByGenre(query);
            System.out.println(movies);
            for (Movie m : movies) {
                System.out.println(m);
            }
        } 

        System.out.println(">> query: " + query);

        HashMap<String, Object> data = new HashMap<>();

        data.put("movies", movies);

        ctx.render("/html/genre.html", data);
    }
   
}
