const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const {saveRedirectUrl}= require("../middleware.js");
const userController = require("../controllers/user.js");

//signUp
router
    .route("/signup")
    .get(userController.randerSignup)
    .post( wrapAsync(userController.signup));



//login
router
    .route("/login")
    .get(userController.randerLogin)
    .post( saveRedirectUrl,
        passport.authenticate("local", {
            failureRedirect: "/login" , failureFlash: true,
        }),
        async(req,res)=>{
            req.flash("success", "Welcome to Wanderlust . You are logged in !");
            let url= res.locals.redirectUrl || "/listings"
            res.redirect(url);
        }
    );



//logOut
router.get("/logout",userController.logout)

module.exports = router;
