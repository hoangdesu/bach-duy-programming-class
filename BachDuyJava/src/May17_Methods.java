import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;

public class May17_Methods {

    public static void main(String[] args) {

//        String[] cities = {"Ho Chi Minh city", "Ha Noi"};
//
//        System.out.println(cities[1]);
//
//        HashMap<String, String> duy = new HashMap<>();
//
//        duy.put("name", "Bach Duy");
//        duy.put("birthYear", "2004");
//
//        System.out.println(duy.get("birthYear"));

//        1. ArrayList
//        2. Hashmap

        String text = "hi hey hello Hello hi hey hey hi";
//        text = "It acts as a single entry point, hiding all the internal implementation details and promoting easier interaction with the underlying functionalities. It acts as a gateway, shielding clients from intricate details.";
//        text = "You might have a Node.js application that interacts with multiple external services, each requiring specific configuration parameters. Using the Singleton pattern, you can create a ConfigManager class responsible for handling these configurations in a centralized manner.";

        ArrayList<String[]> wordFrequency = getWordFrequency(text);

        for (String[] entry : wordFrequency) {
//            System.out.println(Arrays.toString(entry));
            System.out.print(entry[0] + ": " + entry[1]);
            System.out.println();
        }

        System.out.println("-------");

        ArrayList<String[]> wordFrequency2 = getWordFrequencyByRemovingDuplication(text);
        for (String[] entry : wordFrequency2) {
//            System.out.println(Arrays.toString(entry));
            System.out.print(entry[0] + ": " + entry[1]);
            System.out.println();
        }
//
//        [
//                {"hey", "1"},
//                {"hello", "2"},{
//                {"hi", 1}
//        }


//        ]

//        ArrayList<String> wordFrequency = getWordFrequency(text);
//        System.out.println(wordFrequency);

//        [
//                word: frequency
//        ]
//
//        [optional]: sort the array by frequency

    }

    public static ArrayList<String[]> getWordFrequency(String text) {
        text = text.toLowerCase().replaceAll("[-+.^:,]",""); // remove all special characters from the string

        String[] words = text.split(" ");

        ArrayList<String[]> wordFrequency = new ArrayList<>();

        // go through each word in the sentence
        for (String word : words) {
            int index = -1; // -1 means word does not exist

            for (int i = 0; i < wordFrequency.size(); i++) {
                if (word.equals(wordFrequency.get(i)[0])) {
                    index = i;
                    break;
                }
            }

            // create a new entry if the word does not exist in our data yet
            if (index == -1) {
                String[] entry = new String[2];
                entry[0] = word;
                entry[1] = "1";
                wordFrequency.add(entry);
            } else {
                // otherwise update the frequency counter for such word
                String[] entry = wordFrequency.get(index);
                int counter = Integer.parseInt(entry[1]);
                counter++;
                entry[1] = String.valueOf(counter);
                wordFrequency.set(index, entry);
            }
        }

        return wordFrequency;
    }

    public static ArrayList<String[]> getWordFrequencyByRemovingDuplication(String text) {
        text = text.toLowerCase().replaceAll("[-+.^:,]", "");

        ArrayList<String> words = new ArrayList<>(List.of(text.split(" ")));

//        System.out.println(words);

//        [hi, hey, hello]

        ArrayList<String[]> wordFrequency = new ArrayList<>();

//        wordFrequency.add();

        for (int i = 0; i < words.size(); i++) {
            String key = words.get(i);
            int frequency = 1;
            int j = i + 1;

            while (j < words.size()) {
                if (words.get(j).equals(key)) {
                    frequency++;
                    words.remove(j);
                } else {
                    j++;
                }
            }

            wordFrequency.add(new String[]{key, String.valueOf(frequency)});
        }
//        System.out.println(words);
        return wordFrequency;
    }
}
