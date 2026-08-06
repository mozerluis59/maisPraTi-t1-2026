//1. Escreva um programa que pergunte a nota de um aluno (de 0 a 10). Exiba se o aluno foi Aprovado (nota maior ou igual a 7), em Recuperação (nota entre 5 e 6.9) ou Reprovado (nota menor que 5). 

const prompt = require('prompt-sync')();

let nota = Number(prompt("Insira a uma nota de 1 a 10:  "));

if (nota >= 7){
    console.log('Aluno Aprovado!')
}
else if (nota >= 5 && nota <= 6.9){
    console.log('Aluno em Recuperação!')
}
else if(nota < 5){
    console.log('Aluno Reprovado!')
}

//2. Crie um programa que pergunte o ano de nascimento de uma pessoa e calcule sua idade. Com base na idade, exiba se ela é criança (até 12 anos), adolescente (de 13 a 17 anos), adulta (de 18 a 59 anos) ou idosa (60 anos ou mais). 

const prompt = require('prompt-sync')();

let anoNascimento = Number(prompt("Qual Seu ano de Nascimento?  "));
let anoAtual = new Date().getFullYear();

let idade = anoAtual - anoNascimento;

if (idade <= 12){
    console.log('Você é uma criança!')
}
else if(idade >=12 && idade <= 17){
    console.log('Vocé é um adolescente!')
}
else if(idade >= 18 && idade <= 59){
    console.log('Vocé é um adulto!')
}
else{
    console.log('Vocé é um idoso!')
}

// 3.Escreva um programa que pergunte o salário mensal de um funcionário e o percentual de aumento concedido pela empresa. Caso o salário seja menor que R$ 1.500,00, o percentual de aumento deve ser dobrado automaticamente. Exiba o novo salário do funcionário. 

const prompt = require('prompt-sync')();

let salario = Number(prompt("Qual valor do seu salário?  "));
let PercAumento = Number(prompt("Qual valor do percentual de aumento?  "));

if (salario < 1500){
    PercAumento = PercAumento * 2;
}

let aumento = salario * (PercAumento/100);

let novoSalario = salario + aumento;

console.log(` Seu novo salário é: ${novoSalario}`);

// 4.Crie um programa que leia três números inteiros e exiba o maior deles, sem utilizar funções prontas como Math.max(). 

const prompt = require('prompt-sync')();

let num1 = Number(prompt("Digite o primeiro número: "));
let num2 = Number(prompt("Digite o segundo número: "));
let num3 = Number(prompt("Digite o terceiro número: "));

let maior = num1;

if(num2 > maior) {
    maior = num2;
}
if(num3 > maior) {
    maior = num3;
}

console.log(`O maior número é: ${maior}`);

//5. Uma loja oferece desconto progressivo conforme o valor da compra. Faça um programa que leia o valor total de uma compra e aplique as seguintes regras: compras abaixo de R$ 100,00 não têm desconto; compras entre R$ 100,00 e R$ 299,99 recebem 10% de desconto; compras entre R$ 300,00 e R$ 499,99 recebem 
//15% de desconto; compras acima de R$ 500,00 recebem 20% de desconto. Exiba o valor original, o desconto aplicado e o valor final a pagar. 

const prompt = require('prompt-sync')();

let compra = Number(prompt("Digite o valor da sua compra: "));
let desconto = 0;
let compraDesconto;

if (compra < 100){
    desconto = 0;
    compraDesconto = compra - desconto;
}
else if (compra >= 100 && compra < 299.99){
    desconto = (compra * 10/100);
    compraDesconto = compra - desconto;
}
else if (compra >= 300 && compra < 499.99){
    desconto = (compra * 15/100);
    compraDesconto = compra - desconto;
}
else if (compra >= 500){
    desconto = (compra * 20/100);
    compraDesconto = compra - desconto;
}
console.log(`O valor de sua compra é: R$ ${compra.toFixed(2)}`);
console.log(`O seu desconto foi de: R$ ${desconto.toFixed(2)}`);
console.log(`O Valor final de sua compra com desconto é: R$ ${compraDesconto.toFixed(2)}`);

//6. Crie um programa de caixa eletrônico simplificado. O usuário informa o valor que deseja sacar (múltiplo de 10). O programa deve calcular e exibir a menor quantidade possível de cédulas de R$ 100, R$ 50, R$ 20 e R$ 10 necessárias para compor o saque. 

const prompt = require('prompt-sync')();

let valor = Number(prompt("Digite o valor do saque: "));

let notas100 = 0;
let notas50 = 0;
let notas20 = 0;
let notas10 = 0;


if (valor % 10 !== 0) {
    console.log("Valor inválido! Digite um valor múltiplo de 10.");
} else {
    notas100 = Math.floor(valor / 100);
    valor = valor % 100;

    notas50 = Math.floor(valor / 50);
    valor = valor % 50;

    notas20 = Math.floor(valor / 20);
    valor = valor % 20;

    notas10 = Math.floor(valor / 10);

    console.log("\n===== CÉDULAS =====");

    if (notas100 > 0) {
        console.log(`Notas de R$100: ${notas100}`);
    }

    if (notas50 > 0) {
        console.log(`Notas de R$50: ${notas50}`);
    }

    if (notas20 > 0) {
        console.log(`Notas de R$20: ${notas20}`);
    }

    if (notas10 > 0) {
        console.log(`Notas de R$10: ${notas10}`);
    }
}

