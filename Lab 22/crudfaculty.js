const express=require('express');
const app=express();
const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));

faculty=[
    {
        id:1,
        name:'Dhavnik Zala',
        sub:'Maths',
        Salary:60000,
        Sitting:'A-block',
    },
     {
        id:2,
        name:'Pradhyuman Jadeja',
        sub:'DSA',
        Salary:80000,
        Sitting:'c-block',
    },
     {
        id:3,
        name:'Shruti maniar',
        sub:'DSA',
        Salary:70000,
        Sitting:'c-block',
    },
     {
        id:4,
        name:'Arjun Bala',
        sub:'JS',
        Salary:50000,
        Sitting:'A-block',
    }
]
//getAll
app.get('/faculty',(req,res)=>{
    res.send(faculty)
});

//getByid
app.get('/faculty/:id',(req,res)=>{
    const result=faculty.find(fac=>fac.id==req.params.id);
    res.send(result)
});

//Create
app.post('/faculty',(req,res)=>{
    faculty.push(req.body)
    res.send('Array is added')
});

//Update
app.patch('/faculty/:id',(req,res)=>{
    const idtoUpdate=faculty.findIndex(fac=>fac.id==req.params.id);
    faculty[idtoUpdate]={...faculty[idtoUpdate],...req.body}
    res.send(faculty[idtoUpdate])
});

//Delete
app.delete('/faculty/:id',(req,res)=>{
    const idtoDelete=faculty.findIndex(fac=>fac.id==req.params.id);
    faculty.splice(idtoDelete,1)
    res.send(faculty[idtoDelete])
});
app.listen(2020,(req,res)=>{
    console.log("server started at 2020")
});