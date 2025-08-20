
// questao 4º
import PromptSync from 'prompt-sync'

const prompt = PromptSync ()
let conta = Number (prompt("Qual o valor da conta: "))
let pessoas = Number (prompt("Qual o numero de pessoas: "))
let contaacrescimo = conta*1.10
let valorpessoa = contaacrescimo/pessoas

console.log("O valor da conta é: ",contaacrescimo.toFixed(2))
console.log ("O valor por pessoa é: ",valorpessoa.toFixed(2))
