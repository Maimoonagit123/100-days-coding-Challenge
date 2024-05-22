var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var favPlaces = ["Turkey", "Iran", "Maldives", "Saudia Arabia", "Japan"];
console.log("Original order:", favPlaces);
console.log("Alphabetical order:", __spreadArray([], favPlaces.sort(), true));
console.log("Original order:", favPlaces);
console.log("Reversed Alphabetical order:", __spreadArray([], favPlaces.sort().reverse(), true));
console.log("Original order:", favPlaces);
favPlaces.reverse();
console.log("Reversed order:", favPlaces);
favPlaces.sort();
console.log("Alphabetical order:", favPlaces);
