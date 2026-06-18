/* Escreva um algoritmo para ler uma temperatura em graus Celsius, calcular e escrever o valor correspondente a graus Farenheit */

// const prompt = require('prompt-sync')();

// let temp = Number(prompt("Insira a temperatura em Graus Celsius: "));

//let conversao = (temp *(9/5))+ 32;

// console.log(`O Valor em Graus Farenheit é ${conversao} ºF`)

/* Escreva um algoritmo para ler o numero de eleitores de um municipio, o número de votos brancos, nulos e válidos. Calcular e escrever o que cada um representa em relação ao total de eleitores */

/* const prompt = require('prompt-sync')();

let numeleitores = Number(prompt("Numero Eleitores: "));
let numVotosVálidos = Number(prompt("Votos Válidos: "));
let numVotosNulos = Number(prompt("Votos Nulos: "));
let numVotosBrancos = Number(prompt("Votos em Branco: "));

let totalVotos = numVotosVálidos + numVotosBrancos + numVotosNulos;
let abstencao = numeleitores - totalVotos;

let percentualVálidos = (numVotosVálidos / numeleitores) * 100;
let percentualNulos = (numVotosNulos / numeleitores) * 100;
let percentualBrancos = (numVotosBrancos / numeleitores) * 100;

console.log(`O Percentual de votos válidos é: ${percentualVálidos.toFixed(1)} %`);
console.log(`O Percentual de votos nulos é ${percentualNulos.toFixed(1)} %`)
console.log(`O Percentual de votos brancos é ${percentualBrancos.toFixed(1)} %`)
console.log(`O Percentual de abstenção foi de ${abstencao.toFixed(1)} %`) */

// Escreva um algoritmo que gere numeros de 1000 a 1999, e escreva aqueles que, divididos por 11 dão resto igual a 5.

/* let encontrados = []

for( let num = 1000 ; num <= 1999 ; num++){
    if(num % 11 == 5){
        console.log(num)
        encontrados.push(num)
    }
}
console.log(`A quantidade de números encontrados foi: ${encontrados.length}`) */

/* Escreva um programa para calcular a redução do tempo de vida de um fumante.
Pergunte a quantidade de cigarros fumados por dia e quantos anos ele já fumou.
Considere que um fumante perde 10 min de vida a cada cigarro. Calcule quantos dias de vida um fumante perderá e exiba o total em dias. */

// const prompt = require('prompt-sync')();

// let quantCigarros = Number(prompt("Quantos cigarros fumados por dia?: "));
// let anosFumante = Number(prompt("Por quantos anos fumou?: "));

// let totalCigarros = quantCigarros * 365 * anosFumante;
// let minutosPerdidos = totalCigarros * 10
// let diasPerdidos = minutosPerdidos / 1440;

// console.log(`A quantidade de dias de vida perdidos são: ${diasPerdidos.toFixed(0)} dias`)
// 

// =====================================================================
// EXERCÍCIO 5 — Preço de Maçãs com Desconto por Quantidade
// =====================================================================
/*
    As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
    forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
    compradas, calcule e escreva o valor total da compra.
*/

// const prompt = require('prompt-sync')();

// let compra = Number(prompt("Quantas maças foram compradas? "));
// let custo = 0;
// let soma = 0;

// if( compra  < 12){
//      custo = 0.30;
// }
// else {
//     custo = 0.25;
// }

// soma = custo * compra;
// console.log(`O valor total da compra é : ${soma.toFixed(2)}`);

// =====================================================================
// EXERCÍCIO 6 — Exibir 2 Valores em Ordem Crescente
// =====================================================================
/*
    Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
    e escreve-los em ordem crescente.
*/

// 

// =====================================================================
// EXERCÍCIO 7 — Soma, Média, Maior e Menor de um Array
// =====================================================================
/*
    Escreva um algoritmo que percorra o array e calcule:
    A soma de todos os elementos
    A média dos elementos
    O maior valor encontrado
    O menor valor encontrado
*/

let numeros = [10, 5, 8, 20, 3];

let soma = 0;
let maior = numeros[0];
let menor = numeros[0];

for (let i = 0; i < numeros.length; i++) {

    soma += numeros[i];

    if (numeros[i] > maior) {
        maior = numeros[i];
    }

    if (numeros[i] < menor) {
        menor = numeros[i];
    }
}

let media = soma / numeros.length;

console.log("Soma:", soma);
console.log("Média:", media);
console.log("Maior valor:", maior);
console.log("Menor valor:", menor);


