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
// const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for (let numero = 0; numero < numbers.length; numero += 1) {
//     console.log(numbers[numero]);
// }

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
// let total = 0;
// for (let paginas = 0; paginas < numbers.length; paginas += 1) {
//     if (numbers[paginas] % 2 === 1) {
//         total += 1;
//     }
// }
// console.log(total);

// const numero = 15;
// let numbers = 1;
// for (let index = 1; index <= numero; index += 1) {
//     numbers *= index;
// }
// console.log(numbers);
// const str = 'banana';
// const chars = str.split('');
// chars.reverse();
// console.log(chars.join('')

// const n = 4;
// let f = '';
// for (let bl = 0; bl < n; bl += 1) {
//     f += '*';
//     console.log(f);
// }
// const n = 9;
// let f = '';
// let quantidadeEspacos;
// for (let bl = 1; bl < n; bl += 1) {
//     quantidadeEspacos = n - bl;
//     f += '*';
//     console.log(quantidadeEspacos);
// }

// const n = 5;
// for (let bl = 1; bl <= n; bl += 1) {
//     let linha = '';
//     const espacos = n - bl;
//     for (let index = 0; index < espacos; index += 1) {
//         linha += ' ';
//     }
//     for (let index = 0; index < bl; index += 1) {
//         linha += '*';
//     }
//     console.log(linha);
// }

// function invertePalavra(palavra) {
//     let resultado = '';
//     for (let indice = 0; indice < palavra.length; indice += 1) {
//         resultado = palavra[indice] + resultado;
//     }
//     return resultado;
// }
// const palavraInvertida = invertePalavra('ola, mundo');
// console.log(palavraInvertida);

// function reverterPalavra(praticando) {
//     const chars = praticando.split('');
//     chars.reverse();
//     return chars.join('');
// }

// // console.log(reverterPalavra('bl lindo'));
// function palindromos(frase) {
//     const regex = / /g;
//     let salvamento = frase.replace(regex, '');
//     salvamento = salvamento.toLowerCase();
//     const salvamentoInvertido = reverterPalavra(salvamento);
//     if (salvamento === salvamentoInvertido) {
//         return true;
//     }
//     return false;
// }

// console.log(palindromos('Amor a Roma'));
// Crie uma função, que recebe uma lista, de palavras e retorna o índice da palavra maior.
// function maiorIndice(frases) {
//     let maiorFrase = 0;
//     for (let i = 0; i < frases.length; i += 1) {
//         if (frases[i].length >= frases[maiorFrase].length) {
//             maiorFrase = i;
//         }
//     }
//     return maiorFrase;
// }
// console.log(maiorIndice(['oi', 'tudo bem', 'o']));
// function menorIndice(frases) {
//     let menorFrase = 0;
//     for (let i = 0; i < frases.length; i += 1) {
//         if (frases[i].length <= frases[menorFrase].length) {
//             menorFrase = i;
//         }
//     }
//     return menorFrase;
// }
// console.log(menorIndice(['oi', 'tudo bem', 'o000000000']));

// function obterMaiorString(listaFrases) {
//     let maiorFrase = '';
//     for (let i = 0; i < listaFrases.length; i += 1) {
//         const fraseAtual = listaFrases[i];
//         if (fraseAtual.length > maiorFrase.length) {
//             maiorFrase = fraseAtual;
//         }
//     }
//     return maiorFrase;
// }

// console.log(obterMaiorString(['oi', 'tudo bem', '11']));

// Crie uma função que recebe uma lista de palavras e retorna quantas vezes a palavra maior aparece.

// function returnVezes(listaFrases) {
//     let memoria = 0;
//     const maiorFrase = obterMaiorString(listaFrases);
//     for (let index = 0; index < listaFrases.length; index += 1) {
//         if (listaFrases[index] === maiorFrase) {
//             memoria += 1;
//         }
//     }
//     return memoria;
// }

// console.log(returnVezes(['oi', 'Hop!!!', 'tudo bem', 'tudo bem', 'mundo', 'tudo bem', '11'])); // 2
// const reader = {
//     name: 'Julia',
//     lastName: 'Pessoa',
//     age: 21,
//     favoriteBooks: [
//         { // 0
//             title: 'O Senhor dos Anéis - a Sociedade do Anel',
//             author: 'J. R. R. Tolkien',
//             publisher: 'Martins Fontes',
//         },
//         { // 1
//             title: 'Harry Potter e o Prisioneiro de Azkaban',
//             author: 'JK Rowling',
//             publisher: 'Rocco',
//         },
//     ],
// };

// console.log(
//     `A ${reader.name} tem ${
//         reader.favoriteBooks.length
//     } livros favoritos.`,
// );

// const order = {
//     name: 'Luiz Silva',
//     phoneNumber: '11-98763-1416',
//     address: {
//         street: 'Rua das Flores',
//         number: '389',
//         apartment: '701',
//     },
//     order: {
//         pizza: {
//             marguerita: {
//                 amount: 1,
//                 price: 25,
//             },
//             pepperoni: {
//                 amount: 1,
//                 price: 20,
//             },
//         },
//         drinks: {
//             coke: {
//                 type: 'Coca-Cola Zero',
//                 price: 10,
//                 amount: 1,
//             },
//         },
//         delivery: {
//             deliveryPerson: 'Ana Silveira',
//             price: 5,
//         },
//     },
//     payment: {
//         total: 50,
//     },
// };

// // const customerInfo = (fullOrder) => `ola,${fullOrder.order.delivery.deliveryPerson}, entrega para: ${fullOrder.name}, telefone: ${fullOrder.phoneNumber}, ${fullOrder.address.street}, numero: ${fullOrder.address.number}, ap ${fullOrder.address.apartment}.`;

// // console.log(customerInfo(order));

// // const orderModifier = (fullOrder) =>
// //     `ola,${fullOrder.name}, o valor total de seu pedido de ${Object.keys(fullOrder.order.pizza)} e ${fullOrder.order.drinks.coke.type} e de R$${fullOrder.payment.total}`;

// // console.log(orderModifier(order));

