import java.io.*;
import java.util.Scanner;

public class Apr15_ReadWriteFiles {
    public static void main(String[] args) throws IOException {
        
//        csv: comma-separated values

        // TODO: program to emulate a database
//        - csv file
//        - store users following the format: username, password
        
        String filePath = "./src/data/users.csv";

        FileInputStream fis = new FileInputStream(filePath);
        Scanner fs = new Scanner(fis);
//
//        System.out.println(fs.nextLine());
//        System.out.println(fs.nextLine());
//        System.out.println(fs.nextLine());
        
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

//        pw.write("hello");

        System.out.println("> Creating new user");

        System.out.print("Enter your username: ");
        String username = userSc.nextLine();
        System.out.print("Enter your password: ");
        String password = userSc.nextLine();

        currentFileContent.append(String.format("%s,%s", username, password));

        pw.write(currentFileContent.toString());

        System.out.println("Saved user " + username + " to the database successfully");

        pw.close();


//        => Login app: authentication
//        1. allow user to login with current account
//        2. create new user account


//        CRUD:
//                Create
//                Read
//                Update
//                Delete


    }
}
