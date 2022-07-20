var mongoose = require("mongoose");
var StudSchema = new mongoose.Schema(
  {
    sno: Number,
    sname: String,
    fees: Number,
    course: String,
  },
  { versionKey: false }
);
var StudentModel = mongoose.model("studs", StudSchema);

mongoose.connect("mongodb://localhost/newskill", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
var newStud = new StudentModel({
  sno: 121,
  sname: "Rohandas",
  fees: 110000,
  course: "Python Django",
});

newStud.save(afterDataInserted);
function afterDataInserted(error) {
  if (error == null) {
    console.log("Inserted");
  } else {
    console.log(error);
  }
  mongoose.disconnect();
}
