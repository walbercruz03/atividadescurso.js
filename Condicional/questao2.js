import PromptSync from 'prompt-sync'
const prompt = PromptSync()
let contaenergia = Number (prompt ('Digite a conta de luz em kWh: '))
let atrasado = prompt ('A conta esta atrasada? (sim/não): ')
let consumo1 = contaenergia*1.20
let consumo2 = contaenergia*1.70
let consumo3 = contaenergia+(contaenergia*0.05)

if (contaenergia<=100 && atrasado==='nao'){
    console.log ('O valor da conta de energia é de R$'+consumo1.toFixed(2))
}if (contaenergia>100 && atrasado==='nao'){
console.log( 'O valor da conta de energia é de R$'+consumo2.toFixed(2))
}
if (contaenergia>1.00 && atrasado==='sim')
    {
console.log ('O valor da conta de energia é de R$'+consumo3.toFixed(2))
}