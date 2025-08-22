import PromptSync from 'prompt-sync'
const prompt = PromptSync()
let tipo = prompt('Qual o tipo de veiculo: ')
let tempo = Number(prompt('Qual o tempo de permanencia que você permaneceu: '))
let moto = 7.00
let carro = 12.00
let caminhao = 25.00
let acrescimo1 = 3
let tempo1 = acrescimo1 * tempo
let tempo2 = tempo * 5
let result3 = (tempo2 + caminhao) - 10
let result = (tempo1 + carro) - 6
let result2 = (tempo1 + moto) - 6


if (tempo <= 2 && tipo === 'carro') {
    console.log('O valor deu: $' + carro)
} if (tempo <= 2 && tipo === 'moto') {
    console.log('O valor deu: $' + moto)
} if (tempo <= 2 && tipo === 'caminhao') {
    console.log('O valor deu: $' + caminhao)
} else if (tempo > 2 && tipo === 'carro') {
    console.log('O valor com acrescimo é: $' + result)
} else if (tempo > 2 && tipo === 'moto') {
    console.log('O valor deu: $' + result2)
} else if (tempo > 2 && tipo === 'caminhao') {
    console.log('O valor deu: $' + result3)
}




