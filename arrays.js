/*
    array
    *****


        collection of "elements" called as "array"

        index starts from "0"

        []
*/
let arr = [10, 20, "thirty", 40, " 50", 60, "70", 80, 90, 100];

// console.log(typeof arr);
// console.log(arr);
// console.log(arr["0"]);
// console.log(arr[3.0]);
// console.log(arr[3.1]);
// arr[3.5] = 45;
// arr["A"] = 110;

// console.log(arr[3.5]);
// console.log(arr["A"]);
console.log(arr[2][0]);
// console.log(arr.length);

// let arr = [10, 20, 30, 40, 50];
// console.log(arr[0], arr[1], arr[2], arr[3], arr[4]);
// console.log(arr[-1]);
// console.log(arr[5], arr[100]);

//length
// The length property of an object which is an instance of type Array sets or returns the number of elements in that array.

// let arr = [10, 20, 30, 40, 50];
// console.log(arr.length);
// let arr1 = [10, 20]; //
// arr1[2] = 30;
// console.log(arr1.length);
// arr1[100] = 1000;
// console.log(arr1.length);

// let arr2 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// console.log(arr2.length);
// arr2.length = 5;
// console.log(arr2[0], arr2[4], arr2[5], arr2[9]);*
//delete
//delete the particular

// If you want an array element to exist but have an undefined value, use the undefined value instead of the delete operator.
// let b;

// let arr = [10, 20, 30, 40, 50];
// arr.length = 10;
// arr[2] = undefined;
// console.log(arr);
// console.log(arr[7]);

// console.log(arr.length);
// delete arr[4];
// console.log(arr.length);
// delete arr[0];
// arr[7] = undefined;
// arr[4] = undefined;
// delete arr[7];
// console.log(arr);
// console.log(arr[4] );
// console.log(arr[0] );
// console.log(arr[8]);
// console.log(arr);

//push()
//pop()
//unshift()
//shift()
// let arr = [20, 30, 40];
// console.log(arr);
// arr.push(50);
// console.log(arr);
// arr.unshift(10);
// console.log(arr);
// arr.pop();
// console.log(arr);
// arr.shift();
// console.log(arr);
// The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
//splice()
// let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// arr.splice(-4, 3, 11, 12, 13);
// arr.splice(4, 3);///start from 4 and delete 3 element
// console.log(arr);
// arr.splice(-2);
// arr.splice(6, 1);
// console.log(arr);
// arr.splice(0, 1);
// console.log(arr);
// arr.splice(1, 1);
// console.log(arr);
// arr.splice(2, 3, 11, 12, 13);
// console.log(arr);
// arr.splice(1, 0, 30);
// console.log(arr);
// arr.splice(0, 1, 11, 22);
// console.log(arr);
// arr.splice(9, 0, 100);
// console.log(arr);
// arr.splice(1);
// console.log(arr.splice(1));
// console.log(arr);

// let arr1 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

//10, 20, 30, 40, 50, 60, 70, 80, 90, 100
//                       -4  -3   -2   -1
// arr1.splice(-4, 2);
// console.log(arr1);

// arr1.splice(-4, -2);
// console.log(arr1);

//slice()

// The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array.
// The original array will not be modified.

// let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// console.log(arr.slice());
// console.log(arr.slice(3));
// console.log(arr.slice(-2));
// console.log(arr.slice(3, -2));
// console.log(arr.slice(3, -9));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(1, 5));
// console.log(arr.slice(-10, 8));
// console.log( arr.slice(-2) );
// console.log(arr);

/*
// spread operator
// concat
// immutability
//deep cloning
// ...

//concat
let arr1 = [10,20,30];
let arr2 = [40,50,60];
console.log( [...arr1,...arr2] );


//immutability
let grand = ["5acrs"];
let father = [...grand,"5acrs"];
let child = [...father,"10acrs"];
console.log(child);         


//deep cloning
let c1 = [10,20,30];
let xerox = [...c1];
c1.push(40);
xerox.push(50);[ 10, 20, 30, 50 ]
console.log(c1);                        
console.log(xerox);                     


let arr = [10,20,30,40,50,60];
//[40,50,60,10,20,30]

let x = arr.slice(3);
let y = arr.slice(0,3);
console.log( [...x,...y] );
*/

