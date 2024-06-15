package com.leagueclientjavafx;

import javafx.fxml.FXML;
import javafx.fxml.Initializable;
import javafx.geometry.Insets;
import javafx.geometry.Pos;
import javafx.scene.Cursor;
import javafx.scene.control.Button;
import javafx.scene.control.Label;
import javafx.scene.image.Image;
import javafx.scene.image.ImageView;
import javafx.scene.layout.*;
import javafx.scene.media.Media;
import javafx.scene.media.MediaPlayer;
import javafx.scene.paint.Color;
import javafx.util.Duration;

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
        int col = 0;

        while (fileIndex < listOfFiles.length) {
            VBox champContainer = new VBox();
            String filePath = "file:src/main/resources/com/leagueclientjavafx/default_skins/" + listOfFiles[fileIndex].getName();
            String name = listOfFiles[fileIndex].getName().substring(0, listOfFiles[fileIndex].getName().lastIndexOf("_"));
            Label champName = new Label(name);

            System.out.println(">> File path: " + filePath);
            Image champImage = new Image(filePath, 300, 300, true, true);

            ImageView champIv = new ImageView(champImage);

            champContainer.getChildren().addAll(champIv, champName);
            champContainer.setPadding(new Insets(8));
//                champContainer.

//                String cssBordering = "-fx-border-color:red ; \n" //#090a0c
//                        + "-fx-border-insets:3;\n"
//                        + "-fx-border-radius:7;\n"
//                        + "-fx-border-width:5.0";

            champContainer.setAlignment(Pos.CENTER);

            String musicFile = "src/main/resources/com/leagueclientjavafx/mouseover.wav";     // For example

            Media sound = new Media(new File(musicFile).toURI().toString());
            MediaPlayer mediaPlayer = new MediaPlayer(sound);


            champContainer.setOnMouseEntered(mouseEvent -> {
                champContainer.getScene().setCursor(Cursor.HAND);
                champContainer.setBorder(new Border(new BorderStroke(Color.RED,
                        BorderStrokeStyle.SOLID, CornerRadii.EMPTY, BorderWidths.DEFAULT)));
//                    champIv.setStyle(cssBordering);
                mediaPlayer.setStartTime(new Duration(0));
                mediaPlayer.setVolume(0.1);
                mediaPlayer.play();
            });

            champContainer.setOnMouseExited(e -> {
                champContainer.getScene().setCursor(Cursor.DEFAULT);
                champContainer.setBorder(null);
                mediaPlayer.stop();
            });

            gridContainer.add(champContainer, col, row);
            fileIndex++;

            col++;

            if (col > 8) {
                col = 0;
                row++;
            }
        }
    }
}