import PromptSync from 'prompt-sync'
const prompt = PromptSync()

let animais = ['leao', 'tigre', 'elefante', 'girafa', 'zebra', 'hipopótamo', 'rinoceronte', 'crocodilo',]
console.log(animais.join(' - '))

let novoanimais = []
let quantidade = Number(prompt('Quantos animais deseja adicionar? '))
for (let i = 0; i < quantidade; i++) {
    let adicionar = prompt('Digite o nome do animal que deseja adicionar: ')
    novoanimais.push(adicionar)
} let total = animais.concat(novoanimais)
console.log('Animais no zoologico: [', total.join(' - '), ']')

let remover
console.log('Opção 1: Remover o primeiro animal, Opcão 2: Remover o último animal, Opção 3: remove escolhendo o indice')
remover = Number(prompt('Escolha a opção desejada: '))
if (remover === 1) {
    total.shift()
    console.log('Após remoção do primeiro animal: [', total.join(' - '), ']')
} if (remover === 2) {
    total.pop()
    console.log('Após remoção do último animal: [', total.join(' - '), ']')
} if (remover === 3) {
    let indice = Number(prompt('Digite o índice do animal que deseja remover: '))
    total.splice(indice, 1)
    console.log('Após remoção do animal no índice', indice + ': [', total.join(' - '), ']')
}