import promptsync from 'prompt-sync'
const prompt = promptsync()

let numero = Number(prompt ('Digite o valor: '))
let resultado=numero
while (numero !== 0){
    numero = Number(prompt ('Digite o valor: '))

    resultado = resultado+numero
    
}console.log ('R$'+resultado)