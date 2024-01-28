const num=100
// console.log(num);

const n=new Number(100)
// console.log(n);
//console.log(typeof n);

// console.log(n.toString());
// console.log(typeof n);
// float value
const x=new Number(100.000)
// console.log(x.toFixed(2));

const y=new Number(123.894)
// console.log(y.toPrecision(4));

const z=10000000
// console.log(z.toLocaleString()); // 10,000,000
// ACCORDING TO INDIAN STANDARDS UNIT
// console.log(z.toLocaleString(en-IN));

// ******** Maths *********

console.log(Math);
console.log(Math.abs(-10)); // 10
console.log(Math.round(4.6));// 5
console.log(Math.ceil(4.3)); //5
console.log(Math.floor(4.2)); //4
console.log(Math.min(4,3,4,56));
console.log(Math.max(12,10,23));
console.log(Math.random()); // value 0-1

// get random value in range
const min=10
const max=30
console.log(Math.floor(Math.random()*(max-min+1))+min)


