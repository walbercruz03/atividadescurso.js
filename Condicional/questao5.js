import PromptSync from 'prompt-sync'
const prompt = PromptSync()

let idade = Number (prompt('Qual sua idade: '))
let estudante = Number (prompt('você é estudante: '))

if (idade<6){
    console.log ('Entrada gratuita!')
}if (idade>6 && idade <= 17 || estudante ==='sim' ){
    console.log ('Tarifa meia!!')
}else if (idade>=18 && idade <= 59){
    console.log ('Tarifa inteira')
}else if (idade>=60){
    console.log ('Tarifa gratuita!!')
}