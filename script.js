// Array para armazenar os pontos de cada jogador
let pontos = []

// Função para adicionar pontos para um jogador
function adicionarPontos(jogador, pontosGanhos) {
    // Verifica se o jogador já está na lista
    let jogadorExistente = pontos.find(p => p.jogador === jogador);
    
    // Se o jogador já estiver na lista, adiciona os pontos
    if (jogadorExistente) {
        jogadorExistente.pontos += pontosGanhos
    } else {
       //cria um novo objeto e adiciona ao array
        pontos.push({ jogador: jogador, pontos: pontosGanhos })
    }
}

// Função para determinar a patente com base nos pontos
function determinarPatente(pontos) {
    if (pontos >= 0 && pontos < 1000) {
        return "Bronze"
    } else if (pontos >= 1000 && pontos < 2000) {
        return "Prata"
    } else if (pontos >= 2000 && pontos < 3000) {
        return "Ouro"
    } else if (pontos >= 3000 && pontos < 4000) {
        return "Platina"
    } else if (pontos >= 4000 && pontos < 5000) {
        return "Diamante"
    } else {
        return "Mestre"
    }
}

// Função para exibir os pontos e a patente de todos os jogadores
function exibirPontos() {
    pontos.forEach(p => {
        alert(`Jogador: ${p.jogador}, Pontos: ${p.pontos}, Patente: ${determinarPatente(p.pontos)}`)
    });
}

// Função para resetar os pontos de todos os jogadores
function resetarPontos() {
    pontos = []
}

// Função para adicionar pontos inseridos pelo usuário
function adicionarPontosUsuario() {
    let jogador = prompt("Insira o nome do jogador:")
    let pontosGanhos = parseInt(prompt("Insira os pontos ganhos:"))

    if (!isNaN(pontosGanhos)) {
        adicionarPontos(jogador, pontosGanhos)
        exibirPontos()
    } else {
        alert("Por favor, insira um número válido para os pontos.")
    }
}

// Exemplo de uso
adicionarPontosUsuario()