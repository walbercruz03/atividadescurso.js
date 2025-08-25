import PromptSync from 'prompt-sync'
const prompt = PromptSync()

let operacao = prompt ('Qual o tipo de operação Básica ou Avançada: ')

if (operacao ==='basica'){
    let tipoop = prompt ('Qual o tipo de operação Soma, Subtração, multiplicação, Divisão: ')
    let n1 = Number (prompt('Digite o primeiro número: '))
    let n2 = Number (prompt ('Digite o segundo número: '))
 
    switch(tipoop){
        case 'soma':
            console.log ('O valor da soma é: '+(n1+n2).toFixed(2))
            break

        case 'subtracao':
            console.log ('O valor da subtração é: '+(n1-n1).toFixed(2))
            break

        case 'multiplicacao':
            console.log ('O valor da multiplicação é: '+(n1*n2).toFixed(2))
            break

        case 'divisao':
            if (n2<=0){
            console.log ('O denominador deve ser maior que 0!')
            }else{
            console.log ('O valor da Divisão é: '+ (n1/n2).toFixed(2))
            
            }break
    }
}else if (operacao==='avancada'){
    let tipo = prompt ('Qual o tipo Raiz ou Potenciação:')
    let numero = Number (prompt('Digite o numero: '))

    switch(tipo){

        case 'raiz':
            console.log ('O resultado da raiz é: '+ Math.sqrt(numero).toFixed(2))
        break

        case 'potencia':
            let numero2 = Number (prompt('Digite o segundo número: '))
            console.log ('O valor da potencia é: '+ Math.pow(numero,numero2).toFixed(2))
    }
}