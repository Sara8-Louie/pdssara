/* console.log("Olá, mundo!!");
console.log('Olá, mundo!!');
console.log(`Olá, mundo!!`);

console.log(`Olá, meu nome é Sara Salviano, mas me chamam de "Sara"!`);

const nome = "Sara"

console.log(`Olá, ${nome}`);
console.log(`Olá, ${nome}`);
console.log(`Olá, ${nome}`);

console.log(15, "Olá,pessoal!", 50.44, undefined, null);
// O undefined e null não estão funcionando ^ :(

/* A turma do 4 ano é a melhor do IFRN
Estão aprendendo Programação 

// PARTE MAIS IMPORTANTE DA AULA: :o */

// console.log("Eu vou aparecer no HTML LALALALA !!!");

// 🖥️ Tipos de Variável - Aula 11/05/2026
// let, const, var:

//const mantém a variável constante, ou seja, não pode ser reatribuída.
//const nome = "Tiago"
//nome = "João Gabryel"
//console.log(nome); // ERRO: Assignment to constant variable. (Atribuição a variável constante.)

//let nome = "Tiago"
//nome = "João Gabryel"
//console.log(nome); 

//Se não declarar a variável com let ou const, ela se torna let por padrão, mas isso não é recomendado, pois pode levar a problemas de escopo e manutenção do código.
//nome = "Tiago"
//nome = "João Gabryel"
//console.log(nome); 

//VAR não é mais utilizado
//var nome = "Tiago"
//nome = "João Gabryel"
//console.log(nome);

//☝️ Tipos primitivos de dados

// String
// let nome = "Tiago" //aspas duplas
// nome = 'Tiago' //aspas simples
// nome = `Tiago` // template string (crase)

// //Number
//let idade = 30 //Number
//idade = 30.6 //Number

// // Nulo (null)
// let sobrenome = null
// console.log(sobrenome)

//Undefined
// let nomeDoMeio
// console.log(nomeDoMeio)

// true ou false
// let aprovado = true
// aprovado = false

// console.log(typeof idade)

// 😯 Outros tipos de dados
// Arrays (listas):
//const alunos = ["Sara", "Tiago", "João Gabryel", "Maria", "Clara"];
//console.log(alunos[2]);

//Objetos (Dicionários):
//const pessoa = {
    //nome: "Sara",
    //sobrenome: "Salviano",
    //idade: 18
//}
//console.log(pessoa.idade);

//JSON
// JavaScript Object Notation

//Operaçoes no Javascript
//Soma:
//let salario = 3000
//let bonus = 500
//console.log(salario + bonus); 
//Subtração:
//let deducao = 200
//console.log(salario - deducao);
//Multiplicação:
//let aumento = 1.2
//console.log(salario * aumento);
//Divisão:
//let divisor = 2
//console.log(salario / divisor);
//Potenciação:
//console.log(salario ** 2);
//Resto da divisão:
//console.log(salario % 2);

//🔢 Utilizando contador em JS

//let contador = 1
//contador = contador + 1
//console.log(contador)

// let contador = 1
// contador ++
// contador ++
// console.log(++contador)

//Decrementar
// let contador = 3
// contador --
// contador --
// console.log(contador--)

// let contador = 0
// let passo = 2

// contador += passo
// contador += passo
// contador += passo

// console.log(contador) //Atualizando informaçoes geralmente

//--------------- AULA 18/05/2026 -----------------

//Utilizando charAt:
//const texto = "um texto"
//console.log(texto.charAt(6))

//Utilizando concat:
//const nome = 'Tiago'
//const sobrenome = 'Barreto'
//let nomeCompleto = " "

//const resultado = nomeCompleto.concat(nome, " ", sobrenome)
//console.log(resultado)

// const texto = "um texto bacana"
// const resultado = texto.replace(" ", "")
// console.log(resultado)

// //const texto = "um texto bacana"
// const resultado = texto.replace(" ", "") replace(" ", "")
// console.log(resultado)

//Utilizando length:
// const texto = "um texto bacana"
// console.log(texto.length)

//Maiusculo e minúsculo:
// const nome = "Sara Salviano"
// console.log(nome.toUpperCase()) 
// console.log(nome.toLowerCase()) 
