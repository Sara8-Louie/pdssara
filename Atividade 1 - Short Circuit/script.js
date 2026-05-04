// 1. Verificação de login:

let usuarioLogado = true;

// Se tiver logado, mostra mensagem:
usuarioLogado && console.log("Usuário está logado");

// Explicação:
// O && só executa o que vem depois se for true

// 2. Valor padrão com OR (||):

let nome = "";

// Se nome estiver vazio, usa "Visitante"
let nomeFinal = nome || "Visitante";

console.log(nomeFinal);

// Explicação:
// O || retorna o primeiro valor verdadeiro

// 3. Evitar erro com objeto:

let usuario = null;

// Só acessa nome se usuário existir
usuario && console.log(usuario.nome);

// Explicação:
// Evita erro tipo: "cannot read property of null"

// 4. Execução condicional de função:

function mostrarMensagem() {
  console.log("Função executada.");
}

let podeExecutar = false;

// Só executa se for true
podeExecutar && mostrarMensagem();

// Explicação:
// Muito usado para evitar if simples

// 5. Alternativa simples ao if:

let idade = 18;

// Se for maior de idade, mostra mensagem
idade >= 18 && console.log("Maior de idade");

// Explicação:
// Substitui um if simples