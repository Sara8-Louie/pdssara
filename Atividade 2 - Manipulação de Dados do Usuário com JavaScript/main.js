// Entrada dos dados:
const nome = prompt("Qual seu nome?")
const sobrenome = prompt("Qual seu sobrenome?")
const idade = prompt("Qual sua idade?")
const altura = parseFloat(prompt("Qual sua altura? (em metros, ex: 1.70)"))
const peso = parseFloat(prompt("Qual seu peso? (em kg)"))

// Cálculo do IMC:
const imc = peso / (altura * altura)

// Pegando elementos do HTML:
const paragrafo = document.getElementById("paragrafo")
const idadeEl = document.getElementById("idade")
const alturaEl = document.getElementById("altura")
const pesoEl = document.getElementById("peso")
const imcEl = document.getElementById("imc")

// Exibindo na tela:
paragrafo.innerHTML = nome + " " + sobrenome
idadeEl.innerHTML = "Idade: " + idade
alturaEl.innerHTML = "Altura: " + altura + " m"
pesoEl.innerHTML = "Peso: " + peso + " kg"
imcEl.innerHTML = "IMC: " + imc.toFixed(2)