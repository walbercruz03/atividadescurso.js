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
        let adicionar = prompt (`Digite o item para adicionar ${dias[i]} - ${turnos[j]} (Ou enter para pular)`)
        if (adicionar){
            cardapiodias[i][j]+= ',' + adicionar
            
        }
    }
}console.table (cardapiodias)