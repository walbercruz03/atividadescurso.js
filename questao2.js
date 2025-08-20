// questao 2º
import PromptSync from "prompt-sync";
const prompt = PromptSync()
let nome = prompt ("Qual o nome do produto: ")
let preco = Number(prompt("Qual o preço do produto: "))
let desconto = Number (prompt("Qual o valor do desconto: "))
let valordesconto = (desconto*preco)/100

console.log ("O nome do produto é:", nome)
console.log ("O preço do produto é:", preco)
console.log ("O valor do desconto é:",valordesconto)
console.log ("O preço com desconto é:",preco-valordesconto)