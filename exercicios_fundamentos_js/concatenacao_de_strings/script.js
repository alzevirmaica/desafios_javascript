//Concatenação de Strings
class Pessoa {
    constructor(nome, idade, cidade) {
        this.nome = nome,
        this.idade = idade,
        this.cidade = cidade
    }

    mensagem() {
        return `Olá meu nome é ${this.nome},  tenho ${this.idade} anos e moro em ${this.cidade}`
    }
}

const alzevir = new Pessoa('Alzevir', 40, 'Pelotas')
console.log(alzevir.mensagem())