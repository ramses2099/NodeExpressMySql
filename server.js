const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());

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


app.listen(3000);
