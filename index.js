const express= require('express');
const path =require('path');
const app=express();
app.use(express.json());
app.use(express.static("pages"));
app.use(express.urlencoded({extended:false}));

app.get('/',(req,res)=>{
    req.sendFile(__dirname + '/pages/index.html');
})

app.listen(3000,()=>{console.log("Server Started at port 3000")});