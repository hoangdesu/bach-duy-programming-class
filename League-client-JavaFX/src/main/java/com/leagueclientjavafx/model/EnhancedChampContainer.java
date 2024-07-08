package com.leagueclientjavafx.model;

import com.leagueclientjavafx.App;
import javafx.fxml.FXMLLoader;
import javafx.geometry.Insets;
import javafx.geometry.Pos;
import javafx.scene.Cursor;
import javafx.scene.Node;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.control.Label;
import javafx.scene.image.Image;
import javafx.scene.image.ImageView;
import javafx.scene.layout.*;
import javafx.scene.media.Media;
import javafx.scene.media.MediaPlayer;
import javafx.scene.paint.Color;
import javafx.stage.Stage;
import javafx.util.Duration;

import java.io.File;
import java.io.IOException;

public class EnhancedChampContainer extends VBox {
    private VBox container;
    public EnhancedChampContainer(Champion champion) {
        container = new VBox();

        Image champImage = new Image(champion.getImage(), 300, 300, true, true);
        ImageView champIv = new ImageView(champImage);

        Label champNameLabel = new Label(champion.getName());

        container.getChildren().addAll(champIv, champNameLabel);
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
        });

        container.setOnMouseExited(e -> {
            container.getScene().setCursor(Cursor.DEFAULT);
            container.setBorder(null);
        });

        container.setOnMouseClicked(event -> {
            Stage stage = (Stage)((Node)event.getSource()).getScene().getWindow();

            VBox container = new VBox();
            Label champName = new Label(champion.getName());
            Button backBtn = new Button("Back to home");

            Scene homeScene;
            FXMLLoader fxmlLoader = new FXMLLoader(App.class.getResource("library-view.fxml"));
            try {
                homeScene = new Scene(fxmlLoader.load(), 1920, 800);
            } catch (IOException e) {
                throw new RuntimeException(e);
            }

            backBtn.setOnMouseClicked(e -> {
                stage.setScene(homeScene);
            });


            container.getChildren().addAll(champName, backBtn);


//            loader.setLocation(getClass().getResource("GameView.fxml"));
//            Parent gameViewParent = loader.load();

//            GameViewController gameViewController = loader.getController();
//            gameViewController.setHelloPlayer(playerNameTF.getText());

//            Scene gameViewScene = new Scene(gameViewParent, 1000, 700);
//            stage.setScene(gameViewScene);



            Scene champScene = new Scene(container, 1920, 800);
//            Stage stage = (Stage) container.getScene().getWindow();
            if (stage != null) stage.setScene(champScene);
//            else System.out.println(stage.toString());

            System.out.println("Clicked on:" + champion.getName() + ": " + champion.getTitle());
        });
    }

    public EnhancedChampContainer(double v) {
        super(v);
    }

    public EnhancedChampContainer(Node... nodes) {
        super(nodes);
    }

    public EnhancedChampContainer(double v, Node... nodes) {
        super(v, nodes);
    }

    public VBox getContainer() {
        return this.container;
    }
}
