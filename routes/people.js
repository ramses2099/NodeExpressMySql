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

router.get('/people/:id', (req, res) =>{
    const { id } = req.params; //desectruturamos
    const sql = `SELECT * from people where id = ${id}`;

    mysqlConnection.query(sql, (err, rows, fields)=>{
        if(!err){
            res.send(rows);
        }else{
            console.log(err);
        }
    });
   
});



router.post('/add', (req, res)=>{
    const sql = 'INSERT INTO people SET ?';
    const peopleObj ={
        name: req.body.name
    }

    mysqlConnection.query(sql, peopleObj, (err)=>{
        if(!err){
            res.send("people add");
        }else{
            console.log(err);
        }
    });


    res.send('add');
});

router.put('/update/:id',(req, res)=>{
    const { id } = req.params;
    const { name } = req.body.name;
    const sql = `UPDATE people SET NAME ='${name}' WHERE id = ${id}`;

    mysqlConnection.query(sql, (err) =>{
        if(!err){
            res.send("people update");
        }else{
            console.log(err);
        }
    });


    res.send('update');
});

router.delete('/delete/:id',(req, res)=>{
    const { id } = req.params;
    const sql = `delete from people where id = ${id}`;

    mysqlConnection.query(sql, (err) =>{
        if(!err){
            res.send("people update");
        }else{
            console.log(err);
        }
    });

    res.send('delete');

});

module.exports = router;
