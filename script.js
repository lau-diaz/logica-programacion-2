
let gradosCelsius = prompt("Ingresa los grados Celsius:");

gradosCelsius = parseFloat(gradosCelsius);

if (!isNaN(gradosCelsius)) {
    
    let fahrenheit = (gradosCelsius * 9/5) + 32;
    console.log(`Grados Fahrenheit: ${fahrenheit}`);

    let kelvin = gradosCelsius + 273.15;
    console.log(`Grados Kelvin: ${kelvin}`);
} else {
    console.log("Ingrese un número válido.");
}