package May25_OOP;

import java.util.Arrays;

public class May25_4Pillars {
    public static void main(String[] args) {
        Champion zed = new Champion("Zed", new String[]{"assassin"});
        Champion aatrox = new Champion("Aatrox", new String[]{"assassin", "bruiser"});

//        aatrox.name = "QQtrox";
//        aatrox.print();

//        aatrox.roles = new String[]{"mage"};
        aatrox.setRoles(new String[]{"fighter", "support"});

        System.out.println(aatrox.getName());
//        aatrox.setName?

        System.out.println(Arrays.toString(aatrox.getRoles()));

        ManaChampion ahri = new ManaChampion("Ahri", new String[]{"mage", "assassin"});

        System.out.println(ahri.getName());
        ahri.setRoles(new String[]{"mage"});
        System.out.println(Arrays.toString(ahri.getRoles()));

        System.out.println(ahri.energy);

    }

//    4 pillars:
//        1. Encapsulation: data hiding
}
