
const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(1));

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));//represents indian number system

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4)); //absolute |-1| = 1
// console.log(Math.round(4.6)); //round off
// console.log(Math.ceil(4.2)); //uppar wali value (like 4.2 will be 5)
// console.log(Math.floor(4.9)); //niche wali value (like 4.9 will be 4)
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random()); //Math.random me value ayegi 0 or 1 ke beechme
console.log((Math.random()*10) + 1); //* 10 se hum ek decimal picche chale gaye and and + 1 se 0.01 wala case bhi take care karliya
console.log(Math.floor(Math.random()*10) + 1); // above all rounded off to lower value

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min) //with this the value will always be above 10
