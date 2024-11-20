package moviesApp;


import java.util.ArrayList;

import app.Movie;
import io.javalin.http.Context;
import io.javalin.http.Handler;

public class GetMovieByAgeRatingHandler implements Handler {
    @Override
    public void handle(Context ctx) throws Exception {
        String rating = ctx.pathParam("rating");

        EnhancedJDBC conn = new EnhancedJDBC();
        ArrayList<Movie> movies = conn.getMoviesByAgeRating(rating);


        
        // render on frontend
        // ctx.render(TEMPLATE, hashmap);
    }
}
