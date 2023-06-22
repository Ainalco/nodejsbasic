const fs = require('fs');
// fs.writeFile('demo.txt','This is the dummy text',(err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log('Successfully'); 
//     }
// });

// fs.appendFile('demo.txt','Written by Ainal',(err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log('Successfully'); 
//     }
// });

// fs.readFile('demo.txt','utf-8',(err,data)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log(data); 
//     }
// });
// fs.rename('demo.txt','demo1.txt',(err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log('Successfull'); 
//     }
// });

// fs.unlink('demo1.txt',(err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log('Successfull'); 
//     }
// });
// fs.exists('demo.txt',(result)=>{
//     if(result){
//         console.log('Found');
//     }else{
//         console.log('Not found'); 
//     }
// });

/* SYnc function*/
fs.existsSync('demo.txt');

(result)=>{
    if(result){
        console.log('Found');
    }else{
        console.log('Not found'); 
    }
};