const place = require('../controllers/place.controllers')
const multer = require('multer')
const fs = require('fs')
const express=require("express")
const upload = multer({ dest: 'place/' })


module.exports = app => {
    app.post("/api/create", upload.array('photo'), place.create);
    
    app.get("/api/allplaces",place.allPlaces);
    
    app.get("/api/oneplace/:placeId", place.onePlace);

    app.get ("/api/userplaces",place.userplaces)
    
    app.delete("/api/delete/:id",place.delete)

    app.use('/place', express.static('place'))
    app.get('/place/:imageName', (req, res) => {
        const imageName = req.params.imageName
        const readStream = fs.createReadStream(`place/${imageName}`)
        readStream.pipe(res)
    })
    app.delete("/api/place/:id",place.delete)
    
  }