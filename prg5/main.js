const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const Item = require("./Item");
app.use(morgan("tiny"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get("/items", (req, res) => {
7
return res.json(Item.list);
});
app.post("/items", (req, res) => {
let newItem = new Item(req.body.name, req.body.price);
return res.json(newItem);
});
app.get("/items/:id", (req, res) => {
let foundItem = Item.find(+req.params.id);
return res.json(foundItem);
});
app.patch("/items/:id", (req, res) => {
let foundItem = Item.update(+req.params.id, req.body);
return res.json(foundItem);
});
app.delete("/items/:id", (req, res) => {
Item.remove(+req.params.id);
return res.json("Removed");
});
// catch 404 and forward to error handler
app.use((req, res, next) => {
var err = new Error("Not Found");
err.status = 404;
next(err);
});
// error handlers
// development error handler
// will print stacktrace
if (app.get("env") === "development") {
app.use((err, req, res, next) => {
res.status(err.status || 500);
res.send({
message: err.message,
error: err,
});
});
}
// production error handler
// no stacktraces leaked to user
app.use((err, req, res, next) => {
res.status(err.status || 500);
res.send({
message: err.message,
error: {},
});
});
app.listen(process.env.PORT || 3000, () => {
console.log("Server is listening on port 3000");
});