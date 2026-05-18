const nome = prompt("Digite seu nome: ")
document.body.innerHTML += `O seu nome é: ${nome} <br>`

//FAZER
// document.body.innerHTML += `O seu nome tem __ letras`
// document.body.innerHTML += `A segunda letra do seu nome é: ___`
// document.body.innerHTML += `A primeira letra do seu nome é: ___`
// document.body.innerHTML += `Seu nome em MAIUSCULO: __`
// document.body.innerHTML += `Seu nome em minusculo: __`

const tamanhoNome = nome.length
const segundaLetra = nome[1]
const primeiraLetra = nome[0]
const nomeMaiusculo = nome.toUpperCase()
const nomeMinusculo = nome.toLowerCase()

document.body.innerHTML += `O seu nome tem ${tamanhoNome} letras <br>`
document.body.innerHTML += `A segunda letra do seu nome é: ${segundaLetra} <br>`
document.body.innerHTML += `A primeira letra do seu nome é: ${primeiraLetra} <br>`
document.body.innerHTML += `Seu nome em MAIUSCULO: ${nomeMaiusculo} <br>`
document.body.innerHTML += `Seu nome em minúsculo: ${nomeMinusculo} <br>`
