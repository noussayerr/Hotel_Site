const Users = require('../controllers/user.controller');
const { authenticate } = require('../config/jwt.config');
const place = require('../controllers/place.controllers')
const multer = require('multer')
const fs = require('fs')
const express=require("express")
const upload = multer({ dest: 'images/' })

module.exports = app => {
  app.post("/api/register",upload.single('image'), Users.register);
  app.post("/api/login", Users.login);
  
  app.post("/api/logout", Users.logout);
  
  app.get("/api/alluser", Users.alluser);
  
  app.get('/api/profil',authenticate,Users.profil);
  
  app.get("/api/userlogedin" ,authenticate, (req, res) => {
    return res.json({ verified: true });
  });
  app.use('/images', express.static('images'))
  app.get('/images/:imageName', (req, res) => {
    const imageName = req.params.imageName
    const readStream = fs.createReadStream(`images/${imageName}`)
    readStream.pipe(res)
  })

  
  
}