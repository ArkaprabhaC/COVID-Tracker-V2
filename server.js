const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 8000;

const publicPath = path.join(__dirname,'build');

app.use(express.static(publicPath));

app.get("/",(req,res)=>{
    res.sendFile(path.join(publicPath,'index.html'));
}).listen(port);

console.log("Server Started!");