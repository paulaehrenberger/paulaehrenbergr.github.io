
document.addEventListener("DOMContentLoaded", function() {
    nomeEstacionamento = localStorage.getItem("ultimo_estacionamento_acessado");
    titulo = document.querySelector("titulo")
    

    if (nomeEstacionamento) {
        tituloNome = document.querySelector("h2.titulo");
        tituloNome.textContent = nomeEstacionamento;
    }

    // if clicar em pagar set localstrorage
    botaoPagar = document.querySelector("a[href='pagamento.html']");
    if(botaoPagar){
    botaoPagar.addEventListener("click", function(event) {
        
        localStorage.setItem("estacionamento_agendado", nomeEstacionamento);
    });}

    });

