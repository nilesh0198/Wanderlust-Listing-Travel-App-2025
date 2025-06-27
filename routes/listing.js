const express = require("express");
const router = express.Router();

const wrapAsync = require("../utils/wrapAsync.js");   
const Listing = require("../models/listing.js");
const Review = require("../models/review.js") 

const listingController = require("../controllers/listings.js");
const {isLoggedIn, isOwner, validateListing}= require("../middleware.js")

const multer  = require('multer');
const {storage,cloudinary}= require("../cloudConfig.js");
const upload = multer({storage})


router
    .route("/")
    .get(  wrapAsync(listingController.index))
    
    .post(isLoggedIn, upload.single("listing[image]"),validateListing,wrapAsync(listingController.listingCreated));
    // .post(upload.single("listing[image]"), (req,res)=>{
    //     res.send(req.file)
    // })


//New Route 
router.get("/new",isLoggedIn, listingController.renderNew);

router
    .route("/:id")
    .put( isLoggedIn,isOwner,upload.single("listing[image]"),validateListing,wrapAsync(listingController.listingUpdated))
    .delete(isLoggedIn,isOwner,listingController.delete)
    .get(wrapAsync(listingController.showEachListing));
    

//Edit Update route ; 
router.get("/:id/edit", isLoggedIn, isOwner,  validateListing, wrapAsync(listingController.editRoute));









module.exports= router;

