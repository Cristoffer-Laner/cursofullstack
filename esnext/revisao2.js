// Arrow Function
const soma = (a, b) => a + b
// console.log(soma(1, 5))

// Arrow Function (this)
const lexico1 = () => {console.log(this === exports)}
const lexico2 = lexico1.bind({})
// lexico1()
// lexico2()


// Parâmetro Default
function log(texto = 'Node') {
    console.log(texto)    
}

// log()
// log('Sou mais forte')

// Rest
function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}

// console.log(total(1, 2, 3, 4, 5, 6))

// Spread
const array1 = [1, 2, 3, 4]
const array2 = [...array1, 5, 6, 7, 8]

// console.log(array2)