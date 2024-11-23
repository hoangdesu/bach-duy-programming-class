package moviesApp;


import java.util.ArrayList;

import app.Movie;
import io.javalin.http.Context;
import io.javalin.http.Handler;

public class GetMovieByAgeRatingHandler implements Handler {
    @Override
    public void handle(Context ctx) throws Exception {
        String rating = ctx.pathParam("rating");

        System.out.println("rating: " + rating);

        EnhancedJDBC conn = new EnhancedJDBC();
        ArrayList<Movie> movies = conn.getMoviesByAgeRating(rating);

        for (Movie m : movies) {
            System.out.println(m);
        }

        
        // render on frontend
        // ctx.render(TEMPLATE, hashmap);
        ctx.json(movies);
    }
}
