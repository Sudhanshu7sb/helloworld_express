// require
var express = require("express");


// express app 
var app = express();

// middlewares
app.use((req,res,next) => {
    console.log(req.method,req.url);
    next();
    
})


// middleware for static files :css,images
app.use(express.static(__dirname + '/public'))


// routes
app.get('/',(req,res,next) => {
    res.sendFile(__dirname + '/index.html');
})


// listener
app.listen(4000, () => {
    console.log("server started");
    
})