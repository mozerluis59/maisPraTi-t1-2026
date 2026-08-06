const prompt = require('prompt-sync')();

let primeiroValor = Number(prompt("Insira o primeiro valor: "));
let segundoValor = Number(prompt("Insira o segundo valor: "));
let opcao = Number(prompt('1- somar | 2- Subtrair | 3- Multiplicar | 4- Dividir: '));


switch(opcao){
    case 1:
        console.log(primeiroValor + segundoValor)
        break
    case 2:
        console.log(primeiroValor - segundoValor)
        break
    case 3:
        console.log(primeiroValor * segundoValor)
        break
    case 4:
        console.log(primeiroValor / segundoValor)
        break
    default:
        console.log('Opção Inválida')
}
