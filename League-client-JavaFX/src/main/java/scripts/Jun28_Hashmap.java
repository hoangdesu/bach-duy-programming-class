package scripts;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

public class Jun28_Hashmap {
    public static void main(String[] args) {
        HashMap<String, String> capitals = new HashMap<>();
        capitals.put("vietnam", "Ha Noi");
        capitals.put("japan", "Tokyo");
//        capitals.put("vietnam", "SG");

//        capitals.remove("japan");
        capitals.replace("japan", "Osaka");
        System.out.println(capitals.containsKey("korea"));

        System.out.println(capitals.size());

        System.out.println(capitals.keySet());

        System.out.println(capitals.values());

//        System.out.println(capitals.);

        System.out.println(capitals.get("japan"));
        System.out.println(capitals.get("vietnam"));

//        enum Keys {
//
//        }

        HashMap<String, Integer> progLangs = new HashMap<>();

        progLangs.put("python", 1991);
        progLangs.put("java", 1995);

//        System.out.println(progLangs.get(""));

        System.out.println(progLangs.get("python"));

        HashMap<String, Object> vietnam = new HashMap<>();
        vietnam.put("name", "Việt Nam");
        vietnam.put("capital", "Hanoi");
        vietnam.put("population", 90_000_000);
        vietnam.put("isAsia", true);
        List<String> cities = List.of("Ho Chi Minh city", "Ha Noi", "Hue");
        vietnam.put("cities", cities);
        vietnam.put("food", new String[]{"bun dau mam tom", "phở", "cơm tấm"});

        System.out.println(vietnam.get("name") + " : " + vietnam.get("population"));

        for (String city : cities) {
            System.out.println(city);
        }

        System.out.println(vietnam.get("cities"));
        System.out.println(new String[]{""});

//        "abc" -> 97 + 98 + 99 = 294
//        "bbb" -> 98 * 3 = 294
//        "def" ->

//        []
//        {}
//        hash map
    }
}
