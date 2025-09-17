import PromptSync from 'prompt-sync'
const prompt = PromptSync()

let nome1 = prompt ('Digite o nome do primeiro cadidato: ')
let nome2 = prompt ('Digite o nome do segundo cadidato: ')
let soma1 = 0
let soma2 = 0

for (let i = 1; i <= 3; i++) {
    let nota1 = Math.floor( Math.random() * 6)
    let nota2 = Math.floor(Math.random() * 6)
    soma1 += nota1
    soma2 += nota2
    console.log(`A nota do ${i}º teste de ${nome1} foi: ${nota1.toFixed(2)}`)
    console.log(`A nota do ${i}º teste do ${nome2} foi: ${nota2.toFixed(2)}`)

}
if (soma1 > soma2) {
    console.log(`Parabéns '${nome1}', você ganhou, total de pontos: ${soma1.toFixed(2)}`)
}else {
    console.log(`Parabéns '${nome2}', você ganhou. total de pontos: ${soma2.toFixed(2)}`)
}