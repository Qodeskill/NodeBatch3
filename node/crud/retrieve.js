var mongoose = require("mongoose");
var StudSchema = new mongoose.Schema({
  sno: Number,
  sname: String,
  fees: Number,
  course: String,
});
var StudentModel = mongoose.model("stud", StudSchema);

mongoose.connect("mongodb://localhost/newskill", {
  // useNewUrlParser: true,
  useUnifiedTopology: true,
});
var conn = mongoose.connection;
conn.on("connected", function () {
  console.log("database is connected successfully");
});

// mongoose.connect("mongodb://localhost:27017/newskill");

StudentModel.find({ fees: { $eq: 35000 } }, afterDataRetrieved);
function afterDataRetrieved(error, data) {
  if (error == null) {
    console.log("data : ", data);
    for (var i = 0; i < data.length; i++) {
      console.log(data[i].sno);
      console.log(data[i].sname);
      console.log(data[i].fees);
      console.log(data[i].course);
      console.log("...............");
    }
  } else {
    console.log(error);
  }
  mongoose.disconnect();
}

// db.stud.find({ fees: { $eq: 35000 } })
