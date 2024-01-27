/*console.log(2>1);
console.log(2<1);
console.log(2>=1);
console.log(2!=1);
console.log(2<=1); */

// problem comes when we are comparing different datatypes

// console.log("2">1);  // true
// console.log("02">1);  // true

// plz check for same datatypes when you are doing comparison

// console.log(null==0); // false
// console.log(null>0);  // false
// console.log(null<0);  // false
// console.log(null>=0); // true
/**
  the reason is that an equality check (==) && comparison check (< > <= >=) works differently
  comparisons convert null to a number, treating it as 0
  that'why nul>=0 is true and null>0 is false

  same confusion is in undefined but it always gives you false
 */

// console.log(undefined>0);
// console.log(undefined==0);
// console.log(undefined>=0);
// console.log(undefined<=0);

// strict check (===)
console.log("2"===2); // output false