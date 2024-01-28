/**
 datatype categorization on the basis on how they store in memory and how they are fetch
 types :- primitive & non-primitive(reference type)

  primitive 
    :- string, number,booloean,null,undefined,symbol, BigInt

  Reference type
    :- arrays, objects,functions
  js is dynamically typed lang
 */

const score=100
const num=100.5
const isLoggedIn=1
const temp=null
let userEmail;

const id=Symbol('123')
const anotherId=Symbol('123')

// console.log(id);
// console.log(anotherId);

// console.log(id==anotherId);

const heros=["ast","batman","ironman","wipe"];
let myobj={
    name: "sunny",
    age: 22,
}

const myfunc=function(){
    console.log("Sunny Siddhu");
}

console.log(typeof myobj);

/**
 Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
 */
  