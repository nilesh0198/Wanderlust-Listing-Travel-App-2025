const mongoose= require("mongoose");
const Schema= mongoose.Schema;

const reviewSchema= new Schema({
    comment : {
        type: String,
        required : true,

    },
    rating :{
        type: "number",
        // required : true,
        min:1,
        max: 5,

    },
    createdAt :{
        type:Date,
        default: Date.now(),
    },
    author:{
        type: Schema.Types.ObjectId,
        ref:"User"
    }
   
});




const review = mongoose.model("Review",reviewSchema );

module.exports = review;