//Verificação de divisibilidade
const n1 = 10
const n2 = 2

const verificaDivisibilidade = ((n1, n2) => {
   return n1 % n2 === 0 ? `esse número é divísivel` : `Não é divívisel`
    
})

console.log(verificaDivisibilidade(n1, n2))