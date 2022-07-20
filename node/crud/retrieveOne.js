var mongoose = require("mongoose");
var EmployeesSchema = new mongoose.Schema({
  empname: String,
  empid: Number,
  salary: Number,
});
var EmployeesModel = mongoose.model("company", EmployeesSchema);
mongoose.connect("mongodb://localhost/newskill");
// mongoose.connect(
//   "mongodb+srv://admin:amdin@cluster0.zqzny.mongodb.net/?retryWrites=true&w=majority"
// );

EmployeesModel.findOne(afterDataRetrieved);
function afterDataRetrieved(error, data) {
  if (error == null) {
    console.log(data);
    console.log(data.empname);
    console.log(data.empid);
    console.log(data.salary);
  } else {
    console.log(error);
  }
  mongoose.disconnect();
}
