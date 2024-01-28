// array
const arr=[1,2,3,4,5]
// console.log(arr[0]);
arr.push(6) // add in end
// console.log(arr.pop());  // remove from end
// console.log(arr.length());
const ar1=new Array(1,2,3,4,5)
ar1.shift()
//console.log(ar1);
// console.log(ar1.indexOf(4));
// console.log(ar1.includes(3));

const newAr=ar1.join()
// console.log(ar1);
// console.log(newAr);
// console.log(typeof newAr);

// slice splice
const ar2=ar1.slice(0,2)
console.log(ar2);
// array merging by push method
// it consider it single element
const x=["sunny","hunny","minshu"]
const y=["virat","dhoni","rohit"]

console.log(x.push(y));

// concat method to simply add elemnt wise
const z=x.concat(y)
console.log(z);

// by spread method
const a=[...x,...y]
console.log(a);

const b=[1,2,3,[4,5],6,7,[8,[9,10]]]

const c=b.flat(Infinity)
console.log(c);

// when we get multiple dtype in array

// check if it is array or not

console.log(Array.isArray("Sunny"));

// convert it into array
console.log(Array.from("Sunny"));

// interesting case gives empty array
console.log(Array.from({name: "sunny"}));

// to get array from collection of ele

let sr1=100
let sr2=200
let sr3=300

console.log(Array.of(sr1,sr2,sr3));
