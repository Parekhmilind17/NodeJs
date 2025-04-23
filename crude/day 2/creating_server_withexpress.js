const express = require("express");
const port = 2008;

const app = express();

app.get("/",(req,res)=>{
    res.write("HEllO")
    res.end()
})
    
app.listen(port,(err)=>{
    err?console.log(err):console.log("server stated on port :: " + port);
       
})