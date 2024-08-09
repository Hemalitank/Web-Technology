const http=require('http');
http.createServer((req,res)=>{
   
   res.setHeader('Content-type','text/html');
   if(req.url=='/favicon.ico'){
    res.end(' ');
   }
   else if(req.url=='/Home'){
    res.statusCode=200;
    res.write('welcome home');
    res.write('</br>');
    res.write('By By');
    res.end();
   }
   else if(req.url=='/contact'){
    res.statusCode=200;
    res.end('my number is=<h2> 12345678 </h2>')
   }
   else if(req.url=='/about'){
    res.statusCode=200;
    res.end('this is my about page');
   }
   else{
    res.statusCode=404;
    res.end('hello world');
   }
 
})
.listen(5000,()=>{
    console.log("server running");
})`                                                                                                                 `