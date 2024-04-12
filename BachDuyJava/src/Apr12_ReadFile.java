import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Scanner;

public class Apr12_ReadFile {
    public static void main(String[] args) throws FileNotFoundException {
        FileInputStream fis = new FileInputStream("league.json");

        Scanner sc = new Scanner(fis);

        StringBuilder fileContent = new StringBuilder();
        String line;

        int counter = 1;

        while (sc.hasNext()) {
//            fileContent.append(sc.nextLine());
//            fileContent.append('\n');

            // logic to find and print info

            line = sc.nextLine();

            // extract value for "name" from each line
            if (line.indexOf("name") != -1) {
                int startIndex = line.indexOf("name") + 8;
                int stopIndex = line.lastIndexOf("\"");

                String championName = line.substring(startIndex, stopIndex);
                System.out.println(counter + ". " + championName);
                counter++;

//                System.out.println("line: " + line);
            }

            if (line.contains("abilities")) {
//                System.out.println("skipping line with abilities: " + line);
                String[] abilities = {"Q", "W", "E", "R"};
                for (int i = 0; i < 4; i++) {
                    String line2 = sc.nextLine();
                    String ability = line2.substring(line2.indexOf("\"") + 1, line2.length() - 2);
                    System.out.printf("\t%s: %s%n", abilities[i], ability);
                }
                System.out.println();

            }


//            champions.key => value
//
//            champions[0].name => aatrox


//        System.out.println(fileContent);

//        int startIndex = fileContent.indexOf("name") + 8;
////        int
//        System.out.println(fileContent.substring(startIndex, startIndex + 6));

        }

    }
}

//1. Aatrox
//2. Ahri

//Welcome to OP.GG
//
//        while:
//    Enter 1 to see all champion list:
//    Enter 2 to search for champion name:
//    Enter 0 to quit:
//
//Enter a champion name
//if found
//if not found
