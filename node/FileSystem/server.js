const fs = require("fs");

// fs.readFile("demo.txt", (err, data) => {
//   if (err) throw err;
//   else console.log(data.toString());
// });

// const result = fs.readFileSync("demo.txt");
// console.log(result.toString());

// fs.open("demo.txt", "r+", (err, fd) => {
//   if (err) throw err;
//   else {
//     console.log("file opened successfully !!!");
//   }
// });

// fs.openSync("demo.txt", "r+");
// console.log("file opened synchronously");

// fs.writeFile("demo.txt", "writing the data asynchronously", (err) => {
//   if (err) throw err;
//   else {
//     console.log("writing asynchronously");
//   }
// });

// fs.writeFileSync("demo.txt", "writing the data synchrnously");

// fs.appendFile("demo.txt", "\n this is new line", (err) => {
//   if (err) throw err;
//   else console.log("data appended asynchronously");
// });

// fs.appendFileSync("demo.txt", "\ndata appended synchronously");

// fs.open("demo.txt", "r+", (err, fd) => {
//   if (err) console.log(err);
//   else {
//     fs.close(fd, (err) => {
//       if (err) throw err;
//       else {
//         console.log("file closed successfully");
//       }
//     });
//   }
// });

// fs.rename("newFile.txt", "demo.txt", renamingCompleted);
// function renamingCompleted(error) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("File Renamed...");
//   }
// }

// fs.readdir("d:\\SQ\\skillQodeNodeBatch_3", readDirCompleted);
// function readDirCompleted(error, file) {
//   if (error) {
//     console.log(error);
//   } else {
//     for (var i = 0; i < file.length; i++) {
//       console.log(file[i]);
//       // console.log(file[i].indexOf(".") > -1 ? "file : " : "folder", " - ", file[i]);
//     }
//   }
// }

// fs.unlink("demo.txt", (err) => {
//   if (err) throw err;
//   else {
//     console.log("file deleted successfully !!!");
//   }
// });