/*
//findIndex()
let arr = [10,20,30,40,50,60];
console.log(
    arr.findIndex((element,index)=>{
        return element === 30;
    })
);           

console.log(
    arr.findIndex((element,index)=>{
        return element == 60;
    })
);          

console.log(
    arr.findIndex((element,index)=>{
        return element === 100;
    })
);         

arr.splice(arr.findIndex((element,index)=>{
    return element == 20;
}),1);

console.log(arr);       


arr.splice(arr.findIndex((element,index)=>{
    return element == 50;
}),1);

console.log(arr);



let arr1 = [{"cost":"100 INR"},
            {"cost":"200 INR"},
            {"cost":"300 $"},
            {"cost":"400 INR"},
            {"cost":"500 INR"}];
arr1.splice(arr1.findIndex((element,index)=>{
    return element.cost == "300 $";
}),1);
console.log( arr1 );
*/

/*
    //map()
    console.log(
        [1,2,3,4,5].map((element,index)=>{
            return element*100;   
        })
    );
    //[ 100, 200, 300, 400, 500 ]

    console.log(
        [1,2,3,4,5].map(element=>element*10)
    );
    //[ 10, 20, 30, 40, 50 ]
*/

/*
    //filter()
    console.log(
        [1,2,3,4,5].filter((element,index)=>{
            return element>=3;
        })
    );
    //[ 3, 4, 5 ]

    console.log(
        [1,2,3,4,5].map((element,index)=>{
            return element*100;
        }).filter((element,index)=>{
            return element>=600;
        })
    );
*/

/*
console.log(
    [1,2,3,4,5].reduce((firstElement,nextElement)=>{
        return firstElement+nextElement;
    })
);
//15


console.log(
    [1,2,3,4,5].reduce((firstElement,nextElement)=>{
        return firstElement+nextElement;
    },100)
);
//115



console.log(
    [1,2,3,4,5].map((element,index)=>{
        return element*100;
    }).filter((element,index)=>{
        return element>=300;
    }).reduce((firstElement,nextElement)=>{
        return firstElement+nextElement;
    })
);

//1200
*/

/*
//reduceRight()
console.log(
    ["ES11","To","Welcome"].reduceRight((firstElement,nextElement)=>{
        return firstElement+" "+nextElement;      
    })
);
//Welcome To ES11
*/

/*
console.log(
    [1,[2],[3],[4]].flat(1)
);

//[ 1, 2, 3, 4 ]

console.log(
    [[[[1]]],[[[[[[[2]]]]]]],[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]].flat(Infinity)
);

//[ 1, 2, 3 ]
*/

/*
let arr1 = [1,2,3];
let arr2 = ["one","two","three"]
//[[1,"one"],[2,"two"],[3,"three"]]
//[1,"one",2,"two",3,"three"]

console.log(
    arr1.flatMap((element,index)=>{
        return [ element,arr2[index] ]
    })
);
//[ 1, 'one', 2, 'two', 3, 'three' ]
*/

/*
let arr1 = [1,2,3,1,2,3];
// arr1.forEach((element,index)=>{
//     console.log( arr1.indexOf(element) );
// })

console.log(
    arr1.filter((element,index)=>{
        return arr1.indexOf(element) === index;
    })
);
*/

/*
    //sort()
    //ascending / descending
    console.log(
        [1,5,2,4,3].sort((arg1,arg2)=>{
            return arg1-arg2;
        })
    );

    //[ 1, 2, 3, 4, 5 ]


    console.log(
        [5,1,2,4,3].sort((arg1,arg2)=>{
            return arg2-arg1;
        })
    );
    //[ 5, 4, 3, 2, 1 ]


    console.log(
        [1,5,2,4,3].sort((arg1,arg2)=>{
            return arg1-arg2
        })[1]
    );          //2


    console.log(
        [1,5,2,4,3].sort((arg1,arg2)=>{
            return arg2-arg1;
        })[1]
    );          //4 
*/

