const measureKelvin = function(){
    const measurement = {
        type: "temp",
        unit: "celcius",
        value: parseInt(
        prompt("Degrees celsius:") // always returns a string
        ) 
    };
console.log(measurement);
// console.warn(measurement.value);
// console.error(measurement.value);
console.table(measurement)
console.log(measurement);
    const kelvin = measurement.value + 273
    return kelvin;
}

console.log(measureKelvin())