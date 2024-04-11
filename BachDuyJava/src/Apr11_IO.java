import java.io.*;
import java.util.Scanner;

public class Apr11_IO {
    public static void main(String[] args) throws IOException {
//        if (true)
//        {
//            System.out.println("This is not Java style");
//        }
//
//        int x, y;
//        x = 1;
//        y = 1;
//
//        int a = 1; int b = 2;

//        if (true) System.out.println("no need curly braces");

//        final int BIRTH_YEAR = 1995;

//        < 100

//        PrintStream ps = new PrintStream();
//        ps.print();

//        System.out.println();

        Scanner sc = new Scanner(System.in);

//        byte data
//        byte
//        int input = System.in.read();

//        System.out.println("input: " + input);

//        StringWriter ageStream = new StringWriter();
//        // Augments character stream with print()
//        PrintWriter ageOSS = new PrintWriter(ageStream);
//
//        String age = sc.nextLine();
//        ageOSS.println("haha");

        FileInputStream fis = new FileInputStream("hi.txt"); // doc file tu root

        Scanner fileScanner = new Scanner(fis);

        String input = fileScanner.nextLine();

        System.out.println(input);

        System.out.println(fileScanner.nextLine());




        fis = new FileInputStream("./src/Apr10_SwitchCase.java");

        fileScanner = new Scanner(fis);

//        input = fileScanner.nextLine();
//
//        System.out.println(input);

//        System.out.println(fileScanner.hasNext());

        int lineCounter = 1;
        while (fileScanner.hasNext()) {
            System.out.println(lineCounter + ". " + fileScanner.nextLine());
            lineCounter++;
        }

        fis.close(); // avoid memory leak

        // writing to a file
        PrintWriter writer1 = new PrintWriter(new File("from-java.txt"));
        writer1.write("Like Java, Spring, Hibernate, Android, PHP etc.\n");
        writer1.println("new line java");
        writer1.print("this is");
        writer1.println("line 3");
        writer1.flush();
        writer1.close();

        fis = new FileInputStream("champions.json");
        fileScanner = new Scanner(fis);
        while (fileScanner.hasNext()) {
            System.out.println(fileScanner.nextLine());
            lineCounter++;
        }


//        1. Aatrox:
//            Q: ...
//            W: ...
//            E: ...
//            R: ...
//
//        2. ...
//
//
//        50. Zyra:
//        Q: ...
//        W: ...
//        E: ...
//        R: ...


    }
}
