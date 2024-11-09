var express = require("express");
var app = express();
// Get input from client - Query parameters
// /name?first=<firstname>&last=<lastname>
app.route("/name").get((req, res) => {
res.json({ name: `${req.query.first} ${req.query.last}` });
});
app.listen(process.env.PORT || 3000);