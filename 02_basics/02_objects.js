const user={}
user.id="123abc"
user.name="Sunny Siddhu"

const regularUser={
    name:{
        userFullName:{
            firstName:"Sunny",
            lastName:"Siddhu"
        }
    }
}

//console.log(regularUser.name.userFullName.firstName);

// merge 2 objects

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}

//const obj3=Object.assign({},obj1,obj2) 

const obj3={...obj1,...obj2}; // using spread method

// to extract only keys or values of an object. return type will be array

console.log(Object.keys(sunyy));
console.log(Object.values(sunyy));

// to check whether property exist or not
console.log(sunyy.hasOwnProperty('name'));