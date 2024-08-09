const express=require('express')
const app=express()
const fs=require('fs')

app.use(authorize)

app.get('/',(req,res)=>{
    res.send("Defult Page")
});
function authorize(req,res,next){
    if(req.query.admin==='true'){
        console.log("middleware is startd");
    next()
    return;
    }
        res.send("oopss!!!you are not authorized")
}
app.listen(9191,(req,res)=>{
        console.log("server is started")
});