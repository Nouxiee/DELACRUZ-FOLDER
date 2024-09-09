function centimeterToFeet(centimeter) {
    let feet = centimeter * 0.0328084;
    return feet.toFixed(2);
}

function compute() {
    let centimeter = parseFloat(document.getElementById("Centimeter").value);
    let feet = centimeterToFeet(centimeter);
    document.getElementById("Feet").value = feet;
    document.getElementById("Feet").disabled = true;
}

function clear() {
    document.getElementById("Centimeter").value = "";
    document.getElementById("Feet").value = "";
    document.getElementById("Feet").disabled = false;
}
