import java.util.Arrays;
import java.util.Scanner;

public class Apr5_StringMethods {
    public static void main(String[] args) {
//        encrypt: alphanumeric a-z0-9
//        everything else stays the same

//        String sentence = "Step not on pets";
//
//        if sentence.charAt(i)
//        sentence = sentence.replace(" ", "");
//
//        System.out.println(sentence);


//        String methods
//        method: function inside a class (hàm)

        String fullName = "Bryant Nguyen";

//        fullName = fullName.replace("y", "i"); // -> string
        fullName = fullName.replace("Bryant", "Brian"); // -> string

        fullName = fullName.toUpperCase(); // -> string
        fullName = fullName.toLowerCase();
        // fullName.toTitle() -> "Ho Chi Minh City"
        // .toCapital() -> "Sai gon"

        System.out.println("Length: " + fullName.length());

        System.out.println(fullName.charAt(fullName.length() - 1));


        Scanner sc = new Scanner(System.in);

//        System.out.print("Enter s1: ");
//        String s1 = sc.nextLine();
        String s1 = "hello";
//        System.out.print("Enter s2: ");
        String s2 = "hello";
//        String s2 = sc.nextLine();

        if (s1 == s2) {
            System.out.println("s1 == s2");
        }

        System.out.println("equals() " + s1.equals(s2)); // true

//        char == char

        System.out.println('c' == ('b' + 1));

        System.out.println(fullName);

        String game = "League-of-Legends";
        String[] words = game.split("-"); // delimiter / separator == " "
        System.out.println(Arrays.toString(words));

        System.out.println("I love playing " + words[0]);

        String legends = game.substring(10, game.length()); // endIndex tự động -1
        String of = game.substring(7, 9); // lấy index 7 -> 8
        System.out.println(of);

//        str.substring(index); // from index -> to end of string
//        str.substring(beginIndex, endIndex);

//        String scrapedZedData = "<div class=\"swiper-wrapper\" style=\"transition-duration: 0ms; transform: translate3d(0px, 242px, 0px);\"><li class=\"style__CarouselItem-sc-gky2mu-12 bvXtPv swiper-slide is-active swiper-slide-active\"><button data-testid=\"skins:button-0\" class=\"style__Button-sc-gky2mu-13 jWQnRE\"><div class=\"style__Container-sc-1c9bc3r-0 jXfPGU style__CarouselHighlight-sc-gky2mu-5 kcQANE row-layout\"><canvas class=\"style__Canvas-sc-1c9bc3r-1 bVeQtQ\" width=\"694\" height=\"184\" style=\"left: 3px; top: 3px; width: 347px; height: 92px;\"></canvas></div><div class=\"style__CarouselItemThumbWrapper-sc-gky2mu-14 cSyEgO\"><div class=\"style__CarouselItemThumb-sc-gky2mu-15 kwArAP\"><img src=\"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zed_0.jpg\" style=\"object-fit:cover\" alt=\"\" class=\"style__NoScriptImg-sc-g183su-0 style__Img-sc-g183su-1 gXSlUo cHnjvq\" data-object-fit=\"cover\"><noscript><img src=\"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zed_0.jpg\" style=\"object-fit:cover\" alt=\"\" class=\"style__NoScriptImg-sc-g183su-0 gXSlUo\"/></noscript></div><div class=\"style__Container-sc-1c9bc3r-0 jXfPGU style__CarouselHighlight-sc-gky2mu-5 kcQANE col-layout\"><canvas class=\"style__Canvas-sc-1c9bc3r-1 bVeQtQ\" width=\"24\" height=\"24\" style=\"width: 12px; height: 12px; left: -6px; top: -6px;\"></canvas></div></div><label class=\"style__CarouselItemText-sc-gky2mu-16 gQKDwN\">Zed</label></button></li><li class=\"style__CarouselItem-sc-gky2mu-12 bvXtPv swiper-slide swiper-slide-next\"><button data-testid=\"skins:button-1\" class=\"style__Button-sc-gky2mu-13 jWQnRE\"><div class=\"style__CarouselItemThumbWrapper-sc-gky2mu-14 cSyEgO\"><div class=\"style__CarouselItemThumb-sc-gky2mu-15 kwArAP\"><img src=\"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zed_1.jpg\" style=\"object-fit:cover\" alt=\"\" class=\"style__NoScriptImg-sc-g183su-0 style__Img-sc-g183su-1 gXSlUo cHnjvq\" data-object-fit=\"cover\"><noscript><img src=\"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zed_1.jpg\" style=\"object-fit:cover\" alt=\"\" class=\"style__NoScriptImg-sc-g183su-0 gXSlUo\"/></noscript></div></div><label class=\"style__CarouselItemText-sc-gky2mu-16 gQKDwN\">Shockblade Zed</label></button></li><li class=\"style__CarouselItem-sc-gky2mu-12 bvXtPv swiper-slide\"><button data-testid=\"skins:button-2\" class=\"style__Button-sc-gky2mu-13 jWQnRE\"><div class=\"style__CarouselItemThumbWrapper-sc-gky2mu-14 cSyEgO\"><div class=\"style__CarouselItemThumb-sc-gky2mu-15 kwArAP\"><img src=\"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zed_2.jpg\" style=\"object-fit:cover\" alt=\"\" class=\"style__NoScriptImg-sc-g183su-0 style__Img-sc-g183su-1 gXSlUo cHnjvq\" data-object-fit=\"cover\"><noscript><img src=\"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zed_2.jpg\" style=\"object-fit:cover\" alt=\"\" class=\"style__NoScriptImg-sc-g183su-0 gXSlUo\"/></noscript></div></div><label class=\"style__CarouselItemText-sc-gky2mu-16 gQKDwN\">SKT T1 Zed</label></button></li><li class=\"style__CarouselItem-sc-gky2mu-12 bvXtPv swiper-slide\"><button data-testid=\"skins:button-3\" class=\"style__Button-sc-gky2mu-13 jWQnRE\"><div class=\"style__CarouselItemThumbWrapper-sc-gky2mu-14 cSyEgO\"><div class=\"style__CarouselItemThumb-sc-gky2mu-15 kwArAP\"><img src=\"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zed_3.jpg\" style=\"object-fit:cover\" alt=\"\" class=\"style__NoScriptImg-sc-g183su-0 style__Img-sc-g183su-1 gXSlUo cHnjvq\" data-object-fit=\"cover\"><noscript><img src=\"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zed_3.jpg\" style=\"object-fit:cover\" alt=\"\" class=\"style__NoScriptImg-sc-g183su-0 gXSlUo\"/></noscript></div></div><label class=\"style__CarouselItemText-sc-gky2mu-16 gQKDwN\">PROJECT: Zed</label></button></li><li class=\"style__CarouselItem-sc-gky2mu-12 bvXtPv swiper-slide\"><button data-testid=\"skins:button-4\" class=\"style__Button-sc-gky2mu-13 jWQnRE\"><div class=\"style__CarouselItemThumbWrapper-sc-gky2mu-14 cSyEgO\"><div class=\"style__CarouselItemThumb-sc-gky2mu-15 kwArAP\"><img src=\"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zed_10.jpg\" style=\"object-fit:cover\" alt=\"\" class=\"style__NoScriptImg-sc-g183su-0 style__Img-sc-g183su-1 gXSlUo cHnjvq\" data-object-fit=\"cover\"><noscript><img src=\"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zed_10.jpg\" style=\"object-fit:cover\" alt=\"\" class=\"style__NoScriptImg-sc-g183su-0 gXSlUo\"/></noscript></div></div><label class=\"style__CarouselItemText-sc-gky2mu-16 gQKDwN\">Worlds 2016 Zed</label></button></li><li class=\"style__CarouselItem-sc-gky2mu-12 bvXtPv swiper-slide\"><button data-testid=\"skins:button-5\" class=\"style__Button-sc-gky2mu-13 jWQnRE\"><div class=\"style__CarouselItemThumbWrapper-sc-gky2mu-14 cSyEgO\"><div class=\"style__CarouselItemThumb-sc-gky2mu-15 kwArAP\"><img src=\"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zed_11.jpg\" style=\"object-fit:cover\" alt=\"\" class=\"style__NoScriptImg-sc-g183su-0 style__Img-sc-g183su-1 gXSlUo cHnjvq\" data-object-fit=\"cover\"><noscript><img src=\"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zed_11.jpg\" style=\"object-fit:cover\" alt=\"\" class=\"style__NoScriptImg-sc-g183su-0 gXSlUo\"/></noscript></div></div><label class=\"style__CarouselItemText-sc-gky2mu-16 gQKDwN\">Death Sworn Zed</label></button></li><li class=\"style__CarouselItem-sc-gky2mu-12 bvXtPv swiper-slide\"><button data-testid=\"skins:button-6\" class=\"style__Button-sc-gky2mu-13 jWQnRE\"><div class=\"style__CarouselItemThumbWrapper-sc-gky2mu-14 cSyEgO\"><div class=\"style__CarouselItemThumb-sc-gky2mu-15 kwArAP\"><img src=\"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zed_13.jpg\" style=\"object-fit:cover\" alt=\"\" class=\"style__NoScriptImg-sc-g183su-0 style__Img-sc-g183su-1 gXSlUo cHnjvq\" data-object-fit=\"cover\"><noscript><img src=\"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zed_13.jpg\" style=\"object-fit:cover\" alt=\"\" class=\"style__NoScriptImg-sc-g183su-0 gXSlUo\"/></noscript></div></div><label class=\"style__CarouselItemText-sc-gky2mu-16 gQKDwN\">Galaxy Slayer Zed</label></button></li><li class=\"style__CarouselItem-sc-gky2mu-12 bvXtPv swiper-slide\"><button data-testid=\"skins:button-7\" class=\"style__Button-sc-gky2mu-13 jWQnRE\"><div class=\"style__CarouselItemThumbWrapper-sc-gky2mu-14 cSyEgO\"><div class=\"style__CarouselItemThumb-sc-gky2mu-15 kwArAP\"><img src=\"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zed_15.jpg\" style=\"object-fit:cover\" alt=\"\" class=\"style__NoScriptImg-sc-g183su-0 style__Img-sc-g183su-1 gXSlUo cHnjvq\" data-object-fit=\"cover\"><noscript><img src=\"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zed_15.jpg\" style=\"object-fit:cover\" alt=\"\" class=\"style__NoScriptImg-sc-g183su-0 gXSlUo\"/></noscript></div></div><label class=\"style__CarouselItemText-sc-gky2mu-16 gQKDwN\">PsyOps Zed</label></button></li><li class=\"style__CarouselItem-sc-gky2mu-12 bvXtPv swiper-slide\"><button data-testid=\"skins:button-8\" class=\"style__Button-sc-gky2mu-13 jWQnRE\"><div class=\"style__CarouselItemThumbWrapper-sc-gky2mu-14 cSyEgO\"><div class=\"style__CarouselItemThumb-sc-gky2mu-15 kwArAP\"><img src=\"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zed_30.jpg\" style=\"object-fit:cover\" alt=\"\" class=\"style__NoScriptImg-sc-g183su-0 style__Img-sc-g183su-1 gXSlUo cHnjvq\" data-object-fit=\"cover\"><noscript><img src=\"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zed_30.jpg\" style=\"object-fit:cover\" alt=\"\" class=\"style__NoScriptImg-sc-g183su-0 gXSlUo\"/></noscript></div></div><label class=\"style__CarouselItemText-sc-gky2mu-16 gQKDwN\">Prestige PROJECT: Zed</label></button></li><li class=\"style__CarouselItem-sc-gky2mu-12 bvXtPv swiper-slide\"><button data-testid=\"skins:button-9\" class=\"style__Button-sc-gky2mu-13 jWQnRE\"><div class=\"style__CarouselItemThumbWrapper-sc-gky2mu-14 cSyEgO\"><div class=\"style__CarouselItemThumb-sc-gky2mu-15 kwArAP\"><img src=\"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zed_31.jpg\" style=\"object-fit:cover\" alt=\"\" class=\"style__NoScriptImg-sc-g183su-0 style__Img-sc-g183su-1 gXSlUo cHnjvq\" data-object-fit=\"cover\"><noscript><img src=\"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zed_31.jpg\" style=\"object-fit:cover\" alt=\"\" class=\"style__NoScriptImg-sc-g183su-0 gXSlUo\"/></noscript></div></div><label class=\"style__CarouselItemText-sc-gky2mu-16 gQKDwN\">Debonair Zed</label></button></li><li class=\"style__CarouselItem-sc-gky2mu-12 bvXtPv swiper-slide\"><button data-testid=\"skins:button-10\" class=\"style__Button-sc-gky2mu-13 jWQnRE\"><div class=\"style__CarouselItemThumbWrapper-sc-gky2mu-14 cSyEgO\"><div class=\"style__CarouselItemThumb-sc-gky2mu-15 kwArAP\"><img src=\"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zed_38.jpg\" style=\"object-fit:cover\" alt=\"\" class=\"style__NoScriptImg-sc-g183su-0 style__Img-sc-g183su-1 gXSlUo cHnjvq\" data-object-fit=\"cover\"><noscript><img src=\"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zed_38.jpg\" style=\"object-fit:cover\" alt=\"\" class=\"style__NoScriptImg-sc-g183su-0 gXSlUo\"/></noscript></div></div><label class=\"style__CarouselItemText-sc-gky2mu-16 gQKDwN\">Empyrean Zed</label></button></li><li class=\"style__CarouselItem-sc-gky2mu-12 bvXtPv swiper-slide\"><button data-testid=\"skins:button-11\" class=\"style__Button-sc-gky2mu-13 jWQnRE\"><div class=\"style__CarouselItemThumbWrapper-sc-gky2mu-14 cSyEgO\"><div class=\"style__CarouselItemThumb-sc-gky2mu-15 kwArAP\"><img src=\"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zed_49.jpg\" style=\"object-fit:cover\" alt=\"\" class=\"style__NoScriptImg-sc-g183su-0 style__Img-sc-g183su-1 gXSlUo cHnjvq\" data-object-fit=\"cover\"><noscript><img src=\"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zed_49.jpg\" style=\"object-fit:cover\" alt=\"\" class=\"style__NoScriptImg-sc-g183su-0 gXSlUo\"/></noscript></div></div><label class=\"style__CarouselItemText-sc-gky2mu-16 gQKDwN\">Immortal Journey Zed</label></button></li></div>"


        System.out.println("              Dota            2    ".strip()); // removed leading and trailing white spaces
        System.out.println("    ZED the       Master of      Shadow      ".trim());

        String favGame = "Lien Minh".concat(" Huyen Thoai");
        System.out.println(favGame); // s1 + s2

        System.out.println(favGame.contains("Lien Minh"));

        // continued
//        favGame.indexOf()



        System.out.println(legends);

    }

}
