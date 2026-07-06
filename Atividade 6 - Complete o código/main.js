function validaForm(){
  const form = document.querySelector('.form')
  const resultado = document.querySelector('.resultado')
  let pessoas = []

  form.onsubmit = function(evento){
    evento.preventDefault()
    const nome = document.querySelector('.nome')
    const sobrenome = document.querySelector('.sobrenome')
    const peso = document.querySelector('.peso')
    const altura = document.querySelector('.altura')
    //console.log(nome.value, sobrenome.value, peso.value, altura.value)
    const fabricaPessoas = {
      nome:nome.value,
      sobrenome: sobrenome.value,
      peso: peso.value,
      altura: altura.value
    }
      pessoas.push(fabricaPessoas)

      resultado.innerHTML += `<p> ${fabricaPessoas.nome} 
      ${fabricaPessoas.sobrenome}
      ${fabricaPessoas.altura}
      ${fabricaPessoas.peso}
      </p>`
      

  
  
  }

}

validaForm()