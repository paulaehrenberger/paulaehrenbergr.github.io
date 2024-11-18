

document.addEventListener("DOMContentLoaded", function() {
    // CAMINHO DO INDEX/DISPONIVEIS PARA TELA ESTACIONAMENTO X MUDANDO O NOME
    nomeEstacionamento = localStorage.getItem("nome_estacionamento_clicado");

    if (nomeEstacionamento) {
        tituloNome = document.querySelector("h2.nome");
        tituloNome.textContent = nomeEstacionamento;
    }

    // GUARDAR O ULTIMO ESTACIONAMENTO
    
    // salva o nome no localStorage como o último estacionamento acessado
    localStorage.setItem("ultimo_estacionamento_acessado", nomeEstacionamento);

    ultimoEstacionamento = localStorage.getItem("ultimo_estacionamento_acessado");
    if (ultimoEstacionamento) {
        localStorage.setItem("penultimo_estacionamento_acessado", ultimoEstacionamento);
    }

    // salva o nome atual como o último estacionamento acessado
    localStorage.setItem("ultimo_estacionamento_acessado", nomeEstacionamento);
});

