// date
let mydate=new Date()
//console.log(mydate);
// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toISOString());
// console.log(mydate.toLocaleDateString());
//console.log(mydate.toJSON());
//console.log(mydate.getHours());
//console.log(mydate.getMonth());
// console.log(typeof mydate); // object

const date1=new Date(2023,0,22)
// console.log(date1.toLocaleDateString());
console.log(date1.toLocaleString('default',{
    weekday:"long",
    month: "long",
    year: "2-digit"
}))