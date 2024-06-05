package com.hellojavafx;

import javafx.fxml.FXML;
import javafx.scene.control.Button;
import javafx.scene.control.Label;

public class HelloController {
//    1. retrieve element from FXML using id
    @FXML
    private Label welcomeText;

    @FXML
    private Button noButton;

    private boolean showText = false;

    @FXML
    protected void onHelloButtonClick() {
        if (showText) {
            welcomeText.setText("");
        } else {
            welcomeText.setText("Welcome to JavaFX Application!");
        }
        showText = !showText; // toggle showText boolean
    }

    // 2. implement logic for the retrieved component
    @FXML
    public void moveRandom() {
        double x = 500 + Math.random() * 500;
        double y = 500 + Math.random() * 500;
        noButton.setLayoutX(x);
        noButton.setLayoutY(y);

        System.out.println("x="+x);
        System.out.println("y="+y);
    }

}