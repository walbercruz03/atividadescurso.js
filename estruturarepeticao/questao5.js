import promptsync from 'prompt-sync'
const prompt = promptsync()

let salario = 510
let ano = 2010
let percentual = 0.015
while (ano<=2025){
    console.log ('Sálario R$'+salario.toFixed(2))
    salario = salario + (salario * percentual)
    percentual=percentual+0.015
    ano ++
}