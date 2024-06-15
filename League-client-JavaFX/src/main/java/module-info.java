module com.leagueclientjavafx {
    requires javafx.controls;
    requires javafx.fxml;
    requires javafx.media;

    opens com.leagueclientjavafx to javafx.fxml;
    exports com.leagueclientjavafx;
}