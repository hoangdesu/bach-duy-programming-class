import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.LinkedList;
import java.util.List;

public class May7_DynamicArrays {
    public static void main(String[] args) {
//        System.out.println("hi");
//
//        System.out.print("\033[H\033[2J");
//        System.out.flush();
//
////        System.out.print("\033\143");
//
//        System.out.println("bye");


//        static arrays: fixed length once initialized
//        dynamic arrays: varied length


//        String[]

        ArrayList<String> favoriteGames = new ArrayList<>();

        System.out.println(favoriteGames);

        favoriteGames.add("Lien minh");
        favoriteGames.add("Valorant");
        favoriteGames.add("Overcooked");
        favoriteGames.add("Ori");

        favoriteGames.addAll(List.of(new String[]{"Dota 2", "Mario", "Tetris"}));

//        favoriteGames.equals()

        System.out.println(favoriteGames.remove("Orianna"));
        System.out.println("removed:" + favoriteGames.remove(1));

//        favoriteGames.removeAll(List.of(new String[]{"Valorant", "Ori", "Mario"}));

//        ArrayList<String> updatedGameList = (ArrayList) favoriteGames.clone();
//
//        updatedGameList.add("Diner dash");
//        System.out.println(updatedGameList);

        favoriteGames.set(2, "Ori and the blind forest");

        favoriteGames.addFirst("GTA V");
        favoriteGames.add(1, "Portal 2");

        System.out.println(favoriteGames.subList(2, 5));
        System.out.println("contain all: " + favoriteGames.containsAll(List.of(new String[]{"GTA V", "Lien minh", "Portal 2"}))); // no need right order

        System.out.println("removed last: " + favoriteGames.removeLast()); // .pop()

        System.out.println(favoriteGames);
        System.out.println(favoriteGames.size());

        System.out.println(favoriteGames.get(2));

        System.out.println(favoriteGames.contains("Dota 3"));

        System.out.println(favoriteGames.indexOf("Mario"));
        System.out.println(favoriteGames.indexOf("Dota"));


//        must use wrapper types
        ArrayList<Integer> numbers = new ArrayList<>();

        for (int i = 0; i < favoriteGames.size(); i++) {
            System.out.println(favoriteGames.get(i));
        }

//        short-hand for loop
        for (String myGame : favoriteGames) {
            System.out.println("- " + myGame);
        }

    }
}
