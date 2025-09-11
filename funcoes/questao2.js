import PromptSync from 'prompt-sync'
const prompt = PromptSync()

let saldo = Number(prompt('Qual seu saldo: '))

function depositar(saldo, valor) {
    return saldo + valor
}

function saque(saldo, valor) {
    return saldo - valor
}
let valordeposito = Number(prompt('Qual valor deposito: '))

saldo = depositar(saldo, valordeposito)
console.log('Seu novo saldo e: ' + saldo)

let novodeposito = prompt('Deseja um novo deposito; ')

if (novodeposito === 'sim') {
    let valordeposito = Number(prompt('Digite o valor: '))
    saldo = depositar(saldo, valordeposito)
    console.log('novo saldo: ', saldo)}

 if (novodeposito === 'nao' || novodeposito === 'sim') {
   
    let sacarop = prompt('Deseja fazer um saque? ')
    if (sacarop === 'sim') {
        let valorsaq = Number(prompt('Digite o valor para saque: '))
         if (valorsaq>saldo){
        console.log  ('Saldo insuficiente')
    }else {
        saldo = saque(saldo, valorsaq)
        console.log('O valor do saque: $' + valorsaq, 'saldo atualizado: $' + saldo)
    }
} 
 }
