package counterApp;

import javafx.event.Event;
import javafx.event.EventHandler;
import javafx.fxml.FXML;
import javafx.scene.control.Button;
import javafx.scene.control.Label;

public class CounterController {
    @FXML
    Button btnDecrease;

    @FXML
    Button btnIncrease;

    @FXML
    Label lbValue;

    // JS
//    const btnIncrease = document.querySelector("#btnIncrease");
//    btnIncrease.addEventListener('click', () => {
//        // ...
//    })

    private int value = 1;

//    2 ways to bind event listeners

    public void increase() {
        this.value++;
        lbValue.setText(this.value + ""); // remember to IMPERATIVELY set the UI change
        System.out.println(this.value);
    }

    public void decrease() {
        this.value--;
        lbValue.setText(this.value + "");
        System.out.println(this.value);
    }

}
