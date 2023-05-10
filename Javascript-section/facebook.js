var database = [
    {
        username: "danielly",
        password: "123456"
    }
];

var newsFeed = [
    {
        username: "duda",
        timeline: "So tired from all that learning!"
    },
    {
        username: "nanny",
        timeline: "Javascript is sooooooo exciting!"
    },
];

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

function signIn(user, pass) {
    if(user === database[0].username && pass === database[0].password) {
        console.log(newsFeed)
    } else {
        alert("Sorry, wrong username and password.");
    }
}

signIn(userNamePrompt, passwordPrompt);