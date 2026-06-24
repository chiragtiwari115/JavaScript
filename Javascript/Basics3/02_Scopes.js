// let a = 10;
// const b = 20;
// var c = 30;

// console.log(a);
// console.log(b);
// console.log(c);

if (true) {
    let a = 100;
    const b = 200;
    // var c = 300;
}

// console.log(a);   // output : a is not defined
// console.log(b);   //output : b is not defined
// console.log(c);  // output : 300  //so we don use var in modern javascript because it is not block scoped. It is function scoped.

function one (){
    const username = "chirag";

    function two(){
        const website = "youtube.com";
        console.log(username);
    }   
    console.log(website);  

    two();
}

// one();

if (true) {
    const username = "chirag";
    if(username === "chirag") {
        const website = "youtube.com";
        console.log(username + " " + website);
    }
    // console.log(website);  // output : website is not defined
}

// console.log(username);  // output : username is not defined


//+++++++++++++++++++++++Interesting ++++++++++++++++++++++++++++++++

function addone(num){
    return num + 1;
}

console.log(addone(5));  // output : 6

const addtwo = function(num){
    return num + 2;
}

console.log(addtwo(5));  // output : 7