const accountID = 1213131
let accountEmail = "chirag@123"//can be changed anywhere in both local/block and global scope
var accountPassword = "hahaha1505"//can only be changed in block scope 
accountcity = "ujjain"//similar to let can be changed anywhere
let accountstate

//accountID = 2 //not allowed 

accountEmail = "chiragtiwari@123"
accountPassword = "12121212"
accountcity = "indore"

console.log(accountID);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountstate);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountID,accountEmail,accountPassword,accountcity])

