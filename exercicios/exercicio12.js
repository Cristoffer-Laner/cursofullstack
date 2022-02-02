//FUNÇÃO RECURSIVA
// ERREI

function fatorial(n) {
  if (n == 1) return 1
  if (n == 0) return 1

  return n * fatorial(n - 1)
}

console.log(fatorial(7))
