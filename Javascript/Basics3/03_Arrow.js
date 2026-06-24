const user = {
    username: "Chirag",
    price: 199,

    welcomeMessage: function() {
        console.log(`${this.username} Welocome to website `);
    }
}

// user.welcomeMessage();
// user.username = "Manoj"
// user.welcomeMessage();

console.log(this);