
// SELECIONA OS ELEMENTOS HTML A SEREM MANIPULADOS
const campo = document.querySelector("#nova-tarefa");
const botao1 = document.querySelector("#adicionar");
const lista = document.querySelector("#lista-tarefas");

function adicionarTarefa() {
    if (campo.value.trim() !== "") {

        const texto = campo.value;

        // CRIA O ELEMENTO PRINCIPAL DA TAREFA
        const itemLista = document.createElement("li");

        // CRIA O CHECKBOX
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        // CRIA O TEXTO DA TAREFA
        const textoTarefa = document.createElement("span");
        textoTarefa.textContent = texto;

        // CRIA O BOTÃO EXCLUIR
        const botaoExcluir = document.createElement("button");
        botaoExcluir.textContent = "Excluir";

        // EVENTO PARA MARCAR A TAREFA COMO CONCLUÍDA
        checkbox.addEventListener("change", function () {
            textoTarefa.classList.toggle("concluida");
        });

        // EVENTO PARA EXCLUIR A TAREFA
        botaoExcluir.addEventListener("click", function () {
            itemLista.remove();
        });

        // MONTA A ESTRUTURA DA TAREFA
        itemLista.appendChild(checkbox);
        itemLista.appendChild(textoTarefa);
        itemLista.appendChild(botaoExcluir);

        // ADICIONA A TAREFA COMPLETA À LISTA
        lista.appendChild(itemLista);

        // LIMPA O CAMPO DE TEXTO
        campo.value = "";
    }
}

// EVENTO DO BOTÃO ADICIONAR
botao1.addEventListener("click", adicionarTarefa);

// PERMITE ADICIONAR UMA TAREFA PRESSIONANDO ENTER
campo.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        adicionarTarefa();
    }
});
