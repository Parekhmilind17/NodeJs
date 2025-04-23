const express = require("express");
const port = 2008;

const app = express();

app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}))

let student =[]

app.get("/",(req,res)=>{
    res.render("crud",{student})    
})

app.post("/addData",(req,res)=>{
    student.push(req.body)
    res.redirect("/")    
})
    
app.listen(port,(err)=>{
    err?console.log(err):console.log("server stated on port :: " + port);
       
})