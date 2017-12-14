var mongoose = require("mongoose");

var user = require('./../controllers/users')
var pet = require('./../controllers/pets')

module.exports= function(app){
        app.post("/login", function(req, res){
            console.log("Login User Route")
            user.getSession(req, res)
        })

        app.post("/createPet", function(req, res){
            console.log("Create Pet Route")
            pet.create(req, res)
            console.log(res)
            return res.json()
        })
        app.get("/getPets", function(req, res){
            pet.find(req, res)
        })

        app.post("/destroyPet/:id", function(req, res){
            console.log("Destroy Route")
            pet.destroy(req,res)
        })
}

