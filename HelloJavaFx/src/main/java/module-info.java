module com.hellojavafx {
    requires javafx.controls;
    requires javafx.fxml;


    opens com.hellojavafx to javafx.fxml;
    exports com.hellojavafx;
}