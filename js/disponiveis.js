
document.addEventListener("DOMContentLoaded", function() {
    // MUDA OS ESTACIONAMENTOS SE O USUÁRIO DIGITAR INSPER
    insper = localStorage.getItem("estacionamentos_insper");

    if (insper === "true") {
        estacionamentosDisponiveis = document.querySelectorAll("div > p");
        estacionamentosDisponiveis[0].querySelector("a").textContent = "MultiPark Insper";
        estacionamentosDisponiveis[1].querySelector("a").textContent = "Estacionamento P1";
        estacionamentosDisponiveis[2].querySelector("a").textContent = "Estapar Estacionamentos";
        estacionamentosDisponiveis[3].querySelector("a").textContent = "Memphis Park";
        estacionamentosDisponiveis[4].querySelector("a").textContent = "Eletroposto Insper";
    }

    // GUARDA O NOME DO ESTACIONAMENTO CLICADO
    estacionamentoLinks = document.querySelectorAll("a[href='estacionamentoX.html']");
    estacionamentoLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            const nomeEstacionamento = link.textContent;
            localStorage.setItem("nome_estacionamento_clicado", nomeEstacionamento);
        });


    
});
    //  CRIANDO ABA FILTRAR
// Seleciona o botão de filtros
const botaoFiltros = document.querySelector("a.filtrar");

    botaoFiltros.addEventListener("click", function(event) {
        event.preventDefault();

        if (document.getElementById("postIt")) return;

        const postIt = document.createElement("div");
        postIt.id = "postIt";
        postIt.style.width = "308px";
        postIt.style.height = "324px";
        postIt.style.backgroundColor = "#ffcc00";
        postIt.style.fontFamily = "'Poppins', sans-serif";
        postIt.style.position = "fixed";
        postIt.style.top = "50%";
        postIt.style.left = "50%";
        postIt.style.transform = "translate(-50%, -50%)";
        postIt.style.display = "flex";
        postIt.style.flexDirection = "column";
        postIt.style.justifyContent = "center";
        postIt.style.alignItems = "center";
        postIt.style.borderRadius = "8px";
        postIt.style.boxShadow = "0px 4px 6px rgba(0, 0, 0, 0.2)";
        postIt.style.zIndex = "1000";
        postIt.style.padding = "10px";
        postIt.style.gap = "10px";

        const botaoX = document.createElement("button");
        botaoX.textContent = "X";
        botaoX.style.position = "absolute";
        botaoX.style.top = "10px";
        botaoX.style.left = "10px";
        botaoX.style.backgroundColor = "#333";
        botaoX.style.color = "#ffcc00";
        botaoX.style.border = "none";
        botaoX.style.padding = "5px 10px";
        botaoX.style.borderRadius = "4px";
        botaoX.style.cursor = "pointer";

        botaoX.addEventListener("click", function() {
            postIt.remove();
        });

        postIt.appendChild(botaoX);

        // opção selecionada
        let selecionado = null;

        // botaão ok
        const botaoOk = document.createElement("button");
        botaoOk.textContent = "OK";
        botaoOk.style.position = "absolute";
        botaoOk.style.top = "10px";
        botaoOk.style.right = "10px";
        botaoOk.style.backgroundColor = "#333";
        botaoOk.style.color = "#ffcc00";
        botaoOk.style.border = "none";
        botaoOk.style.padding = "5px 10px";
        botaoOk.style.borderRadius = "4px";
        botaoOk.style.cursor = "pointer";

        botaoOk.addEventListener("click", function() {
            if (selecionado) {
            if (selecionado.textContent === "Com valet") {
                const estacionamentosDisponiveis = document.querySelectorAll("div > p");
                estacionamentosDisponiveis[0].querySelector("a").textContent = "Mais Valet";
                estacionamentosDisponiveis[1].querySelector("a").textContent = "Estapar Estacionamentos";
                estacionamentosDisponiveis[2].querySelector("a").textContent = "Memphis Park";
                estacionamentosDisponiveis[3].querySelector("a").textContent = "E-Estacione";
            }
            else if (selecionado.textContent === "Vagas Grandes") {
                const estacionamentosDisponiveis = document.querySelectorAll("div > p");
                estacionamentosDisponiveis[0].querySelector("a").textContent = "Estapar Estacionamentos";
                estacionamentosDisponiveis[1].querySelector("a").textContent = "Park Plan";
                estacionamentosDisponiveis[2].querySelector("a").textContent = "Tripark";
                estacionamentosDisponiveis[3].querySelector("a").textContent = "Onix Park";
                estacionamentosDisponiveis[4].querySelector("a").textContent = "Memphis Park";
            }
            else if (selecionado.textContent === "Estacionamento Fechado") {
                const estacionamentosDisponiveis = document.querySelectorAll("div > p");
                estacionamentosDisponiveis[0].querySelector("a").textContent = "MultiPark Insper";
                estacionamentosDisponiveis[1].querySelector("a").textContent = "Estacionamento P1";
                estacionamentosDisponiveis[2].querySelector("a").textContent = "Estapar Estacionamentos";
                estacionamentosDisponiveis[3].querySelector("a").textContent = "Onix Park";
                estacionamentosDisponiveis[4].querySelector("a").textContent = "Memphis Park";
            }
            else if (selecionado.textContent === "Sem preferências") {
                const estacionamentosDisponiveis = document.querySelectorAll("div > p");
                estacionamentosDisponiveis[0].querySelector("a").textContent = estacionamentosDisponiveis[0].querySelector("a").textContent;
                estacionamentosDisponiveis[1].querySelector("a").textContent = estacionamentosDisponiveis[1].querySelector("a").textContent;
                estacionamentosDisponiveis[2].querySelector("a").textContent = estacionamentosDisponiveis[2].querySelector("a").textContent;
                estacionamentosDisponiveis[3].querySelector("a").textContent = estacionamentosDisponiveis[3].querySelector("a").textContent;
                estacionamentosDisponiveis[4].querySelector("a").textContent = estacionamentosDisponiveis[4].querySelector("a").textContent;
            }          
        
        }
            postIt.remove();
        });
        

        postIt.appendChild(botaoOk);

        const titulo = document.createElement("p");
        titulo.textContent = "Selecione:";
        titulo.style.fontWeight = "bold";
        titulo.style.fontSize = "20px";
        titulo.style.margin = "0";
        titulo.style.color = "#333";
        postIt.appendChild(titulo);

        const linhas = ["Com valet", "Vagas Grandes", "Estacionamento Fechado", "Sem preferências"];

        linhas.forEach(texto => {
            const linha = document.createElement("p");
            linha.textContent = texto;
            linha.style.margin = "0";
            linha.style.fontSize = "18px";
            linha.style.color = "#333";
            linha.style.cursor = "pointer";
            linha.style.padding = "5px";
            linha.style.width = "100%";
            linha.style.textAlign = "center";
            linha.style.borderRadius = "5px";
            
            linha.addEventListener("click", function() {
                if (selecionado) {
                    selecionado.style.backgroundColor = "";
                    selecionado.style.color = "#333";
                }
                linha.style.backgroundColor = "#333";
                linha.style.color = "#ffcc00";
                selecionado = linha;
            });

            postIt.appendChild(linha);
        });

        document.body.appendChild(postIt);
    });



});

