//ERREI

let stringPontuacoes = '30, 32, 35, 10, 20, 0, 4, 56'

function mostrarPontuacoes(stringPontuacoes) {
  let pontuacoes = stringPontuacoes.split(', ')
  let qntdRecords = 0
  let piorJogo = 1
  let maiorPontuacao = pontuacoes[0]
  let menorPontuacao = pontuacoes[0]

  for (let i = 1; i < pontuacoes.length; i++) {
    if (pontuacoes[i] > maiorPontuacao) {
      maiorPontuacao = pontuacoes[i]
      qntdRecords++
    } else if (pontuacoes[i] < menorPontuacao) {
      menorPontuacao = pontuacoes[i]
      piorJogo = i + 1
    }
  }

  return [qntdRecords, piorJogo]
}

console.log(mostrarPontuacoes(stringPontuacoes))
