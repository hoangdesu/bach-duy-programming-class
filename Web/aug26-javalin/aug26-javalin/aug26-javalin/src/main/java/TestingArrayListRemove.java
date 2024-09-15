import java.util.ArrayList;

public class TestingArrayListRemove {
    static class User {
        public String name;
        public User(String name) {
            this. name = name;
        }
    }


    public static void main(String[] args) {
        ArrayList<User> users = new ArrayList<>();
        users.add(new User("a"));
        users.add(new User("b"));
        users.add(new User("c"));

//        System.out.println(users.toString());

        // linear search
        for (User u : users) {
            if (u.name.equals("b")) {
                users.remove(u);
                u.name = "new value";
                break;
            }
        }

        for (User u : users) {
            System.out.println(u.name);
        }
    }
}
