const express= require('express');
const path =require('path');
const app=express();
app.use(express.json());
app.use(express.static("pages"));
app.use(express.urlencoded({extended:false}));
var mongoose=require('./controller/Mongodb');
app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/pages/index.html');
    
})

app.listen(9000,()=>{console.log("Server Started at port 3000")});