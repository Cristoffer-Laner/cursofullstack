require('./global')

console.log(MinhaApp.saudacao());

MinhaApp.nome = 'Eita!' // modificado de qualquer lugar pois está no global

console.log(MinhaApp.nome);// problema!!

// global está com freeze
// evite mexer no global!! use o sistema de módulos do node


















