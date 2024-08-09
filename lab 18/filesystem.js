const fs= require('fs')

fs.readFile("hello.txt",(err,data)=>{
    console.log(data.toString())
})
fs.exists("hii.text",(err,data)=>{
   console.log(data);
})
 fs.open("hello.txt",(data)=>{
     console.log(data);
})
fs.writeFile("hello.txt","hiii",(err,data)=>{
    console.log(data);
})
 fs.appendFile("hello.txt","kem chho?",()=>{
     console.log("done");
 })
