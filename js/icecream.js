// https://www.freecodecamp.org/news/javascript-async-await-tutorial-learn-callbacks-promises-async-await-by-making-icecream/
// setTimeout(() => {
//   console.log("eat");
// }, 2000);

// console.log("I");
// console.log("eat");
// console.log("Ice Cream");

// console.log("I");

// setTimeout(() => {
//   console.log("eat");
// }, 2000);

// console.log("Ice Cream");

// let order = (call_production) => {
//   console.log("Order placed. Please call production");

//   call_production();
// };

// let production = () => {
//   console.log("Production has started");
// };

// order(production);

// // 1st Function
// let stocks = {
//   Fruits: ["strawberry", "grapes", "banana", "apple"],
//   liquid: ["water", "ice"],
//   holder: ["cone", "cup", "stick"],
//   toppings: ["chocolate", "peanuts"],
// };
// let order = (fruit_name, call_production) => {
//   setTimeout(function () {
//     console.log(`${stocks.Fruits[fruit_name]} was selected`);
//     call_production();
//   }, 2000);
// };
// let production = () => {
//   setTimeout(() => {
//     console.log("production has started");
//     setTimeout(() => {
//       console.log("The fruit has been chopped");
//       setTimeout(() => {
//         console.log("Add ice and water");
//         setTimeout(() => {
//           console.log("Machine started bhmmmmmmmmmmmmmm");
//           setTimeout(() => {
//             console.log(` container  ${stocks.holder[0]} was selected`);
//           }, 2000);
//         }, 1000);
//       }, 1000);
//     }, 2000);
//   }, 0000);
// };
// order(0, production);

// function one(two) {
//   console.log("one");
//   return two;
//   // console.log(two);
// }
// function two() {
//   console.log("two");
//   return "Hello ";
// }
// console.log(one(two));

