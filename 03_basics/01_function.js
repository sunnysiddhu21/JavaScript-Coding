// when you create function definition, then parameters are passed in it.
function add(num1,num2){
    return num1+num2
}

// but when fucntion is called, those are called arguments
add(2,4);
// ways to pass parameters

function loginUser(username){
    return `${username} just logged in`
}
// rest or sprea operator for more parameters
function calculatePrice(...num1){
    return num1
}

console.log(calculatePrice(2,200,400,300));

// pass object into function

const user={
    name:"Sunny Siddhu",
    age:21,
    location:"Meerut"
}

function handleObject(anyOject){
    console.log(`${anyOject.name} is good boy`);
}

handleObject(user)
// it will error or undefined when property is slightly changed like age -> ages
// we can also pass like this 
handleObject({name:"Sunny Siddhu"})

// pass array into function
const myArr=[12,300,200]
function handleArray(getArray){
    return getArray[1]
}

handleArray(myArr)