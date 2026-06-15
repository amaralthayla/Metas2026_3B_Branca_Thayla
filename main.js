const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

// Troca de abas
for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {

        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }

        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    };
}

// Contadores - Datas atualizadas para 2026
const tempos = [
    new Date("2026-12-31T00:00:00"),
    new Date("2026-09-05T00:00:00"),
    new Date("2026-12-31T00:00:00"),
    new Date("2026-12-31T00:00:00")
];

// Função que calcula o tempo restante
function calculaTempo(tempoObjetivo) {
    const tempoAtual = new Date();
    const tempoFinal = tempoObjetivo - tempoAtual;

    if (tempoFinal <= 0) {
        return {
            dias: 0,
            horas: 0,
            minutos: 0,
            segundos: 0
        };
    }

    let segundos = Math.floor(tempoFinal / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);

    segundos = segundos % 60;
    minutos = minutes % 60; // Corrigido escopo interno se necessário
    horas = horas % 24;

    return {
        dias,
        horas,
        minutos,
        segundos
    };
}

// Atualiza os contadores na tela apontando para os IDs corretos do HTML
function atualizarContadores() {
    for (let i = 0; i < tempos.length; i++) {
        const tempo = calculaTempo(tempos[i]);

        // Atualiza apenas os números internos sem apagar as palavras "dias", "horas", etc.
        document.getElementById(`dias${i}`).textContent = tempo.dias;
        document.getElementById(`horas${i}`).textContent = tempo.horas;
        document.getElementById(`min${i}`).textContent = tempo.minutos;
        document.getElementById(`seg${i}`).textContent = tempo.segundos;
    }
}

// Atualiza imediatamente
atualizarContadores();

// Atualiza a cada segundo
setInterval(atualizarContadores, 1000);
