import PromptSync from 'prompt-sync'
const prompt = PromptSync()

let carrinho = ['arroz', 'feijão', 'macarrão', 'carne', 'frango', 'ovo', 'leite', 'pão', 'manteiga', 'queijo']
console.log (carrinho)
let itens = Number (prompt ('Quantos itens deseja exibir no seu carrinho? '))


let exibidos = carrinho.slice (0, itens)
console.log ('Itens no carrinho: [',exibidos.join(' - '),']')

let removido = exibidos.slice (0,-1)

console.log ('Apos 1 removido ficou: [',removido.join(' - '),']')

let promocao = ['arroz','carne','leite']
for (let i=0; exibidos.length; i++){
if (promocao.includes (exibidos[i])){
   console.log ('Seu carrinho contem o',exibidos[i]+' em promoção! Aproveite!')
   break
}}let brindes = ['batom', 'bombom', 'confeito']

 let total = carrinho.concat(brindes)
 console.log ('Itens + brindes:[' ,total.join (' - '),']')