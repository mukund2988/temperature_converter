const url = "/";
let data;
document.addEventListener("DOMContentLoaded", function () {
    const temperatureInput = document.getElementById("temperatureInput");
    const unitSelector = document.getElementById("unitSelector");
    const convertButton = document.getElementById("convertButton");
    const result = document.getElementById("result");

    convertButton.addEventListener("click", function () {
        const inputValue = parseFloat(temperatureInput.value);
        const selectedUnit = unitSelector.value;

        if (!isNaN(inputValue)) {
            let convertedTemperature;
            let unit;

            if (selectedUnit === "celsius") {
                convertedTemperature = (inputValue - 32) * (5 / 9);
                unit = "Celsius";
            } else if (selectedUnit === "fahrenheit") {
                convertedTemperature = (inputValue * 9 / 5) + 32;
                unit = "Fahrenheit";
            } else if (selectedUnit === "kelvin") {
                convertedTemperature = inputValue + 273.15;
                unit = "Kelvin";
            }

            result.textContent = `Converted Temperature: ${convertedTemperature.toFixed(2)} ${unit}`;

            data = {
                input: temperatureInput.value,
                convertedTo: `${convertedTemperature.toFixed(2)} ${unit}`
            }
            const requestOptions = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            };
            fetch(url, requestOptions)

        } else {
            result.textContent = "Please enter a valid number.";
        }
    });
});

