import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.PrintWriter;
import java.util.Scanner;

public class Apr15_LoginApp {
    public static void main(String[] args) throws FileNotFoundException {
        String filePath = "./src/data/users.csv";

        System.out.println("Welcome to dashboard");
        while (true) {
            Scanner sc = new Scanner(System.in);
            System.out.println("1. Login\n2.Create new user");
            System.out.print("Please enter your option: ");
            FileInputStream fis = new FileInputStream(filePath);
            Scanner fs = new Scanner(fis);

//        1. read current content from file, temporarily save to a string

            StringBuilder currentFileContent = new StringBuilder();

            while (fs.hasNext()) {
                currentFileContent.append(fs.nextLine());
                currentFileContent.append("\n");
            }

//        System.out.println("currentFileContent = " + currentFileContent);



//        2. write new content back to file
            FileOutputStream fos = new FileOutputStream(filePath);

            PrintWriter pw = new PrintWriter(fos);
            Scanner userSc = new Scanner(System.in);

            System.out.println("> Creating new user");

            System.out.print("Enter your username: ");
            String username = userSc.nextLine();
            System.out.print("Enter your password: ");
            String password = userSc.nextLine();

            currentFileContent.append(String.format("%s,%s", username, password));

            pw.write(currentFileContent.toString());

            System.out.println("Saved user " + username + " to the database successfully");

            pw.close();
        }


    }
}
