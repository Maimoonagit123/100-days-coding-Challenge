var guests = ["Maimoona", "Muskan", "Amber"];
console.log("Dear ".concat(guests, " you are invited at dinner party..!"));
while (guests.length > 2) {
    var removedGuest = guests.pop();
    console.log("Dear ".concat(removedGuest, ",Sorry! I can't invite you for dinner party.. "));
}
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you are still invited for dinner.."));
});
guests.splice(0, guests.length);
console.log(guests);
// let removedGuest = "Muskan";
// console.log(`Unfortunately, ${removedGuest} I can only invite two peoples for dinner party`); 