/*

//reverse()
//used to reverse the array elements
console.log(
    [1,2,3,4,5].reverse()
);
//[ 5, 4, 3, 2, 1 ]


console.log(
    Array.from("Hello").reverse().toString().replaceAll(",","")
);

//[ 'H', 'e', 'l', 'l', 'o' ]
//[ 'o', 'l', 'l', 'e', 'H' ]
//o,l,l,e,H
//ol,l,e,H
//olleH


let arr = ["Angular","React","NodeJS","VueJS"];
//Res 1: ["VueJS","NodeJS","React","Angular"]
//Res 2: ["ralugnA","tcaeR","SJedoN","SJeuV"]
//Res 3: ["SJeuV","SJedoN","tcaeR","ralugnA"]

*/

/*
console.log(
    "welcome to fullstack ui".substr(0,7)
);

//welcome



console.log(
    "welcome to fullstack ui".substr(1,2)
);

//el

console.log(
    "welcome to fullstack ui".substr(-2,2)
);

//ui



console.log(
    "welcome to es6".substring(0,7)
);
//welcome


console.log(
    "welcome to es6".substring(8,10)
);



console.log(
    "welcome to es6".substring(11)
);          //es6




//forEach()
["Hello_1","Hello_2"].forEach((element,index)=>{
    console.log(element);
});


for(let element of ["Hello_1","Hello_2"]){
    console.log(element);
}


let obj = {
    "key1":"Hello_1",
    "key2":"Hello_2",
    "key3":"Hello_3"
};

for(let key in obj){
    console.log( obj[key] );
}
*/

/*
let arr1 = [10,20,30,40,50,60,70,80,90,100];
arr1.copyWithin(2);
console.log(arr1);          //[10,20,10,20,30,40,50,60,70,80]


let arr2 = [10,20,30,40,50,60,70,80,90,100];
arr2.copyWithin(5);
console.log(arr2);  //[10,20,30,40,50,10,20,30,40,50]


let arr3 = [10,20,30,40,50,60,70,80,90,100]
arr3.copyWithin(8);
console.log(arr3);    //[10,20,30,40,50,60,70,80,10,20]


let arr4 = [10,20,30,40,50,60,70,80,90,100];
arr4.copyWithin(2,4);
console.log(arr4);          //[10,20,50,60,70,80,90,100,90,100]


let arr5 = [10,20,30,40,50,60,70,80,90,100];
arr5.copyWithin(3,6);
console.log(arr5);    //[10,20,30,70,80,90,100,80,90,100]


let arr6 = [10,20,30,40,50,60,70,80,90,100];
arr6.copyWithin(2,4,7);
console.log(arr6);      //[10,20,50,60,70,60,70,80,90,100]


let arr7 = [10,20,30,40,50,60,70,80,90,100];
arr7.copyWithin(1,5,8);
console.log(arr7);          //[10,60,70,80,50,60,70,80,90,100]
*/

/*
let arr = [10,20,30,40,50];
let arr1 = arr.fill(100);                    
console.log(arr1);                      //[ 100, 100, 100, 100, 100 ]

let arr2 = arr1.fill(200,1);
console.log(arr2);                      //[ 100, 200, 200, 200, 200 ]

let arr3 = arr2.fill(300,2);
console.log( arr3 );                    //[ 100, 200, 300, 300, 300 ]

let arr4 = arr3.fill(400,3,4);
console.log(arr4);                      //[ 100, 200, 300, 400, 300 ]

let arr5 = arr4.fill(500,4);
console.log(arr5);                      //[ 100, 200, 300, 400, 500 ]
*/

//some()
// console.log(
//   [10, 20, 30, 40, 50].some((element, index) => {
//     return element >= 50;
//   })
// );
//true

//every()
// console.log(
//   [1, 2, 3, 4, 5].every((element, index) => {
//     return element >= 1;
//   })
// );
//true

//includes()
// console.log(["hello_1", "hello_2"].includes("hello_1"));

//true

// console.log(["hello_1", "hello_2"].includes("hello"));

//false

//find()
// console.log(
//   [1, 2, 3, 4, 5].find((element, index) => {
//     return element == 10;
//   })
// );
