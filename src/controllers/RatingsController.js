/*

userId
rating
comment
*/ 
const RatingController = {};

import Rating from "../models/Ratings.js";

RatingController.getRating = async (req,res) => {

    const Ratings = await Rating.find();
    res.json(Ratings)
   
}

RatingController.insertRating = async (req,res) => {

    const {UserId, rating, comment} = req.body;
    const newRating = new Rating({UserId, rating, comment})
    await newRating.save();
    res.json ({message: "Rating saved"});
}

RatingController.updateRating = async (req,res) => {
    const {UserId, rating, comment} = req.body;
     const updatedRating = await Rating.findByIdAndUpdate(req.params.id,{UserId, rating, comment} , {new:true})
     res.json ({message: "Rating upsdated"});

}

RatingController.deleteRating = async (req,res) => {

    await Rating.findByIdAndDelete(req.params.id);
    res.json ({message: "Rating deleted"});

}

export default RatingController;          

  
 
 
 
 
 
 
 
 
 
 
