const express=require('express')
const app=express()
const fs=require('fs')

app.use(express.static('public'))

app.get('/',(req,res)=>{
    res.send("Defult Page")
});
app.get('/contant',(req,res)=>{
    res.send("contact page")
});


app.listen(7777,(req,res)=>{
        console.log("server is started")
});ss