package com.leagueclientjavafx;

import com.leagueclientjavafx.model.Champion;
import javafx.application.Application;
import javafx.fxml.FXMLLoader;
import javafx.geometry.Rectangle2D;
import javafx.scene.Scene;
import javafx.stage.Screen;
import javafx.stage.Stage;

import java.io.IOException;

public class App extends Application {

//    public static Champion selectedChamp;

    @Override
    public void start(Stage stage) throws IOException {
        FXMLLoader fxmlLoader = new FXMLLoader(App.class.getResource("library-view.fxml"));
        Scene scene = new Scene(fxmlLoader.load(), 1920, 1080);

        Rectangle2D screenBounds = Screen.getPrimary().getBounds();
        System.out.println(screenBounds);

        stage.setTitle("League of Legends client");
        stage.setScene(scene);
        stage.show();
    }

    public static void main(String[] args) {
        launch();
    }

//    public static void setSelectedChamp(Champion selectedChamp) {
//        App.selectedChamp = selectedChamp;
//    }


}