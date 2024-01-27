let score="33"
// console.log(typeof score)
//console.log(typeof(score));

let valueInNumber=Number(score)
// console.log(valueInNumber);
// console.log(typeof(valueInNumber));

/*
  "33" => 33
  "33abc" => NaN  but NaN type is number
  true/false = 1/0

*/

let isLoggedIn=1
let booleanLoggedIn=Boolean(isLoggedIn)

// console.log(booleanLoggedIn);

/**
  when 1=> true 0=> false
  "" => false 
  "sunny" => true
 */

let someNumber=33

let StringNum=String(someNumber)
// console.log(StringNum);
// console.log(typeof(StringNum));

// ******************** Operations *************
let value=10
let negValue=-value
// console.log(negValue);

/*   basic maths operations
console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**2);
console.log(2/2);
console.log(2%2); 

*/

let str1="Sunny"
let str2=" Siddhu"
let str3=str1+str2
// console.log(str3);

// complex situations in operations
console.log("1"+2);  // output > 12
console.log(1+"2");  // 12
console.log("1"+"2"); // 12
console.log("1"+2+2); // 122 
// here js is doing all conversion in string type

// but when we just reverse this, output will be different

// console.log(1+2+"2");
// here js is first adding interger and then string concatenate

// Increament & decremnent
// Read more on mdn documentions
let cnt=100
++cnt;
console.log(cnt);
cnt++;
console.log(cnt);