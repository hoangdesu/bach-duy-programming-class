package counterApp;

import javafx.application.Application;
import javafx.event.ActionEvent;
import javafx.event.EventHandler;
import javafx.fxml.FXMLLoader;
import javafx.geometry.Insets;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.layout.Background;
import javafx.scene.layout.BackgroundFill;
import javafx.scene.layout.CornerRadii;
import javafx.scene.paint.Color;
import javafx.stage.Stage;

//MVC pattern
public class CounterApp extends Application {

    private static int counter = 1;

    @Override
    public void start(Stage stage) throws Exception {
        FXMLLoader fxmlLoader = new FXMLLoader(CounterApp.class.getResource("counter-app-view.fxml"));
        Scene scene = new Scene(fxmlLoader.load(), 600, 400);

        Button btnClickMe = new Button();
        btnClickMe.setText(counter + "");
        // lambda
        btnClickMe.setOnMouseClicked(mouseEvent -> {
//            System.out.println("Click click!!!");
            btnClickMe.setText(++counter + "");
            System.out.println(mouseEvent.getClickCount());
//            System.out.println(mouseEvent.);
            System.out.println(mouseEvent.getX() + ":" + mouseEvent.getY());
            if (mouseEvent.getX() < 200) {
                btnClickMe.setBackground(new Background(new BackgroundFill(Color.RED, new CornerRadii(0), Insets.EMPTY)));
            } else {
                btnClickMe.setBackground(new Background(new BackgroundFill(Color.BLUE, new CornerRadii(0), Insets.EMPTY)));
            }
        });


        EventHandler<ActionEvent> onBtnClick = event -> {
//                System.out.println("Hello World!");
            System.out.println("Clicked on btn");

        };

//        same shit
//        EventHandler<ActionEvent> onBtnClick = new EventHandler<>() {
//            @Override
//            public void handle(ActionEvent event) {
////                System.out.println("Hello World!");
//                System.out.println("Clicked on btn");
//
//            }
//        };

        btnClickMe.setOnAction(onBtnClick);


        Scene btnScene = new Scene(btnClickMe, 500, 500);

        stage.setTitle("Counter app");
        stage.setScene(scene);
        stage.show();
    }

    public static void main(String[] args) {
        launch();
    }
}
