console.log(this === global);
console.log(this === module);

console.log(this === module.exports);
console.log(this === exports);

function log () {
    console.log('Dentro de uma função...');
    console.log('this === exports:', this === exports);
    console.log('this === module.exports:', this === module.exports);
    console.log('this === global:', this === global);

    this.perigo = 'Cuidado!' //está adicionando em global, visível fora do módulo
}


this.perigo = 'Cuidado!' //está adicionando dentro do objeto module.exports

log()