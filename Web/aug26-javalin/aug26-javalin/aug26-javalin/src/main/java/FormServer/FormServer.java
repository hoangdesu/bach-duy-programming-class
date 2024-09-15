package FormServer;

import io.javalin.Javalin;

import java.util.Arrays;
import java.util.HashMap;
import java.util.concurrent.atomic.AtomicInteger;

public class FormServer {
    static class User {
        private String username;
        private String password;

        //
    }

    public static void main(String[] args) {
        Javalin app = Javalin.create();

        AtomicInteger counter = new AtomicInteger(1);

        app.get("/", ctx -> {
            StringBuilder template = new StringBuilder();
            template.append("""
                    <!DOCTYPE html>
                    <html lang="en">
                    <head>
                        <meta charset="UTF-8">
                        <title>Title</title>
                    </head>
                    <body>
                    <form action="/login" method="post">
                        <div>
                            <label>Username</label>
                            <input type="text" name="username">
                        </div>
                        <div>
                            <label>Password</label>
                            <input type="password" name="password">
                        </div>
                        <button>Login</button>
                    </form>
                    </body>
                    </html>
                    """);

            ctx.html(template.toString());
        });


//        User[] | ArrayList<User> fakeUsers = [
//            {
//                username: string;
//                password: string
//            },
    //        {
    //            username: string;
    //            password: string
    //        },
    //        {
    //            username: string;
    //            password: string
    //        },
//        ]


        app.get("/delete/{name}", ctx -> {
//            trigger delete function
//            find if lang is in list -> delete
//            if not, then stop

//            after all, notify user

//            redirect back to homepage
        });

        app.post("/login", ctx -> {
//            System.out.println(ctx.body());
//            query string

            System.out.println(counter.get());
            counter.getAndIncrement();

            String[] keyValuePairs = ctx.body().split("&");

            HashMap<String, String> queryStringsMap = new HashMap<>();

            for (String pair : keyValuePairs) {
                String[] p = pair.split("=");
                String key = p[0]; // hardcode :/
                String value = p[1];
                queryStringsMap.put(key, value);
            }

            System.out.println(Arrays.toString(keyValuePairs));
            System.out.println(queryStringsMap.toString());

            String username = queryStringsMap.get("username");
            String password = queryStringsMap.get("password");

            if (username.equals("duy") && password.equals("deptrai")) {
                ctx.result("Welcome Duy!!");
            } else {
                ctx.result("Login failed :(");
            }
        });

//        <a href="/{java}/delete">[DELETE]</a>
//        server:
//        app.get("/{java}/delete", ctx -> {
//
//        })

        app.start(6789);
    }
}
