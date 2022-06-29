//http server

//http is the predefined module
//http module used to create the http server
//no need to download http module by using either "npm" tool or "yarn" tool
//http module is inbuilt module in NodeJS

//require() is the predefined function, used to import the modules
const http = require("http");

const server = http.createServer((req, res) => {
  //MIME Type
  //communication language between client and server
  res.setHeader("Content-Type", "text/html");
  res.write("<h1>Welcome to HTTP Server !!!</h1>");
  res.write("Request URL" + req.url);
  res.write("Request Method" + req.method);
  res.end();
});

server.listen(3030, () => {
  console.log("server listening the port number 3030");
});
