const express = require("express");
const router = express.Router({mergeParams: true});

const wrapAsync = require("../utils/wrapAsync.js");
const Review = require("../models/review.js")
const Listing = require("../models/listing.js");


const {isLoggedIn,validateReview,isReviewOwner}= require("../middleware.js")
const reviewController =require("../controllers/review.js")
  




//post review routes
router.post(
    "/",
    isLoggedIn,
    validateReview,
    wrapAsync(reviewController.postReview)
);

//delete reviews route
router.delete(
    "/:reviewId",
    isLoggedIn,
    isReviewOwner,
    wrapAsync(reviewController.deleteReview)

);



module.exports= router;