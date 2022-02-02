//ERREI ESSA

function jurosSimples(capInicial, taxa, tempo) {
  return capInicial * (1 + tempo * taxa)
}

console.log(jurosSimples(100, 0.1, 5).toFixed(2))

function jurosComposto(capInicial, taxa, tempo) {
  return capInicial * (1 + taxa) ** tempo
}

console.log(jurosComposto(100, 0.01, 6).toFixed(2))
