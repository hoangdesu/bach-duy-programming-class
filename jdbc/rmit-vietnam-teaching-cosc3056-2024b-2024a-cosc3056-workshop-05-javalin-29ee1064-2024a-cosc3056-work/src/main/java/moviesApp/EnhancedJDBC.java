package moviesApp;

import app.Movie;

import java.sql.*;
import java.util.ArrayList;

import org.eclipse.jetty.server.Authentication.User;

public class EnhancedJDBC {

    private static final String dbDriver = "sqlite";
    private static final String dbPath = "database/";
    private static final String dbName = "Movies.db";

    public static final String CONNECTION_STRING = String.format("jdbc:%s:%s%s", dbDriver, dbPath, dbName); // "jdbc:sqlite:database/Movies.db";

    private Connection connection = null;
    private Statement statement;

    public EnhancedJDBC() {
        // try {
        //     connection = DriverManager.getConnection(CONNECTION_STRING); 
        //     statement = connection.createStatement();
        //     statement.setQueryTimeout(30);

        //     // TODO: use singleton to limit to 1 instance of db connection
        //     System.out.println("Connected to database");
        // } catch (SQLException e) {
        //     System.err.println(e.getMessage());
        // } finally {
        // }
    }

    public Connection getConnection() {
        // connection = DriverManager.getConnection(CONNECTION_STRING); 
        System.out.println("Connected to database");
        return this.connection;
    }

    public ArrayList<Movie> getAllMovies() throws SQLException {
        ArrayList<Movie> movies = new ArrayList<>();

        String query = "SELECT * FROM MOVIE";
        ResultSet results = statement.executeQuery(query);

        while (results.next()) {
            int id = results.getInt("mvnumb");
            String name = results.getString("mvtitle");
            int year = results.getInt("yrmde");
            String genre = results.getString("mvtype");

            movies.add(new Movie(id, name, year, genre));
        }

        return movies;
    }

    public ArrayList<Movie> getMoviesByGenre(String genre) throws SQLException {
        // improved by closing interfaces using resources

        ArrayList<Movie> movies = new ArrayList<>();

        PreparedStatement pstmt = null; // open buffer #2
        ResultSet results = null; // open buffer #3

        try {
            String query = """
                    SELECT * FROM MOVIE
                    WHERE MVTYPE LIKE ?
                    """;

            Connection connection = this.getConnection(); // open buffer #1

            System.out.println(query + " - " + genre);

            pstmt = connection.prepareStatement(query);

            pstmt.setString(1, genre);

            results = pstmt.executeQuery();

            while (results.next()) {
                int id = results.getInt("mvnumb");
                String name = results.getString("mvtitle");
                int year = results.getInt("yrmde");
                String movGenre = results.getString("mvtype");

                movies.add(new Movie(id, name, year, movGenre));
            }

        } catch (SQLException e) {
            System.err.println("Error: " + e.getStackTrace().toString());
        } finally {
            if (results != null) results.close(); // close buffer #3
            if (pstmt != null) pstmt.close(); // close buffer #2
            if (this.connection != null) this.connection.close(); // close buffer #1
        }

        return movies;

        // -> []
    }

    public ArrayList<Movie> getMoviesByAgeRating(String rating) {
        ArrayList<Movie> movies = new ArrayList<>();

        String query = """
                    SELECT MVTITLE, MPAA FROM MOVIE
                    WHERE MPAA LIKE ?
                    """;

        // try-with-resources
        // all the resources will automatically be closed when reaching the end of try block
        try (Connection conn = this.getConnection()) { // resource #1
            try (PreparedStatement pstmt = conn.prepareStatement(query)) { // resource #2
                pstmt.setString(1, rating);
                try (ResultSet results = pstmt.executeQuery()) {  // resource #3
                    while (results.next()) {
                        String title = results.getString("MVTITLE");
                        String mpaa = results.getString("MPAA");
        
                        movies.add(new Movie(title, mpaa));
                    }
                } catch (SQLException e) {
                    System.err.println("ResultSet error");
                }
            } catch (SQLException e) {
                System.err.println("PreparedStatement error");
            }
        } catch (SQLException e) {
            // System.err.println(e.getStackTrace().toString());
            System.err.println("Connection error");
            e.printStackTrace();
        } // no need finally


        // gom het ca 3 thang vao 1 try
        // try (
        //     Connection conn = this.getConnection();
        //     PreparedStatement pstmt = conn.prepareStatement(query);
        //     ResultSet results = pstmt.executeQuery();
        // ) {
        //     // lam het tat ca 1 lan
        // } catch (SQLException e) {
        //     // nhung co loi thi ko biet thang nao gay loi
        // }


        return movies;
    }

    // User getUserLogin(String usrName, String usrPwd) {
        
    //     // usrName = "Duy"
    //     usrName = "blabla OR 1 = 1;"
    //     usrPwd = "helloKitty";
        
    //     String query = """
    //             SELECT FROM User
    //             WHERE username = {usrName} AND password = {usrPwd}
    //             """;

    //     query.replace("{usrName}", usrName);

    //     String.format("""
    //             SELECT FROM User
    //             WHERE username = %s AND password = %s
    //             """, usrName, usrPwd);

    //     // SQL Inject attack
    //             SELECT FROM User
    //             WHERE username = blabla OR 1 = 1; AND password = {usrPwd}
                

    }
}
