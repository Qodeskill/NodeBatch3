// Promises
// ********
// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.

//     - Promises divided into two categories.

//     1) Promise Creation

//     2) Promise Consumption

//     - Producer will create the Promises

//     - Consumer will consume the Promises

//     "Promise" is the Predefined class, used to create the "Promises"

//     we can consume Promises in two ways

//     1) then()

//     2) async & await keywords

//     Promises are alternative solution of Callback hell

// let promise1 = new Promise((resolve, reject) => {
//   //   resolve("tomarrow we will discuss async & await keyword");
//   reject("cant do that not clear promises");
// });
// console.log(typeof Promise);
// console.log(promise1);

// promise1.then(
//   (posRes) => {
//     console.log(posRes);
//   },
//   (errRes) => {
//     console.log(errRes);
//   }
// );

// let promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Hello_1");
//     // reject("reject promise");
//   }, 5000);
// });
// promise1.then(
//   (posRes) => {
//     console.log("Before");
//     console.log(posRes);
//     console.log("After");
//   },
//   (errRes) => {
//     console.log(errRes);
//   }
// );

// let promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Hello_1");
//   }, 2000);
// });

// let promise2 = new Promise((resolve, reject) => {
//   resolve("Hello_2");
// });

// promise1.then(
//   (posRes) => {
//     console.log(posRes);
//   },
//   (errRes) => {
//     console.log(errRes);
//   }
// );

// promise2.then(
//   (posRes) => {
//     console.log(posRes);
//   },
//   (errRes) => {
//     console.log(errRes);
//   }
// );

// ___________________________

function add(num, callback) {
  return callback(num + 5, false);
}

function sub(num, callback) {
  return callback(num - 3, false);
}

function mul(num, callback) {
  return callback(num * 2, false);
}

function div(num, callback) {
  return callback(num / 2 - 2, false);
}

add(5, (addRes, error) => {
  if (!error) {
    sub(addRes, (subRes, error) => {
      if (!error) {
        mul(subRes, (mulRes, error) => {
          if (!error) {
            div(mulRes, (divRes, error) => {
              if (!error) {
                console.log(divRes);
              }
            });
          }
        });
      }
    });
  }
});
