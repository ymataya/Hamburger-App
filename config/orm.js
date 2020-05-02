// Import MySQL connection.
var connection = require("../config/connection.js");

var orm = {
    all: function(cb) {
        connection.query("SELECT * FROM burgers;", function(err, result){
            if (err) {throw err};
            cb(result); 
        })
    },

    create: function(name,cb) {
        console.log(name);
        connection.query(`INSERT INTO burgers (name) VALUES ('${name}');`, function(err, result){
            if (err) {throw err};
            cb(result); 
        })
    },

    update: function(change,id,cb){
        console.log(change, id);
        connection.query(`UPDATE burgers SET devour = ${change} WHERE id=${id};`, function(err,result){
            if (err) {throw err};
            cb(result); 
        })
    },

    delete: function(id,cb) {
        connection.query(`DELETE FROM burgers WHERE id=${id}`, function(err,result){
            if (err) {throw err};
            cb(result); 
        })
    }
}

// Export the orm object for the model
module.exports = orm;
