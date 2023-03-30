function convertTemp() {
    var celsius = document.getElementById("celsius").value;
    var fahrenheit = (celsius * 9/5) + 32;
    var resultElement = document.getElementById("result");
    resultElement.innerHTML = celsius + " Celsius is equal to " + fahrenheit + " Fahrenheit.";
    resultElement.style.display = "block";
  }
  