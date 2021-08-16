const express=require('express');
const bodyParser=require('body-parser');
const path=require('path');
const pool=require('./db')

const port=3000;

const app=express();

app.use(express.static(path.join(__dirname,'dist/assessment2')));

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


app.post('/addemp', async (req,res)=>{
    try {
        const {empname,age}=req.body;
        const newemp=await pool.query("INSERT INTO employee(empname, age) VALUES ($1,$2)",[empname,age]);
        res.json(newemp);
    } catch (err) {
        console.error(err.message);
    }
});

app.post('/adddept', async (req,res)=>{
    try {
        const {depname}=req.body;
        const newdep=await pool.query("INSERT INTO department(depname) VALUES ($1)",[depname]);
        res.json(newdep);
    } catch (err) {
        console.error(err.message);
    }
});

app.get('/addemp', async (req,res)=>{
    try {
        const newemp=await pool.query("SELECT * FROM employee");
        res.json(newemp.rows);
    } catch (err) {
        console.error(err.message);
    }
});

app.get('/adddept', async (req,res)=>{
    try {
        const newdep=await pool.query("SELECT * FROM department");
        res.json(newdep.rows);
    } catch (err) {
        console.error(err.message);
    }
});

app.get('/addemp/:id', async (req,res)=>{
    try {
        const {id} = req.params;
        const newemp=await pool.query("SELECT * FROM employee WHERE eid = $1",[id]);
        res.json(newemp.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

app.get('/adddept/:id', async (req,res)=>{
    try {
        const {id} = req.params;
        const newdep=await pool.query("SELECT * FROM department WHERE eid = $1",[id]);
        res.json(newdep.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

app.put('/addemp/:id', async (req,res)=>{
    try {
        const {id} = req.params;
        const {empname,age}=req.body;
        const newemp=await pool.query("UPDATE employee SET empname = $1, age = $2 WHERE eid = $3",[empname,age,id]);
        res.json("updated!");
    } catch (err) {
        console.error(err.message);
    }
});

app.put('/adddept/:id', async (req,res)=>{
    try {
        const {id} = req.params;
        const {depname}=req.body;
        const newemp=await pool.query("UPDATE department SET depname = $1 WHERE eid = $2",[depname,id]);
        res.json("updated!");
    } catch (err) {
        console.error(err.message);
    }
});

app.delete('/addemp/:id', async (req,res)=>{
    try {
        const {id} = req.params;
        const newemp=await pool.query("DELETE FROM employee WHERE eid = $1",[id]);
        res.json("deleted!");
    } catch (err) {
        console.error(err.message);
    }
});

app.delete('/adddept/:id', async (req,res)=>{
    try {
        const {id} = req.params;
        const newdep=await pool.query("DELETE FROM department WHERE eid = $1",[id]);
        res.json("deleted!");
    } catch (err) {
        console.error(err.message);
    }
});

app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'dist/assessment2/index.html'));
});

app.listen(port,()=>console.log('Server running on localhost:' + port));