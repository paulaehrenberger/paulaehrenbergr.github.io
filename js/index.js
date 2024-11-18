                                                                  
// inicializa o indicador de primeira vez
localStorage.setItem('first_time', true);

document.addEventListener("DOMContentLoaded", function() {
    // Verifica se é a primeira vez do usuário
    if (localStorage.getItem('first_time')===null) {
        // Inicializa todas as variáveis no localStorage na primeira vez
        localStorage.setItem('estacionamento_agendado', '');
        localStorage.setItem('estacionamentos_insper', '');
        localStorage.setItem('nome_estacionamento_clicado', '');
        localStorage.setItem('penultimo_estacionamento_acessado', '');
        localStorage.setItem('texto_recente1', '');
        localStorage.setItem('ultimo_estacionamento_acessado', '');
        localStorage.setItem('first_time', 'false'); // Marca como inicializado
    } else {
        // SE NÃO FOR A PRIMEIRA VEZ, EXECUTA OS OUTROS COMANDOS

        // PEGA O NOME DO ESTACIONAMENTO CLICADO
        estacionamentoLinks = document.querySelectorAll("a[href='estacionamentoX.html']");
        estacionamentoLinks.forEach(link => {
            link.addEventListener("click", function(event) {
                nomeEstacionamento = link.textContent.trim();
                localStorage.setItem("nome_estacionamento_clicado", nomeEstacionamento);
            });
        });

        // CHECA SE O CONTEUDO DO INPUT É INSPER
        conteudo_inputado = document.getElementById('conteudo'); 
        botaoPesquisar = document.querySelector("input[type='submit']");
        botaoPesquisar.addEventListener("click", function(event) {
            // remover espaços em branco e colocar tudo pequeno
            palavra = conteudo_inputado.value.trim().toLowerCase();
            if (palavra === "insper") {
                localStorage.setItem("estacionamentos_insper", "true");
            } else {
                localStorage.removeItem("estacionamentos_insper");
            }
        });

        // ALTERA O NOME DO ESTACIONAMENT RECENTE PARA O ULTIMO ACESSADO
        // FALAR COM O PROF AO INICIAR NÃO ESTÁ 'LIMPO' E FUI TESTANDO ATÉ DAR CERTO MAS NÃO SEI SE ESTÁ CERTO
        ultimoEstacionamento = localStorage.getItem("ultimo_estacionamento_acessado"); //pega a info do ultimo
        recente1 = document.getElementById('recente1'); //localiza no html
        penultimoEstacionamento = localStorage.getItem("texto_recente1"); //pega o ultimo salvo
        recente2.querySelector("a").textContent = penultimoEstacionamento; //pega o ultimo e reescreve no recente2
        localStorage.setItem("texto_recente1", (recente1.querySelector("a").textContent = ultimoEstacionamento)); //guarda o nome que estava antes de atualizar o recente1 
        recente1.querySelector("a").textContent = ultimoEstacionamento; //atualiza o recente 1 para o ultimo clicado

        // ALTERA O NOME DO ESTACIONAMENTO AGENDADO PARA O ULTIMO ACESSADO
        ultimoagendado = localStorage.getItem("estacionamento_agendado");
        agendado1 = document.getElementById('agendado1');
        penultimoAgendado = localStorage.getItem("texto_agendado1");
        agendado2.querySelector("a").textContent = penultimoAgendado;
        localStorage.setItem("texto_agendado1", (agendado1.querySelector("a").textContent = ultimoagendado));
        agendado1.querySelector("a").textContent = ultimoagendado;
    }
});
