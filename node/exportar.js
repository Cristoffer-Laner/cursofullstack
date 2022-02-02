console.log(module.exports);
console.log(module.exports === this);
console.log(module.exports === exports);

this.a = 1
exports.b = 2
module.exports.c = 3

exports = {
    nome: 'Teste'
}

console.log(module.exports);

exports = null

console.log(module.exports);

module.exports = {
    d: 4,
    e: 5,
    f: 6
}

console.log(module.exports);