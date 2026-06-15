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

// Contadores
const contadores = document.querySelectorAll(".contador");

const tempos = [
    new Date("2027-10-05T00:00:00"),
    new Date("2027-12-05T00:00:00"),
    new Date("2027-12-30T00:00:00"),
    new Date("2027-02-01T00:00:00")
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
    minutos = minutos % 60;
    horas = horas % 24;

    return {
        dias,
        horas,
        minutos,
        segundos
    };
}

// Atualiza os contadores na tela
function atualizarContadores() {
    for (let i = 0; i < contadores.length; i++) {

        const tempo = calculaTempo(tempos[i]);

        contadores[i].innerHTML =
            `${tempo.dias}d ${tempo.horas}h ${tempo.minutos}m ${tempo.segundos}s`;
    }
}

// Atualiza imediatamente
atualizarContadores();

// Atualiza a cada segundo
setInterval(atualizarContadores, 1000);

