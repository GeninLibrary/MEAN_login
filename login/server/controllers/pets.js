var mongoose = require("mongoose");

var Pet = mongoose.model("Pet");

module.exports ={
    create: function(req, res){
        console.log("Pet Controller")
        Pet.create(req.body, function (err, pet){
                    req.body.name = pet.name 
                    // req.body.species = pet.species,
                    // req.session.user.name = pet.owner;
                    // console.log("Pets Controller")
                })
        return res.json(req.body)
    },
    find: function(req, res){
        Pet.find({}, function (err, pets){
            console.log("SOmething", pets)
            return res.json(pets)
        })
       
    },

    destroy: function(req, res){
        console.log("Attempting to destroy pet")
        console.log("Ray said try this", req.body);
        Pet.find({_id:req.body}).remove().exec()
            

    }
}




