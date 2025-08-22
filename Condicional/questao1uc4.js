import PromptSync from 'prompt-sync'
const prompt = PromptSync()
let velocidadepermitida = Number(prompt('Digite a velocidade permitida: '))
let velocidadeveiculo = Number(prompt('Digite a velocidade do veículo: '))

let multa = velocidadepermitida+(velocidadepermitida*0.10) // 10% acima da velocidade permitida 
if (velocidadeveiculo>velocidadepermitida && velocidadeveiculo<=multa) {

    console.log('Atenção: acima da velocidade permitida, multa leve!')
} if (velocidadeveiculo>multa){
    console.log('Atenção: acima do permitido, multa grave!')

}else if (velocidadeveiculo<=velocidadepermitida) {
    console.log('Velocidade permitida, sem multa!')
}