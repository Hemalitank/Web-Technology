const express=require("express");
const app=express()
const mongoose=require("mongoose");
const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded());
const Student=require("./crudstudent")


const connectionString="mongodb+srv://firstmongo:Hemalitank9@firstmongo.2blpz.mongodb.net/"
mongoose.connect(connectionString).then(()=>{
    console.log("connect");
});
//get all
app.get('/Students',async(req,res)=>{
    const ans=await Student.find()
    res.send(ans);
});
//get by id
app.get('/Students/:id',async(req,res)=>{
    const ans=await Student.findOne({
        id:req.params.id
    })
})
//creat
app.get("/Students/:id",async(req,res)=>{
    stu=new Student(...req.body);
    const ans=await stu.save();
    res.send(ans);
})
//delete
app.delete('/Students/:id',async(req,res)=>{
    const ans=await Student.deleteOne({
        id:req.params.id
    });
});
//update
app.patch('/Students/:id',async(req,res)=>{
    const stu=await Student.findOne({
        id:req.params.id
    });
    stu.id=req.body.id
    stu.name=req.body.id
    stu.email=req.body.id
    stu.age=req.body.id

    const ans=await stu.save();
    res.send(ans);
});
app.listen(9898,()=>{
    console.log("server is started");
});
