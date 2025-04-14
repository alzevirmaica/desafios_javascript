//Cálculo do IMC
const peso = 94
const altura = 1.70

const calculoImc = ((peso, altura) => {
    return (peso / (altura * altura)).toFixed(2)
})

console.log(`Seu IMC é ${calculoImc(peso, altura)}`)
