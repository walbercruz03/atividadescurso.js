import PromptSync from 'prompt-sync'
const prompt = PromptSync()

let produtos = ['calça', 'camisa', 'bermuda', 'tênis', 'boné', 'cueca', 'meia', 'jaqueta', 'blusa', 'casaco']
console.log(produtos)
produtos.splice(4, 3)
console.log(produtos)

let novoproduto = ['sapato', 'sandália', 'chinelo', 'bota', 'sapatênis', 'mocassim', 'pantufa', 'tamanco', 'galocha', 'alpargata']

let todosprodutos = produtos.concat(novoproduto)
console.log(todosprodutos)

let buscar = prompt('Digite o produto que deseja encontrar: ')
let encontrado = false
for (let i = 0; i < todosprodutos.length; i++) {
    if (todosprodutos[i] === buscar) {
        console.log(`O produto ${buscar} foi encontrado no índice ${i}`)
        encontrado = true
        break
    }
}
if (!encontrado) {
    console.log(buscar, 'Produto não encontrado')

}