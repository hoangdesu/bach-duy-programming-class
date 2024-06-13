package countryFlag;

import javafx.application.Application;
import javafx.fxml.FXML;
import javafx.fxml.FXMLLoader;
import javafx.scene.Cursor;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.image.Image;
import javafx.scene.image.ImageView;
import javafx.stage.Stage;

public class CountryFlagApp extends Application {
    @FXML
    ImageView vietnamFlag;

    @Override
    public void start(Stage stage) throws Exception {
        FXMLLoader loader = new FXMLLoader(CountryFlagApp.class.getResource("country-flag.fxml"));
        Scene scene = new Scene(loader.load(), 800, 650);

//        vietnamFlag.setOnMouseEntered(mouseEvent -> {
//            scene.setCursor(Cursor.CROSSHAIR);
////            scene.setCursor(new Cursor(new Image("file:/")));
//        });
//
//        vietnamFlag.setOnMouseExited(mouseEvent -> {
//
//        });

        stage.setScene(scene);
        stage.setTitle("Country Flags");
        stage.show();
    }

    public static void main(String[] args) {
        Application.launch();
    }
}
