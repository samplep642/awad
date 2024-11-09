var express = require("express");
var app = express();

app.get("/now",(req, res, next) => {
res.json({ time: req.time = new Date().toString() });
});

app.listen(process.env.PORT || 3000, () => {
    console.log("Server is running on port 3000");
  });
