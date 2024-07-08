package com.leagueclientjavafx.model;

import javafx.geometry.Insets;
import javafx.geometry.Pos;
import javafx.scene.Cursor;
import javafx.scene.Node;
import javafx.scene.control.Label;
import javafx.scene.image.ImageView;
import javafx.scene.layout.*;
import javafx.scene.media.Media;
import javafx.scene.media.MediaPlayer;
import javafx.scene.paint.Color;
import javafx.util.Duration;

import java.io.File;

public class ChampionContainer extends VBox {
    private VBox container;
    public ChampionContainer(ImageView champIv, Label champName) {
        container = new VBox();
        container.getChildren().addAll(champIv, champName);
        container.setPadding(new Insets(8));
        container.setAlignment(Pos.CENTER);

        String musicFile = "src/main/resources/com/leagueclientjavafx/mouseover.wav";     // For example

        Media sound = new Media(new File(musicFile).toURI().toString());


        container.setOnMouseEntered(mouseEvent -> {
            container.getScene().setCursor(Cursor.HAND);
            container.setBorder(new Border(new BorderStroke(Color.RED,
                    BorderStrokeStyle.SOLID, CornerRadii.EMPTY, BorderWidths.DEFAULT)));
//                    champIv.setStyle(cssBordering);
            MediaPlayer mediaPlayer = new MediaPlayer(sound);
            mediaPlayer.setStartTime(new Duration(0));
            mediaPlayer.setVolume(0.1);
            mediaPlayer.play();
//            memory.deallocate
        });

        container.setOnMouseExited(e -> {
            container.getScene().setCursor(Cursor.DEFAULT);
            container.setBorder(null);
//            mediaPlayer.stop();
        });

        container.setOnMouseClicked(event -> {
            System.out.println("Clicked on:" + champName.getText());
        });
    }

    public ChampionContainer(double v) {
        super(v);
    }

    public ChampionContainer(Node... nodes) {
        super(nodes);
    }

    public ChampionContainer(double v, Node... nodes) {
        super(v, nodes);
    }

    public VBox getContainer() {
        return this.container;
    }
}
