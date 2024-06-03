package ProgrammingChallenge2.Task3;

public class TheatreShow {
    private String name;
    private String leadActor;
    private int runningTime;
    private StarRating rating = StarRating.UNRATED;

    public TheatreShow(String name, String leadActor, int runningTime) {
        // check for valid values
        if (name == null || name.length() < 1) {
            this.name = "ERROR";
        } else {
            this.name = name.toUpperCase().trim();
        }

        if (leadActor == null || leadActor.length() < 1) {
            this.leadActor = "ERROR";
        } else {
            this.leadActor = toTitleCase(leadActor);
        }


//        this.leadActor = leadActor;

        if (runningTime <= 0) {
            this.runningTime = -1;
        } else {
            this.runningTime = runningTime;
        }
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLeadActor() {
        return this.leadActor;
    }

    public void setLeadActor(String leadActor) {
        this.leadActor = leadActor;
    }

    public int getRunningTime() {
        return this.runningTime;
    }

    public void setRunningTime(int runningTime) {
        if (runningTime <= 0) {
            this.runningTime = -1;
        } else {
            this.runningTime = runningTime;
        }
    }

    public StarRating getStarRating() {
        return this.rating;
    }

    public boolean setStarRating(StarRating rating) {
        if (this.rating != StarRating.UNRATED) {
            return false;
        } else {
            this.rating = rating;
            return true;
        }
    }

    public String toString() {
//        name + : + actor + : + runtime + : + star rating
        return String.format("%s:%s:%d:%s", this.name, this. leadActor, this.runningTime, this.rating);
    }

    // utility method / helper methods
    public static String toTitleCase(String s) {
        s = s.trim();
        String[] n = s.split(" ");
        String fn = n[0].substring(0, 1).toUpperCase() + n[0].substring(1).toLowerCase();
        String ls = n[1].substring(0, 1).toUpperCase() + n[1].substring(1).toLowerCase();
        return String.format("%s %s", fn, ls);
    }
}


