import io.javalin.Javalin;
import org.json.JSONArray;
import org.json.JSONObject;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.util.ArrayList;
import java.util.Scanner;

public class ValorantServer {

//    class Agent {
//        String name;
//        String image;
//    }


    public static void main(String[] args) throws FileNotFoundException {

        Javalin app = Javalin.create();

        FileInputStream fis = new FileInputStream("./src/main/java/agents.json");
        Scanner fileScanner = new Scanner(fis);
        StringBuilder data = new StringBuilder();

        while (fileScanner.hasNext()) {
            data.append(fileScanner.nextLine());
        }

//        System.out.println("data");
//        System.out.println(data);

        JSONArray agentList = new JSONArray(data.toString());

        ArrayList<String> agents = new ArrayList<>();
//        ArrayList<Agent> agents = new ArrayList<>();
        for (int i = 0; i < agentList.length(); i++) {
            JSONObject agent = new JSONObject(agentList.get(i).toString());
            System.out.println(agent.get("displayName"));
            agents.add((String) agent.get("displayName"));
//            System.out.println(agent.toString());
        }

        StringBuilder template = new StringBuilder();
        template.append("<h1>Valorant Agents</h1> <ol>");

        for (String agent : agents) {
            template.append(String.format("<li>%s</li>", agent));
        }

        template.append("</ol>");

        app.get("/agents", ctx -> {
//            ctx.json(agents.toString());
            ctx.html(template.toString());
        });

        app.start(7654);

    }

//    app.get("/agents") -> return full list of agents


//    app.get("/agents/{name}") -> query from db
//    found vs not found

//    app.post("/agents") -> create a new agents and add to the db (OPTIONAL)

//    Gekko
//    the ??
//    img
}
