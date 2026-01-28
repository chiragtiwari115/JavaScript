const name = "chirag Tiwari";
const repocount = 50;

// console.log(name + repocount + "value")
console.log(`Hello my name is ${name} and my repo count is ${repocount}`);

const gamename = new String("mom-stealer");
console.log(gamename[0])
console.log(gamename.__proto__)

// console.log(gamename.toUpperCase())
// console.log(gamename.length)

console.log(gamename.charAt(2))
console.log(gamename.indexOf('t'))

const substring = gamename.substring(0,3)
console.log(substring)

const anotherString = gamename.slice(-8,3)
console.log(anotherString)

const newStringOne = "   chirag    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gamename.split('-'));