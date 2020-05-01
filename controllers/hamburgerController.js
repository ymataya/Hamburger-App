var express = require("express");
var router = express.Router();
var hamburger = require("../models/burger.js");

router.get("/", function(req,res){
    console.log("hitting route");
    hamburger.allBurger(function(data){
        res.render("index", {
            burger: data
        })
    })
})

router.post("/api/create/:burger", function(req, res){
    console.log(req.params.burger);
    hamburger.createBurger(req.params.burger, function(data){
        console.log(data)
        res.redirect("/");
    })
})

router.put("/api/change/:bool/:id", function(req, res) {
    console.log(req.params.bool, req.params.id)
    if(req.params.bool == "1"){
        var change = false;
    }else if(req.params.bool == "0"){
        var change = true;
    }
    console.log(change)
    hamburger.updateBurger(change, req.params.id, function(data){
        console.log(data)
        res.redirect("/");
    })
})

router.delete("/api/delete/:id", function(req, res){
    hamburger.deleteBurger(req.params.id, function(data){
        res.redirect("/");
    })
})

module.exports = router;