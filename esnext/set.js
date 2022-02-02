// Não indexado e não aceita repetição
const times = new Set()
times.add('Vasco')
times.add('Grêmio').add('Flamengo').add('Internacional').add('São Paulo')
times.add('Vasco')

console.log(times)
console.log(times.size)
console.log(times.has('grêmio'))
console.log(times.has('Grêmio'))
times.delete('Flamengo')
console.log(times.has('Flamengo'))

const nomes = ['Cristoffer', 'Ana', 'Guilherme', 'Lucas', 'Ana']
const nomesSet = new Set(nomes)
console.log(nomesSet);