//7. Faça um programa que funcione como uma calculadora básica. Leia dois números e uma operação desejada (+, -, *, /). Usando switch case, realize a operação correspondente e exiba o resultado. Trate o caso de divisão por zero e de operação inválida. 

const prompt = require('prompt-sync')();

let numero1 = Number(prompt("Digite o primeiro número: "));
let numero2 = Number(prompt("Digite o segundo número: "));

let operacao = prompt("Digite a operação (+, -, *, /): ");

let resultado;

switch (operacao) {

    case "+":
        resultado = numero1 + numero2;
        console.log(`Resultado: ${numero1} + ${numero2} = ${resultado}`);
        break;

    case "-":
        resultado = numero1 - numero2;
        console.log(`Resultado: ${numero1} - ${numero2} = ${resultado}`);
        break;

    case "*":
        resultado = numero1 * numero2;
        console.log(`Resultado: ${numero1} * ${numero2} = ${resultado}`);
        break;

    case "/":
        if (numero2 === 0) {
            console.log("Erro: divisão por zero não é permitida.");
        } else {
            resultado = numero1 / numero2;
            console.log(`Resultado: ${numero1} / ${numero2} = ${resultado}`);
        }

        break;

    default:
        console.log("Operação inválida!");
}

//8. Uma pizzaria cobra por tamanho e tipo de borda. Faça um programa que leia o tamanho da pizza (P, M ou G) e o tipo de borda (tradicional ou recheada) usando
//switch case. Os preços base são: P = R$ 25,00, M = R$ 35,00, G = R$ 45,00. A borda recheada acrescenta R$ 8,00 em qualquer tamanho. Exiba o valor total do pedido. 

const prompt = require('prompt-sync')();

let tamanho = prompt("Digite o tamanho da pizza (P, M ou G): ").toUpperCase();
let borda = prompt("Digite o tipo da borda (tradicional ou recheada): ").toLowerCase();

let valorPizza = 0;

switch (tamanho) {

    case "P":
        valorPizza = 25;
        break;

    case "M":
        valorPizza = 35;
        break;

    case "G":
        valorPizza = 45;
        break;

    default:
        console.log("Tamanho inválido!");
}

switch (borda) {

    case "tradicional":
        break;

    case "recheada":
        valorPizza += 8;
        break;

    default:
        console.log("Tipo de borda inválido!");
}

console.log(`O valor total do pedido é: R$ ${valorPizza.toFixed(2)}`);

// 9. Crie um programa que leia o número do mês (1 a 12) e, usando switch case, exiba o nome do mês correspondente e quantos dias ele possui. Para fevereiro, pergunte ao usuário se o ano é bissexto e ajuste a quantidade de dias para 29 caso seja. 

const prompt = require('prompt-sync')();

let mes = Number(prompt("Digite o número do mês (1 a 12): "));

let nomeMes;
let dias;

switch (mes) {

    case 1:
        nomeMes = "Janeiro";
        dias = 31;
        break;

    case 2:
        nomeMes = "Fevereiro";

        let bissexto = prompt("O ano é bissexto? (s/n): ").toLowerCase();

        if (bissexto === "s") {
            dias = 29;
        } else {
            dias = 28;
        }

        break;

    case 3:
        nomeMes = "Março";
        dias = 31;
        break;

    case 4:
        nomeMes = "Abril";
        dias = 30;
        break;

    case 5:
        nomeMes = "Maio";
        dias = 31;
        break;

    case 6:
        nomeMes = "Junho";
        dias = 30;
        break;

    case 7:
        nomeMes = "Julho";
        dias = 31;
        break;

    case 8:
        nomeMes = "Agosto";
        dias = 31;
        break;

    case 9:
        nomeMes = "Setembro";
        dias = 30;
        break;

    case 10:
        nomeMes = "Outubro";
        dias = 31;
        break;

    case 11:
        nomeMes = "Novembro";
        dias = 30;
        break;

    case 12:
        nomeMes = "Dezembro";
        dias = 31;
        break;

    default:
        console.log("Mês inválido!");
}

if (nomeMes) {
    console.log(`O mês é ${nomeMes} e possui ${dias} dias.`);
}

// 10. Um estacionamento cobra por faixas de tempo. Faça um programa que leia quantas horas um veículo ficou estacionado e, usando switch case com intervalos, calcule o valor a pagar conforme a tabela: 1ª hora = R$ 8,00; 2ª hora = R$ 6,00; 3ª hora = R$ 4,00; acima de 3 horas = R$ 4,00 pelas primeiras 3 horas mais R$ 2,00 por hora adicional. Exiba o tempo total e o valor cobrado.

const prompt = require('prompt-sync')();

let horas = Number(prompt("Digite quantas horas o veículo ficou estacionado: "));

let valor = 0;

switch (horas) {

    case 1:
        valor = 8;
        break;

    case 2:
        valor = 8 + 6;
        break;

    case 3:
        valor = 8 + 6 + 4;
        break;

    default:

        if (horas > 3) {

            valor = 8 + 6 + 4;

            valor += (horas - 3) * 2;

        } else {
            console.log("Quantidade de horas inválida!");
        }
}

if (horas > 0) {
    console.log(`Tempo estacionado: ${horas} hora(s)`);
    console.log(`Valor a pagar: R$ ${valor.toFixed(2)}`);
}



