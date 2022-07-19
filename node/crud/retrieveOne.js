var mongoose = require("mongoose");
var EmployeesSchema = new mongoose.Schema({
  empname: String,
  empid: Number,
  salary: Number,
});
var EmployeesModel = mongoose.model("employees", EmployeesSchema);
mongoose.connect("mongodb://localhost:27017/company");

EmployeesModel.findOne({ salary: { $gt: 50 } }, afterDataRetrieved);
function afterDataRetrieved(error, data) {
  console.log(data);
  if (error == null) {
    console.log(data.empname);
    console.log(data.empid);
    console.log(data.salary);
  } else {
    console.log(error);
  }
  mongoose.disconnect();
}
