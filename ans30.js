var Users = ["Admin", "User1", "User2", "User3", "User4"];
Users.forEach(function (User) {
    if (User === "Admin") {
        console.log("Hello Admin, You did great job");
    }
    else {
        console.log("\"Hello ".concat(User, ", thank you for logging in again.\""));
    }
});
