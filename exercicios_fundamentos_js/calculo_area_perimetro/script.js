//Calculo Área Perímetro
const comprimento = 10
const largura = 5

const calculoArea = ((comprimento, largura) => {
    return comprimento * largura
})

const calculoPerimetro = ((comprimento, largura) => {
    return  2 * (comprimento + largura)
})

const area = calculoArea(comprimento, largura)
const perimetro = calculoPerimetro(comprimento, largura)

console.log(`A area do retângulo é ${area}`)
console.log(`O perímetro do retângulo é ${perimetro}`)