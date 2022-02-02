const passo1 = (contexto, next) => {
    contexto.valor1 = 'mid1'
    next()
}

const passo2 = (contexto, next) => {
    contexto.valor2 = 'mid2'
    next()
}

const passo3 = (contexto, next) => {
    contexto.valor3 = 'mid3'
    next()
}

const exec = (contexto, ...middlewares) => {
    const execPasso = indice => {
       if (middlewares && indice < middlewares.length) {
            middlewares[indice](contexto, () => execPasso(indice + 1))
       }
    }
    execPasso(0)
}

const ctx = {}
exec(ctx, passo3, passo1, passo2)
console.log(ctx)
