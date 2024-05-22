var guests = ["Gule Rana", "Mehmood", "Zakir"];
guests.forEach(function (guest) {
    console.log("\"Great News! ".concat(guest, " I'm arranging the biggest party because of my promotion..\""));
});
guests.unshift("Abdul Gaffar");
guests.splice(guests.length / 3, 0, "Mario Marina");
guests.push("Masood Hashmi");
guests.forEach(function (guest) {
    console.log("\"Dear ".concat(guest, ", I would like to invite you at dinner party arranged by me for my promotion..\""));
});
