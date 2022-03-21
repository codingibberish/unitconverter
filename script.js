let number = 10

document.getElementById("mainNumber").textContent = number

let meters = 0
let feet = 0
let liters = 0
let gallons = 0
let kilograms = 0
let pounds = 0


function convert() {
    feet = number * 3.28084
    meters = number / 3.28084
    gallons = number * 0.2199692
    liters = number / 0.2199692
    pounds = number * 2.204623
    kilograms = number / 2.204623

    document.getElementById("length").textContent = number + " meters  = " + feet.toFixed(3) + " feet | " + number + " feet  = " + meters.toFixed(3) + " meters";
document.getElementById("volume").textContent = number + " liters = " + gallons.toFixed(3) + " gallons | " + number + " gallons = " + liters.toFixed(3) + " liters";
document.getElementById("mass").textContent = number + " kilograms = " + pounds.toFixed(3) + " pounds | " + number + " pounds = " + kilograms.toFixed(3) + " kilograms";
}

convert()