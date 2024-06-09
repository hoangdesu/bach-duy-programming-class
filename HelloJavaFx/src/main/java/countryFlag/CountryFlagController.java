package countryFlag;

import javafx.event.Event;
import javafx.event.EventHandler;
import javafx.fxml.FXML;
import javafx.fxml.Initializable;
import javafx.scene.Cursor;
import javafx.scene.ImageCursor;
import javafx.scene.Scene;
import javafx.scene.control.Label;
import javafx.scene.image.Image;
import javafx.scene.image.ImageView;
import javafx.scene.layout.VBox;
import javafx.scene.text.Text;

public class CountryFlagController  {
    @FXML
    ImageView vietnamFlag;

    @FXML
    ImageView taiwanFlag;

    @FXML
    ImageView usaFlag;

    @FXML
    ImageView japanFlag;

    @FXML
    Label countryname;

    public void onMouseEntered()  {
        System.out.println("Mouse entered");
//        vietnamFlag.getScene().setCursor(Cursor.HAND);

        Image image = new Image("file:src/main/resources/countryFlag/images/hanoi.jpg", 300, 300, true, true);


        ImageView capitalIv = new ImageView(image);
        Label capital = new Label("Hanoi");
        VBox imageContainer = new VBox(capitalIv, capital);

        vietnamFlag.getScene().setCursor(new ImageCursor(image,
                0,
                0 ));

//        vietnamFlag.getScene().setCursor();

    }

    public void onMouseExited() {
        System.out.println("Mouse exited");
        vietnamFlag.getScene().setCursor(Cursor.DEFAULT);
    }
}
