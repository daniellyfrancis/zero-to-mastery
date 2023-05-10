var database = [
    {
        username: "danielly",
        password: "123456"
    },
    {
        username: "sally",
        password: "123654"
    },
    {
        username: "michelly",
        password: "456456"
    },

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

function isUserValid(username, password) {
    for (var i=0; i < database.length; i++) {
        if(database[i].username === username && database[i].password === password) {
            return true;
        }
    }
    return false;
}

function signIn(username, password) {
    if(isUserValid(username, password)) {
        console.log(newsFeed)
    } else {
        alert("Sorry, wrong username and password.");
    }
}

var userNamePrompt = prompt("What\'s your username?");
var passwordPrompt = prompt("What\'s your password?");

signIn(userNamePrompt, passwordPrompt);