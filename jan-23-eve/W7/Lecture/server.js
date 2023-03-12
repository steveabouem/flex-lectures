const express = require("express");
const morgan = require("morgan");
const app = express();
const bodyParser = require("body-parser");
// const cookieParser = require("cookie-parser");
var cookieSession = require('cookie-session')
var bcrypt = require('bcryptjs');

// port
const port = 3000;


//Middleware
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cookieParser());
app.use(cookieSession({
    name: 'session',
    keys: ['secretKey'],

    // Cookie Options
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
}))

// utilities
const salt = bcrypt.genSaltSync(10);

//View engine
app.set("view engine", "ejs");
const users = {
    1: {
        id: 1,
        email: "joel@gmail.com",
        password: bcrypt.hashSync("lastofus", salt)
    },
    2: {
        id: 2,
        email: "heisenberg@gmail.com",
        password: bcrypt.hashSync("saymyname", salt)
    },
    3: {
        id: 3,
        email: "dwightSchrute@gmail.com",
        password: bcrypt.hashSync("beeds", salt)
    },
    3: {
        id: 3,
        email: "a@a.com",
        password: bcrypt.hashSync("123", salt)
    }
}
// hashed version of db 
// const users = {
//     1: {
//         id: 1,
//         email: 'joel@gmail.com',
//         password: '$2a$10$qghdEvbMDsPRbfup7tyKIelgdg.HG3Ccrql0XA.1c4KHuNHb0XCWy'
//     },
//     2: {
//         id: 2,
//         email: 'heisenberg@gmail.com',
//         password: '$2a$10$qghdEvbMDsPRbfup7tyKIew5Eah04M17Bq1JP7cGWARQ7t6EJOlc.'
//     },
//     3: {
//         id: 3,
//         email: 'a@a.com',
//         password: '$2a$10$qghdEvbMDsPRbfup7tyKIepDnAI81CR0INYgXpmT8X6jHRq8j6iGa'
//     }
// };

app.get("/", (req, res) => {
    const user = users[req.session.user]

    // create email variable
    let userEmail

    if (user) {
        userEmail = user.email;
    } else {
        // this line prevents the app from crashing
        userEmail = false
    }

    res.render("index", { email: userEmail });
});
app.get("/login", (req, res) => {
    res.render("login");
});

app.get("/register", (req, res) => {
    res.render("register");
});

app.post("/login", (req, res) => {
    const inputtedEmail = req.body.email;
    const inputtedPassword = req.body.password;
    //find the user first
    for (let userId in users) {
        if (users[userId].email === inputtedEmail) {
            //if a user is found, compare the password
            const validation = bcrypt.compareSync(inputtedPassword, users[userId].password); // TRUE || FALSE
            if (validation) {
                //If it matches, log them in and reroute to index
                // res.cookie("user", users[userId]);
                req.session.user = users[userId];
                res.redirect("/");
            }
        }
        else {
            // if no matches inform client
            // the code below was blocking our app: 
            // res.status(400).send('You failed!');
            res.json('You really failed!');
        }
    }
});

// Task: enforce hashing for all new users
app.post("/register", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    //handle missing email/password
    if (!email || !password) {
        res.status(400).send('Missing registration information');
    }

    // generate id
    const newUserId = Math.random().toString(30).substring(2, 6);
    // secure password / create a hash  for it
    const hashedPassword = bcrypt.hashSync(password, salt);

    const newUser = {
        id: newUserId,
        email: email,
        password: hashedPassword
    };
    // add new user
    users[newUserId] = newUser;
    console.log('DATABASE WITH NEW USER: ', users);
    res.redirect("/");
});

// Task: logout user
app.post("/logout", (req, res) => {
    req.session = null;
    res.redirect("/");
});

app.listen(port, () => {
    console.log(`Port ${port} is live`);
});