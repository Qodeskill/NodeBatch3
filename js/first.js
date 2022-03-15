// /console.log("first.js");
//*************************************************** */
// 12/03/22
//*************************************************** */

// console.log(1 + 3);
// console.log(0.1 + 0.3)
// console.log(10 % 3);

// true = 1
// false = 0

// console.log(true + true);
// console.log(typeof true);
// console.log('true' + 1);
// console.log('true' + 'true');
// console.log(false + true + true);

// console.log(true + 0.5);
// console.log(false * 0.5);


// -----------------------

// == equality 
// === check value + datatype

// console.log(10 == 10)
// console.log(10 === '10')

// console.log(0.1 + 0.2 == 0.3)
// console.log('a' == 97)

// console.log(10 + 10 == 20)
// console.log(10 + 10 === 20)
// console.log(10 * '10' == 100)
// console.log(10 / '10' === '1')
// console.log(10 / '10' === 1)

// relational operator


// console.log(1 < 2)
// console.log(1 > 2)
// console.log(1 > 2 > 3)
// console.log(3 > 2 > 0)
// console.log(3 < 2 < 1)
// console.log(1 < 2 < 3)
// X-OR
// 1   1   0
// 1   0   1
// 0   1   1
// 0   0   0
/*
1.5
1 ^ 0
1
1 ^ 1
0
0 ^ 0
0
1 ^ 0
1
0 ^ 1
1
1 ^ 1 ^ 0
0
0 ^ 0 ^ 0
0
0 ^ 0 ^ 0
0
NaN
NaN
typeof NaN
'number'
typeof null
'object'
typeof undefined
'undefined'
console.log(typeof ('a' * '2'))
VM812: 1 number
undefined
true == '1'
true
'false' == '0'
false
'10' == '10'
true
typeof Math
'object'
false === '0'
false
false === 0
false
true == 1
true
true === 1
false
typeof 'true'
'string'
'true'
'true'
'skillqode'
'skillqode'
*/

//*************************************************** */
// 14/03/22 variable & datatype
//*************************************************** */

//variale is an identifier that can store information
//variale declare using keyword "var" ,"let","const"
// //
// var let = "C Language";
// console.log(let);
// console.log(subject one);
// console.log(let);
// console.log(typeof let);

//string : collection of charater
//using singlequote '' 
//using doublequote " "
//using backtick  `  introduced in es6
//backtick also known as template literal--(IQ)
//backtick also used in paragraph

// ECMA-262, 6th edition, June 2015
// ECMA-262, 7th edition, June 2016
// ECMA-262, 8th edition, June 2017
// ECMA-262, 9th edition, June 2018
// ECMA-262, 10th edition, June 2019
// ECMA-262, 11th edition, June 2020
// ECMA-262, 12th edition, June 2021

// var sub_one = "C Language";
// var sub_two = 'C++';
// var sub_three = "Javascript";

// var course = sub_one + sub_two + sub_three;
// console.log(course) //C LanguageC++Javascript

// var course = sub_one + " " + sub_two + " " + sub_three;
// console.log(course) //C Language C++ Javascript

// var course = sub_one
//     + " " +
//     sub_two 
//     + " " +
//     sub_three;
// console.log(course) //C Language C++ Javascript


// var course = `our courses ${sub_one} then ${sub_two} then ${sub_three}`
// console.log(course) //our courses C Language C++ Javascript


// var course = `our courses
// ${sub_one} 
// then ${sub_two} 
// then ${sub_three}`
// console.log(course) //our courses C Language C++ Javascript


// numbers

// var decimal_num = 100;
// var double_num = 100.12345;
// var hexadecimal_num = 0xFF;
// var octal_num = 0o377;
// var binary_num = 0b11111111;
// console.log(decimal_num, double_num, hexadecimal_num, octal_num, binary_num);


// console.log(typeof "Hello");                  //string
// console.log(typeof 100);                      //number
// console.log(typeof true);                     //boolean
// console.log(typeof undefined);                //undefined
// console.log(typeof null);                     //object
// console.log(typeof []);                       //object
// console.log(typeof function () { });          //function
// console.log(typeof {});                       //object
// console.log(typeof 100n);                     //bigint
// console.log(typeof Symbol("Hello"));          //symbol

var test = () => { }
console.log(typeof test)

var large_number = 28169268391263926923692846812946281692683912639269236928468129462816926839126392692369284681294628169268391263926923692846812946281692683912639269236928468129462816926839126392692369284681294628169268391263926923692846812946281692683912639269236928468129462816926839126392692369284681294628169268391263926923692846812946281692683912639269236928468129462816926839126392692369284681294628169268391263926923692846812946n;
console.log(large_number);
















