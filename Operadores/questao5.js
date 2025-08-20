// questao 5º

import PromptSync from 'prompt-sync'

const prompt = PromptSync ()
let distancia = Number (prompt("Qual a distancia em km: "))
let km = 5
let resultado = (distancia*km)+10

console.log ("O valor a ser pago é:", resultado.toFixed(2))
