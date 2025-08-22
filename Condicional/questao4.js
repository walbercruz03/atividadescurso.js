
import PromptSync from 'prompt-sync'
const prompt = PromptSync()
let salario = Number (prompt('Qual seu salario: '))
let emprestimo = Number (prompt('Qual o valor do emprestimo: '))
let numeroparcela = Number (prompt('Qual o numero de parcelas: '))

let valorparcela = emprestimo / numeroparcela
let jurosparcela = valorparcela * 1.035 // 3.5% de juros
let limite = salario*0.3 // 30% do salario
let totalemprestimo = jurosparcela * numeroparcela // total do emprestimo com juros
if (valorparcela>limite){
    console.log('Emprestimo negado!!')
}else if (valorparcela<=limite){
    console.log('Emprestimo aprovado')
    console.log('Valor solitado: $' + emprestimo.toFixed(2))
    console.log ('Total de parcelas: ' + numeroparcela)
    console.log ('O valor do juros é de 3.5% ao mês!')
    console.log('Total do emprestimo: $' + totalemprestimo.toFixed(2))
    console.log('Valor da parcela: $ ' + jurosparcela.toFixed(2))
}