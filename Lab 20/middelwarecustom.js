const express=require('express')
const app=express()
const fs=require('fs')

app.use(logger)

app.get('/',(req,res)=>{
    res.send("Defult Page")
});
app.get('/contant',(req,res)=>{
    res.send("contact page")
});

function logger(req,res,next){
    fs.appendFileSync('log.txt',`the user sent a req at${Date.now()}and method is${req.method}/n`)
    console.log("middleware started");
    next()
}
app.listen(9090,(req,res)=>{
        console.log("server is started")
});