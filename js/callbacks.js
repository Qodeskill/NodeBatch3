//passing "one function definition" to "another function" as a "parameter" called as "callback" function

// function one(str) {
//   return str;
// }
// function three(pram1) {
//   console.log(pram1);
//   console.log(pram1());
// }
// function two() {
//   return "Two";
// }
// three(two);

// console.log(three(two))

// console.log(typeof one("One"))
// console.log(two)

// ---------------------------

// function three(param1) {
//   // console.log(pram1)
//   console.log(param1());
// }
// three(function newFun() {
//   return "NewFunction...";
// });

// ---------------------------

// function three(param1) {
//   console.log(param1);
//   console.log(param1());
// }
// let one = () => {
//   return "one";
// };
// three(function () {
//   return "NewFunction...";
// });
// three(() => "NewFunction...");
// three(one);
// three(() => {
//   return "one";
// });

// function fun_one(param1, param2, param3) {
//   console.log(param1);
//   return (
//     param1("Hello_1") + " - " + param2("Hello_2") + " - " + param3("Hello_3")
//   );
// }
// fun_one(
//   (arg1) => {
//     console.log(arg1);
//   },
//   (arg2) => {
//     console.log(arg2);
//   },
//   (arg3) => {
//     console.log(arg3);
//   }
// );

// function fun_one(param1, param2, param3) {
//   return (
//     param1("Hello_1") + "...." + param2("Hello_2") + "...." + param3("Hello_3")
//   );
// }
// fun_one(
//   (arg1) => {
//     console.log(arg1);
//   },
//   (arg1) => {
//     console.log(arg1);
//   },
//   (arg1) => {
//     console.log(arg1);
//   }
// );

function fun_one(param1) {
  console.log(param1);
  // return param1("Hello_1");
}
fun_one((arg1) => {
  console.log(arg1);
});

// fun_one call  -> para (function) = param =   (arg1) =>  console.log(arg1)
//Hello_1 --> arg1 - return print
