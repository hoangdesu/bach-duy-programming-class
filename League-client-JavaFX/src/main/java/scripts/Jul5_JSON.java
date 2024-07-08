package scripts;

import com.leagueclientjavafx.model.Champion;
import org.json.JSONArray;
import org.json.JSONObject;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.util.ArrayList;
import java.util.Scanner;

public class Jul5_JSON {
    public static void main(String[] args) throws FileNotFoundException {
        FileInputStream fis = new FileInputStream("src/main/resources/com/leagueclientjavafx/data/champion.json");
        Scanner sc = new Scanner(fis);

        StringBuilder sb = new StringBuilder();
        while (sc.hasNext()) {
            sb.append(sc.nextLine());
        }

        JSONObject json = new JSONObject(sb.toString());

        JSONObject data = (JSONObject) json.get("data");

        ArrayList<Champion> champions = new ArrayList<Champion>();

        for (String key : data.keySet()) {
            JSONObject champ = (JSONObject) data.get(key);
//            String[] roles = (String[]) champ.get("tags"); // error
            String name = (String) champ.get("name");
            String image = key + "_0.jpg";
            JSONArray roles = (JSONArray) champ.get("tags");
//            String[] ->
//            ArrayList<String> ->
//            champions.add(new Champion(name, image, roles.toList()));
//            System.out.println();
        }

//        champions.sort();

//        for (Champion c : champions) {
//            System.out.println(c.toString());
//        }
    }
}
