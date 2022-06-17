// https://www.freecodecamp.org/news/copying-stuff-in-javascript-how-to-differentiate-between-deep-and-shallow-copies-b6d8c1ef09cd/#:~:text=A%20deep%20copy%20means%20that,into%20how%20JavaScript%20stores%20values.
// const a = {
//   en: "Hello",
//   de: "Hallo",
//   es: "Hola",
//   pt: "hi",
// };
// let b = a;
// b.pt = "ok";
// console.log(b);
// console.log(a);

// function fun_one() {
//   return "welcome to named functions";
// }

// console.log(fun_one());
//lasele lamport
function fun_two(arg1, arg2, arg3) {
  return `welcome to named functions ${arg1} , ${arg2} and ${arg3}`;
}

console.log(fun_two(10, 20, 30));
