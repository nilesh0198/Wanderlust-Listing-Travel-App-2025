const User = require("../models/user");

module.exports.randerSignup=(req,res)=>{
    // res.send("form")
    res.render("./users/signup")
};

module.exports.signup =async(req,res,next)=>{
    try{
        let {username, email, password }= req.body;
        const newUser = new User({email,username});
        const registeredUser = await User.register(newUser , password);
        console.log(registeredUser);
        req.login(registeredUser,(err)=>{
            if(err){
                return next(err);
            }
            req.flash("success", "Welcome to Wanderlust");
            res.redirect("/listings");
        });
        
    }catch(e){
        req.flash("error",e.message);
        res.redirect("/signup");
    }

}



//login
module.exports.randerLogin= (req,res)=>{
    res.render("./users/login")
};

// module.exports.randerLogin= async(req,res)=>{
//     // res.send("")res.locals.redirectUrl
//     req.flash("success", "Welcome to Wanderlust . You are logged in !");
//     let url= res.locals.redirectUrl || "/listings"
//     res.redirect(url);
//     // res.redirect("/listings")

// }



//logout
module.exports.logout =(req,res)=>{
    req.logout((err)=>{
        if(err){
            return next(err)
        }
        req.flash("success","Logges out Successfully!")
        res.redirect("/listings")
    })
}