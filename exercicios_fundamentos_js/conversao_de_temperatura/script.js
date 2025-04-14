//Conversão de temperatura
const fahrenheit = 86
const celsius = 30

const celsiusToFahrenheit = ((celsius) => {
    return (celsius * 9/5) + 32
})
   
const fahrenheitToCelsius = ((fahrenheit) => {
    return (fahrenheit - 32) * 5/9
}) 
    

console.log(celsiusToFahrenheit(celsius))
console.log(fahrenheitToCelsius(fahrenheit))