function convert(){
    let centimeter = document.getElementById("centimeter").value;
    let feet = centimeter * 0.0328084;
    document.getElementById("feet").value = feet.toFixed(2);
  }
    function clearInput(){
       document.getElementById("centimeter").value = "";
       document.getElementById("feet").value = "";
  }