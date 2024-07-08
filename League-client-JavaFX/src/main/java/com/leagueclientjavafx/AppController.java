package com.leagueclientjavafx;

import com.leagueclientjavafx.model.Champion;
import com.leagueclientjavafx.model.ChampionContainer;
import com.leagueclientjavafx.model.EnhancedChampContainer;
import javafx.fxml.FXML;
import javafx.fxml.Initializable;
import javafx.geometry.Insets;
import javafx.scene.control.Label;
import javafx.scene.control.ScrollPane;
import javafx.scene.image.Image;
import javafx.scene.image.ImageView;
import javafx.scene.layout.*;
import javafx.scene.media.Media;
import javafx.scene.media.MediaPlayer;
import javafx.scene.paint.Color;
import javafx.util.Duration;
import org.json.JSONArray;
import org.json.JSONObject;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.net.URL;
import java.util.*;

public class AppController implements Initializable {
    @FXML
    GridPane gridContainer;

    @FXML
    ScrollPane scrollPane;

    @Override
    public void initialize(URL location, ResourceBundle resources) {
//        System.out.println("Created AppController");
//        archived();


        try {
            FileInputStream fis = new FileInputStream("src/main/resources/com/leagueclientjavafx/data/champion.json");
            Scanner sc = new Scanner(fis);

            StringBuilder sb = new StringBuilder();
            while (sc.hasNext()) {
                sb.append(sc.nextLine());
            }

            JSONObject json = new JSONObject(sb.toString());
            JSONObject data = (JSONObject) json.get("data");

            ArrayList<Champion> champions = new ArrayList<Champion>();

            ArrayList<String> sortedKeys = new ArrayList<String>(data.keySet());

//            for (String key : data.keySet()) {
//                JSONObject champ = (JSONObject) data.get(key);
//                sortedKeys.add(champ.get("name").toString());
//            }

            Collections.sort(sortedKeys);

            String filePath = "file:src/main/resources/com/leagueclientjavafx/default_skins/";

            for (String key : sortedKeys) {
                JSONObject champ = (JSONObject) data.get(key);

                String name = (String) champ.get("name");
                String image = filePath + key + "_0.jpg";
                String title = champ.getString("title");

                JSONArray rolesJSON = (JSONArray) champ.get("tags");
                String[] roles = new String[rolesJSON.length()];

                for (int i = 0; i < rolesJSON.length(); i++) {
                    roles[i] =  rolesJSON.get(i).toString();
                }

                champions.add(new Champion(key, name, title, image, roles));
            }

//            for (Champion c : champions) {
//                System.out.println(c);
//            }

            int champIndex = 0;

            int row = 0;
            int col = 0;

            while (champIndex < champions.size()) {
                EnhancedChampContainer champContainer = new EnhancedChampContainer(champions.get(champIndex));

                gridContainer.add(champContainer.getContainer(), col, row);
                champIndex++;

                col++;
                if (col > 8) {
                    col = 0;
                    row++;
                }
            }

//            String bgImage = "file:src/main/resources/com/leagueclientjavafx/splash/" + "Zed_30.jpg";
//            BackgroundImage myBI = new BackgroundImage(new Image(bgImage, 1920, 1080, false, true),
//                    BackgroundRepeat.REPEAT, BackgroundRepeat.NO_REPEAT, BackgroundPosition.DEFAULT,
//                    BackgroundSize.DEFAULT);
//
//            champContainer.setBackground(new Background(new BackgroundFill(Color.BLACK,
//                    CornerRadii.EMPTY,
//                    Insets.EMPTY)));


//            gridContainer.setBackground(new Background(myBI));


        } catch (FileNotFoundException e) {
            throw new RuntimeException(e);
        }

    }


    public void archived() {
        File folder = new File("src/main/resources/com/leagueclientjavafx/default_skins/");
        File[] listOfFiles = folder.listFiles();

        assert listOfFiles != null;
        Arrays.sort(listOfFiles);

        int fileIndex = 0;

        int row = 0;
        int col = 0;

        scrollPane.setStyle("-fx-background-color:transparent;");

        while (fileIndex < listOfFiles.length) {
//            VBox champContainer = new VBox();
            String filePath = "file:src/main/resources/com/leagueclientjavafx/default_skins/" + listOfFiles[fileIndex].getName();
            String name = listOfFiles[fileIndex].getName().substring(0, listOfFiles[fileIndex].getName().lastIndexOf("_"));
            Label champName = new Label(name);

//            System.out.println(">> File path: " + filePath);
            Image champImage = new Image(filePath, 300, 300, true, true);

            ImageView champIv = new ImageView(champImage);

            ChampionContainer champContainer = new ChampionContainer(champIv, champName);

            String bgImage = "file:src/main/resources/com/leagueclientjavafx/splash/" + "Zed_30.jpg";
            BackgroundImage myBI = new BackgroundImage(new Image(bgImage, 1920, 1080, false, true),
                    BackgroundRepeat.REPEAT, BackgroundRepeat.NO_REPEAT, BackgroundPosition.DEFAULT,
                    BackgroundSize.DEFAULT);

            champContainer.setBackground(new Background(new BackgroundFill(Color.BLACK,
                    CornerRadii.EMPTY,
                    Insets.EMPTY)));


            gridContainer.setBackground(new Background(myBI));
            gridContainer.add(champContainer.getContainer(), col, row);
            fileIndex++;

            col++;

            if (col > 8) {
                col = 0;
                row++;
            }

//            ArrayList<Champion>
        }
    }
}