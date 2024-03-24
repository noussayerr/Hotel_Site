const place= require('../models/place.models')
const User = require("../models/user.models")
const jwt = require("jsonwebtoken");
module.exports ={
    create : async (req, res) => {
        const arr=req.files
        const photos=[]
        for (let i = 0; i < arr.length; i++){
            photos.push(arr[i].filename)
     }
     const {owner,title,description,address,extraInfo,perks,checkIn,checkOut,maxGuests,price}=req.body
     newPlace={owner,title,description,address,extraInfo,perks,checkIn,checkOut,maxGuests,price,photos}
     place.create(newPlace)
     .then(p=>{res.json(p)})
    },
    onePlace:async (req,res)=>{
        place.findOne({_id:req.params.placeId})
        .then(oneplace=>{
            res.json(oneplace)
        })
        .catch((err)=>res.json(err))
    },

    allPlaces: async (req,res)=>{
        place.find()
        .then(places=>{res.json(places)})
        .catch((err)=>res.json(err))
    },

    delete:async (req,res)=>{
        place.deleteOne({_id:req.params.id})
        .then(deletedplace=>res.json(deletedplace))
        .catch((err)=>res.json(err))
    },
    userplaces: async (req,res)=>{
        jwt.verify(req.cookies.usertoken, process.env.SECRET_KEY, async(err, payload) => {
            if (err) { 
               res.status(401).json({verified: false});
            } else {
                place.find({owner:payload.id})
                .then(userplace=>res.json(userplace))
            }
          });
    },
    
}