import PromptSync from 'prompt-sync'
const prompt = PromptSync()

let exercicio = prompt ('Qual exercicio você praticou caminhada, corrida ou bicicleta: ')
let tempom = Number(prompt('Quantos minutos você praticou? '))

function caloriasgastas(exercicio, tempom) {
   if (exercicio === 'caminhada') {
      return tempom * 5

   }else if (exercicio === 'corrida') {
      return tempom * 10
   }else if (exercicio === 'bicicleta') {
      return tempom * 8
}}
caloriasgastas(exercicio, tempom)
console.log('Você praticou', exercicio, 'por', tempom, 'minutos e gastou', caloriasgastas(exercicio, tempom), 'calorias.')