const express=require('express');
const app=express();

app.get('/',(req,res)=>{
    res.send("hello world")
});
app.get('/home',(req,res)=>{
    res.send("home")
});
app.get('/about',(req,res)=>{
    res.send("about")
});
app.get('/contact',(req,res)=>{
    res.send("contact")
});
app.get('/help',(req,res)=>{
    res.send("help")
});
app.get('/menu',(req,res)=>{
    res.send("menu")
});
app.listen(6060,()=>{
    console.log("server is started ")
})
