var express = require("express");
var app = express();
app.listen(6060, () => {
  console.log("Sever started at port no. 6060");
});
// app.get("/", (req, res) => {
//   console.log(app);
// console.log("req.url    :", req.url);
// console.log("req.method :", req.method);
// console.log("req.headers:", req.headers);
// console.log("req.query  :", req.query);
// console.log("req.body   :", req.body);

// res.header("content-type", "text/html");
// res.write("Hello World");
// res.end();
// res.send(" hi, Welcome to skillqode.. ")
// console.log(__dirname);
// res.sendFile(__dirname + "/login.html");
// });
