var cantCome = ["Urwah", "Sanan"];
{
    console.log("".concat(cantCome, ", cant make it to the dinner."));
}
;
var newGuest = ["Shoaib", "Yasmeen"];
newGuest[newGuest.indexOf(cantCome)] = newGuest;
newGuest.forEach(function (cantCome) {
    console.log("".concat(cantCome, ", Would you like to dinner with me?"));
});
