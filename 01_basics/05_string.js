const name="sunny"
const m=50
// console.log(name+m);
// console.log("Sunny Siddhu");
console.log(`Hello my name is ${name} and number is ${m}`);
const str=new String('Sunny')
console.log(str[0]);
console.log(str.__proto__);
console.log(str.length);
console.log(str.toUpperCase);
console.log(str.charAt(3));
console.log(str.indexOf('u'));

const str2="Sunny Siddhu"
if(str2.includes("unn")){
    console.log("Found");
}
else{
    console.log("Not Found");
}

if(str2.startsWith("sun")){
    console.log("Yes");
}
else{
    console.log("No");
}

if(str2.endsWith("ddhu")){
    console.log("Yes");
}
else{
    console.log("No");
}
// string slicing  here we can input - values , it starts output from back
console.log(str2.slice(1,4));

// update string
const str3="Human"
const updated=str3.replace("Hu","Vu")

// substring
console.log(str3.substring(0,3));

// remove unwanted space 
const str4="  sunny  "
console.log(str4.trim());

// split method
console.log(str4.split(" "));
