// singleton
// Object.create   (constructor)


// object literals
// how to declare a symbol datatype
const mySym=Symbol("key1")
// how to use symbol in object and print 
// correct syntax

const sunyy={
    name: "Sunny siddu",
    [mySym]:"mykey1",
    age: 21,
    location: "Meerut",
    email: "sunnysiddhu886@gmail.com",
    isLoggedIn: false,
    lastLoginIn: 10
}

console.log(sunyy.name)
console.log(sunyy["email"])
// to access the symbol
console.log(sunyy[mySym])

// how to change object values

sunyy.email="sunny@gmail.com"
// if you don't want anyone to change object, then use freeze
Object.freeze(sunyy)

// create greeting function and use a variable
sunyy.greeting=function(){
    console.log("Hello world")
}

sunyy.greeting2=function(){
    console.log(`Hello world ${this.name}`)
}

console.log(sunyy.greeting()) // this will give just function reference
console.log(sunyy.greeting2())


