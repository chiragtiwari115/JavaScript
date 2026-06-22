//Const : - Once assigned, you cannot reassign it.
//Let : -  You can change its value later.

//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]; //array

let myObj = {        //object
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);
console.log(typeof id);

// https://262.ecma-international.org/5.1/#sec-11.4.3


//+++++++++++++++++++++++++++++++++++++++++++

//Stack(primitive), Heap (Non Primitive)

let myYoutubeName = "chiragdotcom"

let anothername = myYoutubeName
anothername = "chaiwithcode"

// console.log(myYoutubeName)
// console.log(anothername)

const UserOne =  {
    email: "chiragtiwari@google.com",
    Upi: "upi@123"
}
const UserTwo = UserOne
UserTwo.email = "nananaa@google.com"
console.log(UserOne.email)
console.log(UserTwo.email)



//****************************Practice***********************

// const arr = [1,2,3,45,5]
// console.log(arr)

// let myfunc = function(){
// console.log("hello guys")
// }

// console.log(myfunc)