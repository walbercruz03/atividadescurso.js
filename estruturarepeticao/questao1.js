import promptsync from 'prompt-sync'
const prompt = promptsync()
let i = 1
console.log ('Quantidade de itens')

for (i=1;i<=50;i++){

    let valor = i*6.99
console.log (i+'º -  R$'+valor.toFixed(2))

}