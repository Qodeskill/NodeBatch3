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
// _________________________________
// |   promise icecreame example   |
// |_______________________________|
// let stocks = {
//   Fruits: ["strawberry", "grapes", "banana", "apple"],
//   liquid: ["water", "ice"],
//   holder: ["cone", "cup", "stick"],
//   toppings: ["chocolate", "peanuts"],
// };
// let is_shop_open = true;
// let order = (time, work) => {
//   return new Promise((resolve, reject) => {
//     if (is_shop_open) {
//       setTimeout(() => {
//         resolve(work());
//       }, time);
//     } else {
//       reject(console.log("Our shop is closed"));
//     }
//   });
// };
// console.log(order(0, () => {}));
// order(1000, () => {
//   console.log(`order placed for ${stocks.Fruits[0]} ice Creame`);
// });
//   .catch(() => {
//     console.log("error handle");
//   })
// order(1000, () => {
//   console.log(`order placed for ${stocks.Fruits[0]} ice Creame`);
// })
//   // console.log(order(1000, () => { console.log(`order placed for ${stocks.Fruits[0]} ice Creame`) }))
// .then(() => {
//   return order(0000, () => console.log("production has started"));
// })
// .then(() => {
//   return order(2000, () => console.log("Fruit has been chopped"));
// })
// .then(() => {
//   return order(1000, () =>
//     console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`)
//   );
// })
// .then(() => {
//   return order(1000, () => console.log("start the machine"));
// })
// .then(() => {
//   return order(2000, () =>
//     console.log(`ice cream placed on ${stocks.holder[1]}`)
//   );
// })
// .then(() => {
//   return order(3000, () => console.log(`${stocks.toppings[0]} as toppings`));
// })
// .then(() => {
//   return order(2000, () => console.log("Serve Ice Cream"));
// })
// .finally(() => {
//   console.log("\n finally , end of day");
// });

// _________________________________
// |       async example           |
// |_______________________________|

// let hello = async () => "Hello";
// console.log(hello());
// let hello = async function () {
//   return "Hello";
// };
// console.log(hello());
async function hello() {
  return "Hello";
}
var val = 100;
// console.log(hello().then((val) => console.log(val)));
// console.log(hello().then(console.log));
// hello().resolve(console.log);
// So the async keyword is added to functions to tell them to return a promise rather than directly returning the value.

// console.log("1")
// console.log("2")
// setTimeout(() => {
//     console.log("3")
// }, 1000)
// console.log("4")
