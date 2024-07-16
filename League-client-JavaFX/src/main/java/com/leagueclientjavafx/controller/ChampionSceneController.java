package com.leagueclientjavafx.controller;

import com.leagueclientjavafx.App;
import com.leagueclientjavafx.model.Champion;
import com.leagueclientjavafx.model.SelectedChampion;
import javafx.fxml.FXML;
import javafx.fxml.FXMLLoader;
import javafx.fxml.Initializable;
import javafx.scene.Node;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.control.Label;
import javafx.scene.image.Image;
import javafx.scene.image.ImageView;
import javafx.stage.Stage;

import java.io.IOException;
import java.net.URL;
import java.util.ResourceBundle;

public class ChampionSceneController implements Initializable {
    @FXML
    Button btnBack;

    @FXML
    Label labelName;

    @FXML
    ImageView bgSplash;


//    Champion selectedChamp;
//    EnhancedChampContainer enhancedChampContainer;

    Champion champion;

    @Override
    public void initialize(URL url, ResourceBundle resourceBundle) {
        // inject data

        champion = SelectedChampion.champion;

//        champion.getName?
//        Champion selectedChamp = EnhancedChampContainer.getSelectedChamp();
//        Champion selectedChamp = App.selectedChamp;
        labelName.setText(champion.getName());
        System.out.println(champion);
        String splash = champion.getImage().replace("default_skins", "splash");
        bgSplash.setImage(new Image(splash));


//        System.out.println(SelectedChampion.champion.getName());

//        System.out.println("Loaded: " + );

        btnBack.setOnMouseClicked(mouseEvent -> {
            Stage stage = (Stage) ((Node) mouseEvent.getSource()).getScene().getWindow();

            Scene homeScene;
            FXMLLoader homeSceneLoader = new FXMLLoader(App.class.getResource("library-view.fxml"));
            try {
                homeScene = new Scene(homeSceneLoader.load(), 1920, 1080);
            } catch (IOException e) {
                throw new RuntimeException(e);
            }

//            System.out.println(stage.toString());
            stage.setScene(homeScene);

        });
    }

    public void setChampion(Champion champion) {
        this.champion = champion;
    }
//    public void setSelectedChampion(Champion selectedChamp) {
//        this.selectedChamp = selectedChamp;
//    }
}
