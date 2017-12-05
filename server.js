const express = require("express");
const random = require("./module1");
const app = express();

app.get("/", (req, res)=>{
    res.send(random.RandomChar(81));
});


const PORT = 3000;
app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`);
});