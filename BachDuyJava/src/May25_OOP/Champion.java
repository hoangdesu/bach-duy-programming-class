package May25_OOP;

public class Champion {

    // encapsulated data
    private String name;
    private String[] roles;

    public String energy = "energy";

    public Champion(String name, String[] roles) {
        this.name = name;
        this.roles = roles;
    }

    public void print() {
        System.out.print("Champion:" + this.name + "\nRoles: ");
        for (String r : this.roles) {
            System.out.print(r);
            System.out.print(", ");
        }
    }

    // expose allowed data through
    // getter vs setter methods
    public String getName() {
        return name;
    }

    public String[] getRoles() {
        return roles;
    }

    public void setRoles(String[] roles) {
        this.roles = roles;
    }
}
