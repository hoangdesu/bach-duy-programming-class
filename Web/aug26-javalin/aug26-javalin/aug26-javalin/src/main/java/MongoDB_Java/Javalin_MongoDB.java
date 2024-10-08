package MongoDB_Java;

import com.mongodb.client.*;
import com.mongodb.client.model.Filters;
import io.javalin.Javalin;
import org.bson.Document;

import javax.print.Doc;
import java.util.ArrayList;

import static com.mongodb.client.model.Filters.eq;

public class Javalin_MongoDB {

    public static void main(String[] args) {
        String uri = "mongodb+srv://bachduy25102004:7G792YeuEAxBHAlg@cluster0.1fc1a.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

        Javalin app = Javalin.create()
                .get("/", ctx -> {
                    String template = """
                        <form action="/movie" method="post">
                            <input type="text" name="movieName" placeholder="Movie name to search">
                            <button>Search</button>
                        </form>
                        """;
                    ctx.html(template);
                })
                .post("/movie", ctx -> {
                    String movieName = ctx.body().split("=")[1].replaceAll("[+]", " "); // movieName=caigido
                    System.out.println("movieName: " + movieName);

                    try (MongoClient mongoClient = MongoClients.create(uri)) {
                        MongoDatabase database = mongoClient.getDatabase("sample_mflix");
                        MongoCollection<Document> movieCollection = database.getCollection("movies");

//                        Document doc = movieCollection.find(eq("title", movieName)).first();

//                        regex pattern containing movieName
                        Document doc = movieCollection.find(Filters.regex("title", String.format(".*%s.*", movieName), "i")).first();

                        if (doc != null) {
                            System.out.println(doc.toJson());
                            ctx.json(doc.toJson());
                        } else {
                            System.out.println("No matching documents found.");
                            ctx.result("Movie not found :(");
                        }
                    }
                });

        app.get("/movies/{movieName}", ctx -> {
//            String movieName = ctx.body().split("=")[1].replaceAll("[+]", " "); // movieName=caigido
//            System.out.println("movieName: " + movieName);

            String movieName = ctx.pathParam("movieName");

            try (MongoClient mongoClient = MongoClients.create(uri)) {
                MongoDatabase database = mongoClient.getDatabase("sample_mflix");
                MongoCollection<Document> movieCollection = database.getCollection("movies");

                FindIterable<Document> documents = movieCollection.find(Filters.regex("title", String.format(".*%s.*", movieName), "i"));
                MongoCursor<Document> cursor = documents.iterator();

//                int count = 0;
                ArrayList<String> results = new ArrayList<>();
                while (cursor.hasNext()) {
//                    System.out.println(cursor.next());
//                    count++;
//                    if (count == 3) break;
                    Document doc = cursor.next();
                    results.add(doc.toJson());
                }

                ctx.json(results.toString());
            }
        });

        app.start(6789);
    }
}
