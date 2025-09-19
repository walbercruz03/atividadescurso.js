import PromptSync from 'prompt-sync'
const prompt = PromptSync()
let dias = ['segunda', 'terça','quarta','quinta','sexta','sabado','domingo']
let turnos = ['cafe','almoco','janta']
let cardapiodias = [
    ['pao e queijo', 'feijao e arroz','sopa e pao'],
    ['pao e queijo', 'feijao e arroz','sopa e pao'],
    ['pao e queijo', 'feijao e arroz','sopa e pao'],
    ['pao e queijo', 'feijao e arroz','sopa e pao'],
    ['pao e queijo', 'feijao e arroz','sopa e pao'],
    ['pao e queijo', 'feijao e arroz','sopa e pao'],
    ['pao e queijo', 'feijao e arroz','sopa e pao']
]
cardapiodias [0] [0]= ('PAO, QUEIJO')

console.table (cardapiodias)

let indicedia = Number(prompt ('Digite o dia de (0 a 6 - segunda a domingo) '))
let indiceturno = Number(prompt ('Digite o turno (0 a 2 - Café, Almoço e Janta) '))

if (indicedia>= 0 && indicedia < dias.length && indiceturno >= 0 && indiceturno< turnos.length){
    console.log (`A refeição é: ${cardapiodias[indicedia][indiceturno]}`)
}else {
    console.log ('Refeição invalida!')
}

for (let i = 0; i<cardapiodias.length;i++){
    for (let j =0 ; j<cardapiodias[i].length;j++){
        let acao = prompt (`Digite A para adicionar ou R para remover no dia: `).toUpperCase()
        if (acao === 'A'){
            let adicionar = prompt ('Digite o que deseja adicionar: ')
           if (adicionar){ 
            cardapiodias[i][j]+= ',' + adicionar
           }
        }else if (acao === 'R'){
            let remover = prompt ('Digite o que deseja remover: ')
            if (remover){
                let itens = cardapiodias[i][j].split(',').map(item => item.trim())
                itens = itens.filter(item => item.toLowerCase() !== remover.toLowerCase())
                cardapiodias[i][j] = itens.join(', ')
            }
        }
    }
}console.table (cardapiodias)