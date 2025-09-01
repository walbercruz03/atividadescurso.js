import PromptSync from 'prompt-sync'
const prompt = PromptSync()

let n1 = []
let n2 = []
let n3 = []
let i=0
let c = 0

for (i=0;i<10;i++){
    
    n1 [i] = prompt(`Turma 1º digite o ${c+1}º nome: `)
    c++
 

}c=0
for (i=0;i<10;i++){

    n2 [i]= prompt(`Turma 2º digite o ${c+1}º nome: `)
    c++
}for (i=0;i<10;i++){
    n3.push(n1[i])
    n3.push(n2[i])
 
}console.log ('Turma1: '+n1)
console.log ('Turma2: '+n2)
console.log ('Turmas intercaladas: '+n3)