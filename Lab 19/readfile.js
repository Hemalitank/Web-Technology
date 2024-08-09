const express=require('express');
const app=express();
app.get('/',(req,res)=>{
    res.sendFile('/home/student/Desktop/WT/Lab 19/hii.html',(err,data)=>{
        if(err){
            throw err;
        }
    })
});
app.listen(8989,()=>{
    console.log("server is started ")
})
