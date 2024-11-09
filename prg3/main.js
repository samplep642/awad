var express = require("express");
var app = express();

app.get("/:word/echo", (req,res) =>{
res.json({echo: req.params.word});
})

app.listen(process.env.PORT || 3000, ()=>{
    console.log("Port listening to 3000");
})