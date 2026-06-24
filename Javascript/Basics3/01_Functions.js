function myFunction() {
    console.log("C");
    console.log("h");
    console.log("i");
    console.log("r");
    console.log("a");
    console.log("g");
}

// myFunction();

function sumTwoNumbers(num1, num2) {
    return num1 + num2;
}

// const result = sumTwoNumbers(5, 7);
// console.log(result);

function sumTwoNumbersAndMultiply(num1, num2, num3) {
    const sum = num1 + num2;
    return sum * num3;
}

const result2 = sumTwoNumbersAndMultiply(5, 7, 10);
// console.log(result2);

function loginuserMessage(username = "chirag") {
    if (!username) {
        console.log( "Please provide a username");
        return;
    }
    return  `${username} just logged in`;
}

// console.log(loginuserMessage("Chirag"));
// console.log(loginuserMessage());

function calculateBill(billAmount, taxRate = 0.13, tipRate = 0.15) {
    const total = billAmount + (billAmount * taxRate) + (billAmount * tipRate);
    return total;
}

// const myTotal = calculateBill(100, 0.13, 0.2);
// console.log(myTotal);

const user = {
    username: "chirag",
    price: 199
}

function handleObject(anyobject){
console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user);

const arr = [1,2,3,4,5];

function ReturnSecondValue(anyarray){
return anyarray[1];
}

// console.log(ReturnSecondValue(arr));
// console.log(ReturnSecondValue([12,34,67,433]))


