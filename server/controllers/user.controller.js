const jwt = require("jsonwebtoken");
const User = require("../models/user.models")
const bcrypt = require('bcrypt');

module.exports ={
    
    register: async (req, res) => {
        
        const finduser= await User.findOne({email :req.body.email});
        if (finduser){
            return res.status(400).json ({ errors  : "email already exists ,please login" });
        }
        else{
            const {email,password,confirmPassword,firstName,lastName,phonenumber,state}=req.body
            const filename=req.file.filename
            const newuser={email,password,confirmPassword,firstName,lastName,phonenumber,state,filename}
            User.create(newuser)
            .then(user=>{
                res.json({ msg: "success!", user: user });
            }
            )
            .catch(err => res.json(err));
        }
      },
    
      login: async(req, res) => {
        const user = await User.findOne({ email: req.body.email });
     
        if(user === null) {
            // email not found in users collection
            return res.sendStatus(400);
        }
     
        // if we made it this far, we found a user with this email address
        // let's compare the supplied password to the hashed password in the database
        const correctPassword = await bcrypt.compare(req.body.password, user.password);
     
        if(!correctPassword) {
            // password wasn't a match!
            return res.sendStatus(400);
        }
     
        // if we made it this far, the password was correct
        const userToken = jwt.sign({
            id: user._id
        }, process.env.SECRET_KEY);
     
        // note that the response object allows chained calls to cookie and json
        res
            .cookie("usertoken", userToken, {
                httpOnly: true
            })
            .json({ id :user._id });
    },

    logout: async(req, res) => {
        res.clearCookie('usertoken');
        res.sendStatus(200);
    },
    
    alluser: async(req,res)=>{
        User.find()
        .then(allthings=>res.json(allthings))
        .catch((err)=>res.json(err))
    },

    profil: async (req,res )=>{
        jwt.verify(req.cookies.usertoken, process.env.SECRET_KEY, async(err, payload) => {
            if (err) { 
               res.status(401).json({verified: false});
            } else {
                
                const user= await User.findById(payload.id);
                res.json(user);
            }
          });
    }
} 