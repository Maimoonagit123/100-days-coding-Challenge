function describing_cities(city, country) {
    if (city === void 0) { city = "Karachi"; }
    if (country === void 0) { country = "Pakistan"; }
    console.log("".concat(city, ", is in ").concat(country, ".."));
}
describing_cities();
describing_cities("Turkey");
describing_cities("United states", "California");
