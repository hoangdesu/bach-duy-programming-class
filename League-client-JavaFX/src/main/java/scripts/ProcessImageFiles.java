package scripts;

import com.leagueclientjavafx.App;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.util.ArrayList;
import java.util.Scanner;

public class ProcessImageFiles {
    public static void main(String[] args) throws FileNotFoundException {
        System.out.println("Processing image files");
        System.out.println(System.getProperty("user.dir"));
//        FileInputStream fis = new FileInputStream("src/main/resources/com/leagueclientjavafx/loading/demo.txt");
//        Scanner sc = new Scanner(fis);

        File folder = new File("src/main/resources/com/leagueclientjavafx/loading/");
        File[] listOfFiles = folder.listFiles();

        ArrayList<String> champions = new ArrayList<>();

        assert listOfFiles != null;
        for (File file : listOfFiles) {
            if (file.isFile()) {
//                System.out.println(file.getName());
                String fileName = file.getName();
                if (fileName.contains("_0.jpg")) {
//                    System.out.println(fileName);

                    String champ = fileName.substring(0, fileName.indexOf("_"));
                    System.out.println(champ);

//                    if default skin, copy to another folder called default_skins
                }
            }
        }

//        while (sc.hasNext()) {
//            System.out.println(sc.nextLine());
//        }

    }
}