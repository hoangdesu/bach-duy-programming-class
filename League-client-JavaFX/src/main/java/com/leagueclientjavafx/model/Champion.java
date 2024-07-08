package com.leagueclientjavafx.model;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Champion {
    private String id;
    private String name;
    private String title;
    private String[] roles;
    private String image;
    private String[] skins;

    public Champion(String id, String name, String title, String image, String[] roles) {
        this.id = id;
        this.name = name;
        this.title = title;
        this.image = image;
        this.roles = roles;
    }

    public String getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getTitle() {
        return title;
    }

    public String[] getRoles() {
        return roles;
    }

    public String getImage() {
        return image;
    }

    public String[] getSkins() {
        return skins;
    }

    @Override
    public String toString() {
        return "Champion{" +
                "id='" + id + '\'' +
                ", name='" + name + '\'' +
                ", title='" + title + '\'' +
                ", roles=" + Arrays.toString(roles) +
                ", image='" + image + '\'' +
                ", skins=" + Arrays.toString(skins) +
                '}';
    }
}
