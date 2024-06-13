module com.leagueclientjavafx {
    requires javafx.controls;
    requires javafx.fxml;


    opens com.leagueclientjavafx to javafx.fxml;
    exports com.leagueclientjavafx;
}