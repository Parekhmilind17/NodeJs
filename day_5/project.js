const express = require("express");
const port = 2006;

const app = express();
app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}))

let task = [];

app.get("/",(req,res)=>{
    res.render("index")
})


app.get("/Tasks",(req,res)=>{
    res.render("Tasks",{task})
})

app.post("/add",(req,res)=>{
    req.body.id = task.length + 1;
    task.push(req.body);
    res.redirect("/")
    
})
app.get("/deleteData",(req,res)=>{
    let newData = task.filter((item)=>item.id != req.query.id);
    task = newData;
    res.redirect("Tasks")
})

app.get("/editaData",(req,res)=>{
    let singleData = task.find((item)=>item.id==req.query.id)
    console.log(singleData);
    
    res.render("editaData",{singleData})
})

app.post("/edit",(req,res)=>{
    task.forEach((item)=>{
        if(item.id==req.body.id)
        {
            item.task=req.body.task,
            item.intial=req.body.intial,
            item.complition=req.body.complition
        }
        else
        {
            item
        }
        res.redirect("Tasks")
    })
})

app.listen(port,(err)=>{
    err?console.log(err):console.log("server stated on the port :: " + port);    

})
