const mongoose = require('mongoose');
const url = "mongodb+srv://tarun2130:tarun2130@cluster0.jr4xuip.mongodb.net/familyPro?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(url).then(()=>{ console.log("MongoDB Connected Successfully")});
module.exports=mongoose;

