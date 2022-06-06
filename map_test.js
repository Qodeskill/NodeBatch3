arr = [1, 2, 3];
delete arr[0];
// arr[0] = undefined;
function test(arr) {
  return arr.map(function (x) {
    return Math.pow(x, 2);
  });
}
console.log(test(arr));
