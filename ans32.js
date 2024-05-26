var current_Users = ["user1", "User3", "user2", "User4", "User6"];
var new_Users = ["User5", "user8", "User9", "User10", "user7"];
new_Users.forEach(function (newUser) {
    if (current_Users.some(function (currentUser) { return currentUser.toLowerCase() === newUser.toLowerCase(); })) {
        console.log("".concat(newUser, " will need to enter a new username."));
    }
    else {
        console.log("".concat(current_Users, " is available."));
    }
});
// let current_users: string[] = ["user1", "admin", "user3", "user4", "user5"];
// let new_users: string[] = ["User1", "User6", "user7", "admin", "User9"];
// new_users.forEach(newUser => {
//     if (current_users.some(currentUser => currentUser.toLowerCase() === newUser.toLowerCase())) {
//         console.log(`${newUser} will need to enter a new username.`);
//     } else {
//         console.log(`${newUser} is available.`);
//     }
// });
