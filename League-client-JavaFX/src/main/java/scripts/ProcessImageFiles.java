package scripts;

import com.leagueclientjavafx.App;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.StandardCopyOption;
import java.util.ArrayList;
import java.util.Scanner;

public class ProcessImageFiles {
    public static void main(String[] args) throws IOException {
        System.out.println("Processing image files");
        System.out.println(System.getProperty("user.dir"));
//        FileInputStream fis = new FileInputStream("src/main/resources/com/leagueclientjavafx/loading/demo.txt");
//        Scanner sc = new Scanner(fis);

        File folder = new File("src/main/resources/com/leagueclientjavafx/loading/");
        File[] listOfFiles = folder.listFiles();

        ArrayList<String> champions = new ArrayList<>();

        assert listOfFiles != null;
        int counter = 0;
        for (File file : listOfFiles) {
            if (file.isFile()) {
//                System.out.println(file.getName());
                String fileName = file.getName();
                if (fileName.contains("_0.jpg")) {
//                    System.out.println(fileName);

                    String champ = fileName.substring(0, fileName.indexOf("_"));
                    System.out.println(champ);

//                    if default skin, copy to another folder called default_skins
                    String src = "src/main/resources/com/leagueclientjavafx/loading/" + file.getName();
                    String dest = "src/main/resources/com/leagueclientjavafx/default_skins/" + file.getName();
                    Files.copy(new File(src).toPath(), new File(dest).toPath(), StandardCopyOption.REPLACE_EXISTING);
                    counter++;
                }
            }
        }

        System.out.printf("Successfully copied %d champions over to default_skins folder", counter);

//        while (sc.hasNext()) {
//            System.out.println(sc.nextLine());
//        }

    }
}