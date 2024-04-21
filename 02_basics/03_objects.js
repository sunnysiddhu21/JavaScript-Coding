// object destructuring

const courses={
    name:"Science",
    price:"100",
    coach:"Sunny"
}

console.log(courses.name);

// destructuring syntax
const {coach}=courses
console.log(coach);

// JSON API intro
// JSON OBJECT syntax
{
    "name":"Sunny Siddhu",
    "age":"21"
}

// sometime you will get APIs in array format
[
    {},
    {},
    {}
]

/*

{"results":[{"gender":"female","name":{"title":"Ms","first":"Serena","last":"de Souza"},"location":{"street":{"number":9658,"name":"Rua Vinte E Quatro de Outubro"},"city":"São Vicente","state":"Rio Grande do Sul","country":"Brazil","postcode":46606,"coordinates":{"latitude":"-76.8676","longitude":"80.0759"},"timezone":{"offset":"-12:00","description":"Eniwetok, Kwajalein"}},"email":"serena.desouza@example.com","login":{"uuid":"d5b0ffec-6d55-40fc-bb3a-a0a66b9c254f","username":"purpleostrich104","password":"chickens","salt":"1wvd7V8T","md5":"c130594e64d08c151ec4613a2f12dbcb","sha1":"d7a0ff342fb8a11c46fd49aba8f2f3b51a51bdc1","sha256":"ef14c145500cdf41b006d1874a57e72c83b012a67bdc8468f9adbcc9d674ada0"},"dob":{"date":"1980-05-25T03:57:31.038Z","age":43},"registered":{"date":"2010-01-22T04:24:35.666Z","age":14},"phone":"(76) 7132-9464","cell":"(20) 2616-1695","id":{"name":"CPF","value":"166.622.689-87"},"picture":{"large":"https://randomuser.me/api/portraits/women/36.jpg","medium":"https://randomuser.me/api/portraits/med/women/36.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/36.jpg"},"nat":"BR"}],"info":{"seed":"c59b39b1bec34bd7","results":1,"page":1,"version":"1.4"}}

*/

// you will find difficulty in understanding this API, will use JSON formatter to understand
// like :- 