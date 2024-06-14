package com.leagueclientjavafx;

import javafx.fxml.FXML;
import javafx.fxml.Initializable;
import javafx.geometry.Insets;
import javafx.scene.control.Button;
import javafx.scene.control.Label;
import javafx.scene.image.Image;
import javafx.scene.image.ImageView;
import javafx.scene.layout.GridPane;
import javafx.scene.layout.VBox;

import java.io.File;
import java.net.URL;
import java.util.Arrays;
import java.util.ResourceBundle;

public class AppController implements Initializable {
    @FXML
    GridPane gridContainer;

    @Override
    public void initialize(URL location, ResourceBundle resources) {
//        System.out.println("Created AppController");

        File folder = new File("src/main/resources/com/leagueclientjavafx/default_skins/");
        File[] listOfFiles = folder.listFiles();

        assert listOfFiles != null;
        Arrays.sort(listOfFiles);

        int fileIndex = 0;

        int row = 0;
        while (fileIndex < 152) {
            for (int j = 0; j < 8; j++) {
                VBox champContainer = new VBox();
                String filePath = "file:src/main/resources/com/leagueclientjavafx/default_skins/" + listOfFiles[fileIndex].getName();
                String name = listOfFiles[fileIndex].getName().substring(0, listOfFiles[fileIndex].getName().lastIndexOf("_"));
                Label champName = new Label(name);

                System.out.println(">> File path: " + filePath);
                Image champImage = new Image(filePath, 300, 300, true, true);

                ImageView champIv = new ImageView(champImage);

                champContainer.getChildren().addAll(champIv, champName);
                champContainer.setPadding(new Insets(8));
                gridContainer.add(champContainer, j, row);
                fileIndex++;
            }
            row++;
        }
    }
}