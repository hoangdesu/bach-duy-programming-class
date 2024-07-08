package scripts;

import org.json.JSONObject;

public class Jul3_JSON {
    public static void main(String[] args) {
        JSONObject jo = new JSONObject();
        jo.put("name", "jon doe");
        jo.put("age", "22");
        jo.put("city", "chicago");

        System.out.println(jo.get("name"));
        String json = """
                {
                    "name": "Duy",
                    "games": ["League", "Dota 2", "Pokemon"]
                }
                """;

//        String json = "{\"name\": \"Duy\"}";

        JSONObject duy = new JSONObject(json);
        System.out.println(duy.get("name"));
        System.out.println(duy.get("games"));

//        HW: parse champion.json
    }

}
