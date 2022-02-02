// let e const
{
	var a = 2
	let b = 3
//   log(b) precisa ser aqui <--
}
// console.log(a)
// console.log(b) // erro


// Template String
const produto = 'Ipad'
// console.log(`${produto} é caro!`)


// Destructuring
const [l, e, ...tras] = 'Cristoffer'
console.log(l, e, tras);

const [x, , y] = [1, 2, 3]
console.log(x, y)

const {idade: i, nome: n} = {idade: 13, nome: 'Cris'}
console.log(i, n)