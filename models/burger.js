var orm = require("../config/orm.js");

var burgerModel= {
    
    allBurger: function(cb) {
        orm.all(function(res) {
            cb(res);
        })
    },

    createBurger: function(name, cb) {
        orm.create(name, function(res){
            cb(res);
        })
    },

    updateBurger: function(change, id, cb) {
        orm.update(change, id, function(res){
            cb(res);
        })
    },

    deleteBurger: function(id, cb) {
        orm.delete(id, function(res){
            cb(res);
        })
    }
    
}

module.exports=burgerModel;