function adicionar() {

    let input = document.getElementById("tarefa");
    let texto = input.value.trim();

    if (texto === "") {
        alert("Digite uma tarefa!");
        return;
    }

    let lista = document.getElementById("lista");

    let li = document.createElement("li");

    let span = document.createElement("span");
    span.innerText = texto;
    span.style.marginRight = "10px"; 

    // Botão concluir:
    let concluir = document.createElement("button");
    concluir.innerText = "✔";
    concluir.style.marginLeft = "5px";
    concluir.onclick = function () {
        span.classList.toggle("concluida");
    };

    // Botão editar:
    let editar = document.createElement("button");
    editar.innerText = "✎";
    editar.style.marginLeft = "5px";
    editar.onclick = function () {

        let novoTexto = prompt("Editar tarefa:", span.innerText);

        if (novoTexto !== null && novoTexto.trim() !== "") {
            span.innerText = novoTexto;
        }

    };

    // Botão apagar:
    let apagar = document.createElement("button");
    apagar.innerHTML = "🗑";
    apagar.style.marginLeft = "5px";
    apagar.onclick = function () {
        lista.removeChild(li);
    };

    
    li.style.display = "flex";
    li.style.alignItems = "center";


    li.appendChild(span);
    li.appendChild(concluir);
    li.appendChild(editar);
    li.appendChild(apagar);

    // Adicionar a tarefa na lista:
    lista.appendChild(li);

    // Limpar o campo do input depois de adicionar a tarefa:
    input.value = "";
}

function modo() {

    document.body.classList.toggle("dark");

    let botao = document.querySelectorAll("button")[1];

    if (document.body.classList.contains("dark")) {
        botao.innerText = "☼ Modo Claro";
    } else {
        botao.innerText = "☽ Modo Escuro";
    }

}