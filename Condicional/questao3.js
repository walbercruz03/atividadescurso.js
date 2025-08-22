import PromptSync from 'prompt-sync'
const prompt = PromptSync()
let valor = Number (prompt('Qual o valor da compra: '))
let desconto1 = valor - (valor*0.05)
let desconto2 = valor - (valor*0.10)

if (valor<=100){
    console.log ('O valor da sua compra é: $'+valor)
}if (valor>100 && valor <=500){
    console.log ('Opa, você garantiu o desconto de 5%. Parabéns!')
    console.log ('O valor da compra é: $'+valor)
    console.log ('Valor com desconto: $'+desconto1)
}if (valor>500){
    console.log ('Opa, você garantiu o desconto de 10%. Parabéns!')
    console.log ('O valor da compra é: $'+valor)
    console.log ('O valor com desconto é: $'+desconto2)
}else if (valor>300){
    console.log ('Parabéns, você ganhou um cupom bônus para usar na proxima compra!!')
}

