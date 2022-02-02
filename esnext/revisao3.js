const obj = {a: 1, b: 2, c: 3}
console.log(Object.keys(obj))
console.log(Object.values(obj))
console.log(Object.entries(obj))


class Animal {
    constructor(raca, peso) {
        this.raca = raca
        this.peso = peso + 'kg'
    }

    falar() {
        return 'Eu sou um animal!'
    }
}
class Cachorro extends Animal {
    latir() {
        return 'Au! Au!'
    }
}

const cachorro = new Cachorro('Pitbull', 15)

console.log(cachorro)
console.log(cachorro.peso)
console.log(cachorro.falar())
console.log(cachorro.latir())