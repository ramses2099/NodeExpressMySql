const mysql = require('mysql');

var mysqlConnection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"P@ssword01",
    database:"express",
    multipleStatements:true
});

mysqlConnection.connect((err)=>{
    if(!err){
        console.log("Connected to express db");
    }else{
        console.log("Connection faild", err);

    }
});

module.exports = mysqlConnection;