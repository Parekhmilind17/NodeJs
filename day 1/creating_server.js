const http = require("http");
const port = 2006;

const porthandler = (req,res)=>{
    res.write("<h1>Hello</h1>");
    res.end();
}

const server = http.createServer(porthandler);

server.listen(port,(err)=>{
    err ? console.log(err):console.log(`server started succesfull on : ${port}`);
    
    
})