// const nomes = ["bernardo", "pedro", "jose", "fabiana", "gabriel" ]
// for (let nome = 0; nome < nomes.length; nome += 1) {
//     console.log(nomes[nome]);
// }

// const primos = 10000000000000000000
// let ePrimo = true
// for (let primo = 2; primo < primos; primo += 1) {
//     if (primos % primo === 0) {
//         ePrimo = false
//         break
//     }
// }
// console.log(ePrimo

// const salario = 3000;// salario bruto
// let salarioLiquido;
// if (salario <= 1556.94) {
//     salarioLiquido = salario - (salario / 100) * 8;
// } else if (salario >= 1556.95 && salario <= 2594.92) {
//     salarioLiquido = salario - (salario / 100) * 9;
// } else if (salario >= 2594.93 && salario <= 5189.82) {
//     salarioLiquido = salario - (salario / 100) * 11;
// } else if (salario > 5189.82) {
//     salarioLiquido = salario - 570.88;
// }
// if (salarioLiquido <= 1903.98) {
//     salarioLiquido -= 0;
// } else if (salarioLiquido >= 1903.99 && salarioLiquido <= 2826.65) {
//     salarioLiquido -= (salarioLiquido / 100) * 7.5 - 142.80;
// } else if (salarioLiquido >= 2826.66 && salarioLiquido <= 3751.05) {
//     salarioLiquido -= (salarioLiquido / 100) * 15 - 354.80;
// } else if (salarioLiquido >= 3751.06 && salarioLiquido <= 4664.68) {
//     salarioLiquido -= (salarioLiquido / 100) * 22.5 - 636.13;
// } else if (salarioLiquido >= 4664.68) {
//     salarioLiquido -= (salarioLiquido / 100) * 27.5 - 869.36;
// }
// console.log(salarioLiquido);
// Exercício 1
// Considere esse array para realizar os próximos exercícios.

// Some todos os valores contidos no array e imprima o resultado.//pronto
// Calcule e imprima a média aritmética dos valores contidos no array.//pronto
// Com base no código que acabou de gerar, referente ao cálculo da média aritmética, faça com que://pronto
// caso o valor final seja maior que 20, imprima a mensagem “O valor da média aritmética é maior que 20”;//pronto
// caso não seja maior que 20, imprima a mensagem “O valor da média aritmética é menor ou igual a 20”.//pronto
// Descubra o maior valor contido no array e imprima-o.//pronto
// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “Nenhum valor ímpar encontrado”.

const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for (let numero = 0; numero < numbers.length; numero += 1) {
//     console.log(numbers[numero]);
// }//[0]

// let soma = 0;
// for (let indice = 0; indice < numbers.length; indice += 1) {
//     soma += numbers[indice];
// }
// const media = soma / numbers.length;
// if (media > 20) {
//     console.log('o valor da media aritimetica e maior que 20');
// } else {
// console.log('o valor da media aritimetica e menor ou igual a 20');
// }
            
let maiorNumero = 0;
for (let indice = 0; indice < numbers.length; indice += 1) {
    const c = numbers[indice];
    if (maiorNumero <= c) {
        maiorNumero = numbers[indice]
    }
}
console.log(maiorNumero);