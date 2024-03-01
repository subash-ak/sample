function convertCelsiusToFahrenheit() {
    var celsiusInput = document.getElementById('celsiusInput').value;
    var fahrenheitResult = celsiusInput * 9 / 5 + 32;
    document.getElementById('result').innerHTML = celsiusInput + "°C is " + fahrenheitResult.toFixed(2) + "°F";
  }
  
  function convertFahrenheitToCelsius() {
    var fahrenheitInput = document.getElementById('fahrenheitInput').value;
    var celsiusResult = (fahrenheitInput - 32) * 5 / 9;
    document.getElementById('result').innerHTML = fahrenheitInput + "°F is " + celsiusResult.toFixed(2) + "°C";
  }
  