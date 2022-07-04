var fs = require("fs");
// var content = " we're having fun at skillqode 1";
fs.readFile("file1.txt", "utf8", readingCompleted);

function readingCompleted(error, data) {
    if (error) {
        console.log(error);
    }
    else {
        fs.writeFile("file1_copy.txt", data, "utf8", writingCompleted);
        function writingCompleted(error, data) {
            if (error) {
                console.log(error);
            }
            else {
                console.log("file copied..");
            }
        }
    }
}
