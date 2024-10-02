package MongoDB_Java;

import static com.mongodb.client.model.Filters.eq;
import org.bson.Document;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;

public class Oct2_MongoDB_Driver {

    public static void main(String[] args) {
        String uri = "mongodb+srv://bachduy25102004:7G792YeuEAxBHAlg@cluster0.1fc1a.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

        try (MongoClient mongoClient = MongoClients.create(uri)) {
            MongoDatabase database = mongoClient.getDatabase("sample_mflix");
            MongoCollection<Document> movieCollection = database.getCollection("movies");

            Document doc = movieCollection.find(eq("title", "Back to the Future")).first();

            if (doc != null) {
                System.out.println(doc.toJson());
            } else {
                System.out.println("No matching documents found.");
            }
        }
    }
}
