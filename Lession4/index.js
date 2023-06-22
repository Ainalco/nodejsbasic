// http module
const http = require('http');
// http.createServer((req,res)=>{
//     res.end("Hello, I am your First Server");
// }).listen(3000);
const port =3000;
const hostname='127.0.0.1';
const myServer=http.createServer((req,res)=>{
   // res.end("Hello, I am your First Server");
   res.writeHead(202, {'Content-Type':'text/html'});
   res.write("<h1>Hello, I am Ainal</h1>");
   res.write("<h2>Hello, I am Ainal</h>");
   res.write("<h3>Hello, I am Ainal</h3>");
   res.write("<h4>Hello, I am Ainal</h4>");
   res.write("<h5>Hello, I am Ainal</h5>");
   res.write("<h6>Hello, I am Ainal</h6>");
   res.end();
});
myServer.listen(port,hostname, ()=>{
 console.log(`Server is Running successfully at http://${hostname}:${port}`);
});