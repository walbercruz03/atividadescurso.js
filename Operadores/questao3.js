// questao 3º

import PromptSync from 'prompt-sync'

const prompt = PromptSync ()
let altura = Number (prompt("Qual a altura: "))
let  largura = Number(prompt("Qual a largura: "))
let area = altura*largura
let perimetro = 2*(altura+largura)
console.log ("Area =",area)
console.log("Perimetro = ",perimetro)
