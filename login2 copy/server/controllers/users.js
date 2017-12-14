
var mongoose = require("mongoose");

var User = mongoose.model("User");//test without this 

module.exports ={
    getSession: function(req, res){
        console.log("User Controller")
        console.log("body", req.body);
        
        User.find({name: req.body.name}, function(err, users){
            console.log("HEYYY", users)
            if (users.length < 1 ){
                User.create(req.body, function (err, user){
                    req.session.user_name = user.name;
                    console.log("Returning", req.session.user)
                    
                    return res.json(req.session.user_name)
                    
                })
            } else {
                console.log("User already created", users[0])
                req.session.user_name = users[0].name
                console.log("Returning", req.session.user)                
                return res.json(req.session.user_name)
                
            }
        })
        
    }


 }

