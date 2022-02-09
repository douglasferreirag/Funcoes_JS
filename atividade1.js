function calculaIdade(anos){

        return `Daqui a ${anos}, ${this.nome} terá ${this.idade + anos} anos de idade. `

}

const pessoa1 = {

        nome: "Flávio",

        idade: 40

}

const pessoa2 = {

    nome: "Joice",

    idade: 23

}

const animal = {

    nome: "Fiona",

    idade: 5,

    raça: "Pug"

}

console.log(calculaIdade.call(pessoa2, 30));


console.log(calculaIdade.call(animal, 7));


console.log(calculaIdade.apply(animal, [30]));

console.log(calculaIdade.apply(pessoa1, [40]));