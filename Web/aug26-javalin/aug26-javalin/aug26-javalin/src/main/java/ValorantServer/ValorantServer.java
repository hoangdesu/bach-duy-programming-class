package ValorantServer;

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

        FileInputStream fis = new FileInputStream("./src/main/java/ValorantServer/agents.json");
        Scanner fileScanner = new Scanner(fis);
        StringBuilder data = new StringBuilder();

        while (fileScanner.hasNext()) {
            data.append(fileScanner.nextLine());
        }

//        System.out.println("data");
//        System.out.println(data);

        JSONArray agentList = new JSONArray(data.toString());

        ArrayList<Agent> agents = new ArrayList<>();

        for (int i = 0; i < agentList.length(); i++) {
            JSONObject agent = new JSONObject(agentList.get(i).toString());
            String name = agent.get("displayName").toString();

            String image = agent.get("fullPortraitV2").toString();
            String description = agent.get("description").toString();
            boolean isPlayableCharacter = (boolean) agent.get("isPlayableCharacter");

            if (isPlayableCharacter) agents.add(new Agent(name, image, description));
        }



        // Server Routes/Endpoint
        app.get("/agents", ctx -> {
//            ctx.json(agents.toString());
            StringBuilder template = new StringBuilder();
            template.append("<h1>Valorant Agents</h1> <ol>");

            for (Agent agent : agents) {
                template.append(String.format("""
                    <li>
                        <a href="/agents/%s">
                            <p>%s</p>
                            <img src="%s" alt="%s" width="400" />
                        </a>
                    </li>
                    """, agent.getName(), agent.getName(), agent.getImage(), agent.getName()));
            }

            template.append("</ol>");

            ctx.html(template.toString());
        });

//        Endpoint / URL / Route

        app.get("/agents/{name}", ctx -> {
            String name = ctx.pathParam("name");

            // linear search
//            ctx.result(name);

            String agentTemplate = "<h1>Agent Not Found</h1>";

//            Linear search
            for (Agent agent : agents) {
                if (agent.getName().equals(name)) {
                    agentTemplate = String.format("""
                            <h1 style="color: red; text-align: center">%s</h1>
                            <p>%s</p>
                            <img src="%s" width="800" alt="%s" style="text-align: center" />
                            """,
                            agent.getName(),
                            agent.getDescription(),
                            agent.getImage(),
                            agent.getName());
                }
            }

            agentTemplate += """
                    <br />
                    <a href="/agents">Back</a>
                    """;

            ctx.html(agentTemplate);
        });

        app.start(5678);

    }

//    app.get("/agents") -> return full list of agents


//    app.get("/agents/{name}") -> query from db
//    found vs not found

//    app.post("/agents") -> create a new agents and add to the db (OPTIONAL)

//    Gekko
//    the ??
//    img
}
