// Callback Hell
setTimeout(() => {
    console.log('Executando callback 1...');

    setTimeout(() => {
        console.log('Executando callback 2...');
    
        setTimeout(() => {
            console.log('Executando callback 3...');
            
        }, 2000)
    }, 2000)
}, 2000)

// Promise

function esperarPor(tempo = 0) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('Executando Promise...')
            resolve()
        }, tempo * 1000)
    })
}

esperarPor(2)
    .then(esperarPor(4))
    .then(esperarPor(6))