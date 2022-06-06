// document.write("Hello")
// console.log("Hello")

// var a = 10
// var b = 20
// console.log("a : ", a)
// console.log("b : ", b)
// console.log("a+b : ", a)//concate
// console.log("a+b : ", a + b)
// console.log("a+b : " + (a + b))

// var str = "skill"
// var digit = 10
// var decimal = 3.14
// var char = 'a'

// var digitChar = digit + char
// var digitDecimal = digit + decimal
// console.log(digitChar)
// console.log(digitDecimal)
// var digitChar = digit + char
// var digitChar = digit + char
// typeof

// console.log(typeof (str))
// console.log(typeof (digit))
// console.log(typeof (decimal))
// console.log(typeof (char))
// console.log()

// digit = digit + char
// var digitDecimal = digit + decimal
// console.log(typeof (digit))
// console.log(digitDecimal)

// var a = 95
// var b = '97'
// var b1 = "9"

// console.log(b == 'a')
// console.log(a > b)
// console.log(typeof (a))
// console.log(typeof (b))
// console.log(typeof (b1))

// console.log(a == b)//value
// console.log(a === b)//check datatype
// console.log(a > b)
// if (a > b)
//     console.log("a is greater...")
// else
//     console.log("b is greater...")

// 28/02/2022
//var let const
//hoisting
// undefined NaN(Not a Number) null

// var a = 10
// // var
// console.log(typeof (a))
// a = a + 10
// console.log(typeof (a))
// a = a + 's'
// console.log(typeof (a))
// console.log(a)

// var a = 10
// var b = '10'
// console.log(a == b)
// console.log(a === b)
// console.log(undefined == NaN)
// console.log(NaN == NaN)
// console.log(undefined === undefined)

// a = 10
// console.log(a)

//07-03-2022

// console.log(1 + 1);
// console.log(1 + '1');
// console.log(10 * '2');
// console.log(10 / '2');
// console.log(0.1 + 0.2 == 0.3);//inter
// console.log(0.1 * 0.2);//inter
// console.log(10 == '10');
// console.log(10 === '10');
// console.log(10 / 0);

// true = 1
// false =0
// console.log(typeof (true))
// console.log(true + true)
// console.log(true + true + false + true)
// console.log(true * true)
// console.log(true * false)
// console.log(true / false)

// console.log(1 < 2);
// console.log(2 > 3);
// console.log(1 < 2 < 3);
// 1 < 2
// 1<3
// console.log(1 < 2 < 3);
// console.log(3 > 2 > 1);
// 3>2
// 1>1

// Varivable 1/06/2022

//string
//collection of "chatacters" called as "string"
//we will declare the string by using ""(double quotes), ''(single quotes) and ``(backtick)
//``(backtick) operator introduced in ES6
//``(backtick) operator also called as "template literal"
//``(backtick) operator used to define the paragraphs (multiline strings)
// var sub_one = "ReactJS";
// var sub_two = "NodeJS";
// var sub_three = "MongoDB";
// var mern_stack = `front end ${sub_one} , back end  .....${sub_two} , database ....${sub_three}`;
// let mern_stack =
//   "front end   " +
//   sub_one +
//   ", back end  " +
//   sub_two +
//   ", Database " +
//   sub_three;
// console.log(mern_stack);

//ReactJS.....NodeJS....MongoDB

// let string = `Lorem ipsum dolor sit amet consectetur adipisicing elit.

// Illo velit, soluta necessitatibus architecto nam explicabo veniam sequi sint a distinctio placeat sapiente quisquam omnis error numquam nemo ex magni tenetur.

// Vero nisi aliquam explicabo ut quae facere animi porro error magni eligendi accusantium, repellendus quod dolore illum architecto quo. Ratione.`;

// console.log(string);

//numbers
//decimal
//double / float
//hexadecimal
//octal
//binary
//hexadecimal number will prefix with "0x"
//octal number will prefix with "0o"
//binary number will prefix with "0b"
// var decimal_num = 100;
// var double_num = 100.12345;
// var hexadecimal_num = 0x123abc;
// var octal_num = 0o123;
// var binary_num = 0b1100;
// console.log(decimal_num, double_num, hexadecimal_num, octal_num, binary_num);

//boolean
//true / false
//true - 1
//false - 0
// var flag = true;
// var flag1 = false;
// console.log(flag);
// console.log(flag1);
// console.log(true + true); //2
// console.log(true + false); //1
// console.log(1 + true); //2
// console.log(1 / true); //1
// console.log(true / true); //1
// console.log(true / false); //Infinity
// console.log(true / "A"); //NaN

//undefined
// var phone;
// console.log(phone); //undefined

// phone = null;
// console.log(phone); //null

//bigint
//bigint is the "datatype"
//used to represent the "large" numbers
//bigint numbers suffix with "n"
// >2^53 - 1
var large_number =
  28169268391263926923692846812946281692683912639269236928468129462816926839126392692369284681294628169268391263926923692846812946281692683912639269236928468129462816926839126392692369284681294628169268391263926923692846812946281692683912639269236928468129462816926839126392692369284681294628169268391263926923692846812946281692683912639269236928468129462816926839126392692369284681294628169268391263926923692846812946n;
console.log(large_number);

// var x = Symbol("hello");
// console.log(x);

//string
//number
//boolean
//undefined
//null
// bigint;
// Symbol;
console.log(typeof "Hello"); //string
console.log(typeof 100); //number
console.log(typeof true); //boolean
console.log(typeof undefined); //undefined
console.log(typeof null); //object
console.log(typeof []); //object
console.log(typeof function () {}); //function
console.log(typeof {}); //object
console.log(typeof 100n); //bigint
console.log(typeof Symbol("Hello")); //symbol

// array object
//ojec
