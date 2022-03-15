// console.log(data);
// var data = 100               //undefined
// let data = 100                  //ReferenceError: Cannot access 'data' before initialization

// var data                        //delaration

// var data  = 100                 //initialization
// let data
// console.log(data);
// data = 100


// var data
// console.log(data);
// data = 100



// let data = 100
// {
//     let data = 10
//     console.log(data);
// }
// console.log(data);


// var data = 100
// {
//     var data = 10
//     console.log(data);
// }
// console.log(data);




// let data
// console.log(data);


// const data = 100
// data = 20              // TypeError: Assignment to constant variable.
// console.log(data);


// const data                  //SyntaxError: Missing initializer in const declaration
// console.log(data);
// const data = 100

// let data = 100
// var data = 50
// console.log(data);




//let keyword
//let keyword introduced in ES6
//let keyword used to declare the variables

// differences
// let i;
// for (i = 0; i < 5; i++) {

// }
// console.log(i);                 //var : 5    //let : ReferenceError: i is not defined
// console.log(i);             //var : 5    //let : ReferenceError: i is not defined

//var keyword breaks the "scope" rule
//let keyword "obeys" the scope rule

// console.log(data);                //var:undefined     //let:ReferenceError: Cannot access 'data' before initialization
// let data = 100;


//var:undefined      --> variable hoisting
//accessing the variable before its declaration and initilization with var keyword technically called as variable hoisting
//variable hoisting raised because of var keyword
//we can overcome variable hoisting with the help of let keyword


//global variable
// let data = 100;
//block of code
{
    //local variable
    // let data = 200;
}

// console.log(data);                //var:200           //let:100

//var keyword raised the global polluting issue
//let keyword overcomes the global polluting issue

//effect of blocks of code on global members called as global polluting issue



// let data = 100;
// let data = 200;
// console.log(data);            //var:200       //let:SyntaxError: Identifier 'data' has already been declared
//var keyword allows the duplicate variables
//let keyword overcomes the duplicate variables


/*
            var                                             let

    var keword introduced in "ES1"                let keyword introduced in "ES6"

    var keyword allows the duplicate              let keyword wont allows the duplicate
    variables                                     variables

    variable hoisting issue raised                we can overcome variable hoisting
    with var keywors                              with let keyword

    scope rule break by var keyword               let keyword obeys the scope rule

    global polluting issue raised                 we can overcome global polluting issue
    because of var keyword                        by using let keuword

*/


// const a = 10;
// a = 100;       //  TypeError: Assignment to constant variable.
// {
//     console.log(a);
// }
// const a  //SyntaxError: Missing initializer in const declaration
// console.log(a);
















