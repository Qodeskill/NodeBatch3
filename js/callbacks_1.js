//passing "one function definition" to "another function" as a "parameter" called as "callback" function

/*
    function fun_one(param1){
        console.log( param1() );
    };
    fun_one( function fun_two(){
        return "Hello";
    } );
    //Hello
*/

// function fun_one(param1, param2, param3) {
//     // console.log(param1, param2, param3);
//     console.log(param1(), param2(), param3());
// };
// fun_one(function fun_two() { return "Hello_1"; }, function fun_three() { return "Hello_2"; }, function fun_four() { return "Hello_3"; });
// fun_one(() => "Hello_1", () => "Hello_2", () => "Hello_3");
// let fun_two = () => "Hello_1"
// let fun_three = () => "Hello_2"
// let fun_four = () => "Hello_3"
// fun_one(fun_two, fun_three, fun_four);

// function fun_one(param1) {
// console.log(param1)
// console.log(param1("Hello_1"));

// return param1("Hello_1");
// return "Hello_1";
// }
// let my_func = (arg1, arg2, arg3) => { console.log(arg1, arg2, arg3); }
// let my_func = (arg1) => {
// console.log(arg1);
// console.log(arg1);
// return arg1;
// }
// console.log(fun_one(my_func));
//Hello_1 Hello_2 Hello_3

// function fun_one(param1) {
//     return param1("Hello_1", "Hello_2", "Hello_3");
// }
// fun_one((arg1, arg2, arg3) => {
//     console.log(arg1, arg2, arg3);
// });
//Hello_1 Hello_2 Hello_3

// function fun_one(param1, param2, param3) {
//     return param1("Hello_1") + " - " + param2("Hello_2") + " - " + param3("Hello_3");
// }
// fun_one((arg1) => { console.log(arg1) }, (arg2) => { console.log(arg2) }, (arg3) => { console.log(arg3) })
/*
    function fun_one(param1,param2,param3){
        return param1("Hello_1")+"...."+param2("Hello_2")+"...."+param3("Hello_3");
    }
    fun_one( (arg1)=>{
        console.log( arg1 );                //Hello_1
    }, (arg1)=>{
        console.log( arg1 );                //Hello_2
    }, (arg1)=>{
        console.log( arg1 );                //Hello_3
    } );
*/
