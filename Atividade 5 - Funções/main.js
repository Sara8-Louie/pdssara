//Funções

// function saudacao(nome,idade){
//     //console.log('Bom dia! ${nome}')
//     return `Bom dia! ${nome}, você tem ${idade} anos.`
// }

// console.log(saudacao('Tiago', 30))

//CRIAR UMA FUNÇÃO QUE RECEBE 2 NÚMEROS E 1 BOLEANO
// ('SIM OU NÃO') A FUNÇÃO PRECISA SOMAR OS NÚMEROS E SE O BOLEANO
// FOR 'SIM' PRECISA ELEVAR O RESULTADO AO QUADRADO E RETORNAR:

// function calcula(numero1, numero2, boleano){
//     let soma = numero1 + numero2
//     if(boleano.toLowerCase() == 'sim'){
//         let raizQuadrada = soma ** 2
//         return raizQuadrada
//     } 
//         return soma
// }

// console.log(calcula(2,3,'SIM'))

//Voces vão criar uma função para verificar a entrada
//de um usuário. Se ele tiver idade maior ou igual a 18 anos,
//ele pode entrar. Se ele tiver entre 16 a 18 anos ele poderá entrar
//desde que esteja acompanhado. Se for menor de 16 não poderá entrar
//de forma alguma.

 function verificarEntrada(idade, acompanhado){
     if(idade >= 18){
        return 'Pode entrar'
     } else if(idade >= 16 && idade < 18 && acompanhado.toLowerCase() == 'sim'){
         return 'Pode entrar acompanhado'
     } else {
         return 'Não pode entrar'
     }
 }
 
console.log(verificarEntrada(20,'SIM'))


