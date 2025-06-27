if (process.env.NODE_ENV != "production") {
    require("dotenv").config();
}

const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const mongoose = require('mongoose');
const path = require("path");
const ejsMate = require("ejs-mate");
const methodOverride = require("method-override");
const ExpressError = require("./utils/ExpressError.js");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");

// Import routes
const listings = require("./routes/listing.js");
const reviews = require("./routes/review.js");
const userRouter = require("./routes/user.js");

const MONGO_URL = process.env.MONGO_URL;

// MongoDB Connection with retry logic
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(MONGO_URL, {
            serverSelectionTimeoutMS: 5000,
            retryWrites: true,
        });
        console.log(`✅ MongoDB connection established ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};


connectDB();


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"))
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));

const store = MongoStore.create({
    mongoUrl: MONGO_URL,
    crypto: {
        secret: process.env.SECERET,
    },
    touchAfter: 24 * 3600,      //when session reset 
})
const sessionOptions = {
    store,
    secret: "a",
    resave: false,
    saveUninitialized: true,
    cookie: {
        expire: Date.now() + 1000 * 60 * 60 * 24 * 3,  //time in miliseconds
        maxAge: 1000 * 60 * 60 * 24 * 3,
        httpOnly: true
    }
}
store.on("error", () => {
    console.log("Error in session store")
})


app.use(session(sessionOptions));
app.use(flash());


app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()))

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


const multer = require('multer')
const upload = multer({ dest: 'uploads/' })


app.use((req, res, next) => {
    res.locals.success = req.flash("success");
    // res.locals.failure = req.flash("failure");
    res.locals.error = req.flash("error");
    res.locals.currUser = req.user;
    next();
})


//User  day 50
app.get("/demouser", async (req, res) => {
    let fakeUser = new User({
        email: "sm@google.com",
        username: "smraj",
    });
    let registeredUser = await User.register(fakeUser, "Sm@123");
    res.send(registeredUser);
})


//------------------listings routes------------------------
app.use("/listings", listings);
//-------------------Reviews Post--------------------------
app.use("/listings/:id/reviews", reviews);
//-------------------User Post-----------------------------
app.use("/", userRouter);




app.use("/", async (req, res) => {
    res.redirect("/listings")
    // res.send("This is root dir")
    // res.redirect("/listings")

});

// app.all("*",(err,req,res,next)=>{
//     next(new ExpressError(404, "Page Not Found !"));
// });

//Error handling MiddleWare
app.use((err, req, res, next) => {
    let { statusCode = 500, message = "Somthing went Wrong!" } = err;
    res.status(statusCode).render("error.ejs", { err });

    // res.send("somthing went wrong");
})


app.listen(PORT, () => {
    console.log(`✅ Server is running on port ${PORT}...`);
})
