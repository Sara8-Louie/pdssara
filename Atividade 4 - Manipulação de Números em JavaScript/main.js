const numero = Number(prompt('Digite um número: ')) // Importante: Tem que ter o Number aqui!
const numeroTitulo = document.getElementById("numero-titulo")
const texto = document.getElementById("texto")

numeroTitulo.innerHTML += numero

// Raiz quadrada do numero:
const raizQuadrada = Math.sqrt(numero)
texto.innerHTML += `<p>Raiz quadrada: ${raizQuadrada}</p>`

// Verificar se o número é inteiro:
const ehInteiro = Number.isInteger(numero)
texto.innerHTML += `<p>É inteiro: ${ehInteiro}</p>`

// Verificar se o número é NaN:
const ehNaN = Number.isNaN(numero)
texto.innerHTML += `<p>É NaN: ${ehNaN}</p>`

// Arredondar número para cima:
const arredondadoCima = Math.ceil(numero)
texto.innerHTML += `<p>Arredondado para cima: ${arredondadoCima}</p>`

// Arredondar número para baixo:
const arredondadoBaixo = Math.floor(numero)
texto.innerHTML += `<p>Arredondado para baixo: ${arredondadoBaixo}</p>`

// Apresentar número com 2 casas decimais:
const comDuasCasas = numero.toFixed(2)
texto.innerHTML += `<p>Com duas casas decimais: ${comDuasCasas}</p>`
