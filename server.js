const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3000;

const mysqlConnection = require('./connection');

const PeopleRoutes = require("./routes/people");

var app = express();
app.use(bodyParser.json());

app.use("/people", PeopleRoutes);


app.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`);
});
