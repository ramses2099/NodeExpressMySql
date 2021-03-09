var express = require('express');
var router = express.Router();
const mysqlConnection = require('../connection');


/* GET home page. */
router.get('/', (req, res) =>{
    mysqlConnection.query("SELECT * from people",(err, rows, fields)=>{
        if(!err){
            res.send(rows);
        }else{
            console.log(err);
        }
    });
});

module.exports = router;
