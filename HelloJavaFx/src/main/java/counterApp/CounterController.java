package counterApp;

import javafx.event.Event;
import javafx.event.EventHandler;
import javafx.fxml.FXML;
import javafx.scene.control.Button;
import javafx.scene.control.Label;
import javafx.scene.layout.Background;
import javafx.scene.layout.BackgroundFill;
import javafx.scene.paint.Color;

public class CounterController {
    @FXML
    Button btnDecrease;

    @FXML
    Button btnIncrease;

    @FXML
    Label lbValue;

    @FXML
    Label error;

    // JS
//    const btnIncrease = document.querySelector("#btnIncrease");
//    btnIncrease.addEventListener('click', () => {
//        // ...
//    })

    private int value = 1;

//    2 ways to bind event listeners

    public void increase() {
        if (this.value == 0) {
            error.setText("");
        }
        this.value++;
        lbValue.setText(this.value + ""); // remember to IMPERATIVELY set the UI change
        System.out.println(this.value);
    }

    public void decrease() {
        if (this.value == 0) {
            error.setTextFill(Color.RED);
            error.setText("Error: cannot go negative");
        } else {
            this.value--;
            lbValue.setText(this.value + "");
        }

        System.out.println(this.value);
    }

}
