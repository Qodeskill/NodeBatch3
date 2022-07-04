var http = require("http");
var fs = require("fs");

let app = http.createServer((req, res) => {

    fs.readFile("file1.txt", "utf8", function (error, data) {
        if (error) {
            res.writeHead(500);
            res.write("Unable to read...");
            res.end();
        }
        else {
            res.write(data);
            res.end();
        }
    });
});
app.listen(5050, () => {
    console.log(" Listing port 5050... ");
})

