import PromptSync from "prompt-sync"
const prompt = PromptSync()

class lampada {
    constructor (situacao,potencia){
        this.situacao = situacao
        this.potencia = potencia
    } 
    acender (){
        if (this.situacao === 'acesa'){
            console.log ('A lâmpada já está acesa!')
        }
        else {
            this.situacao = 'acesa'
            console.log ('Lâmpada acesa!')
        }
    }
    apagar (){
        if (this.situacao === 'apagada'){
            console.log ('A lâmpada já está apagada!')
        }   
        else {
            this.situacao = 'apagada'
            console.log ('Lâmpada apagada!')
        }
    }
    mostrarSituacao (){
        console.log (`A lâmpada está ${this.situacao} e tem a potência de ${this.potencia}W`)
    }
}
let lamp = new lampada ('apagada',100)
lamp.mostrarSituacao()
let opcao
do {
    console.log ('\n== Menu ==')
    console.log ('1 - Acender a lâmpada')
    console.log ('2 - Apagar a lâmpada')
    console.log ('3 - Mostrar situação da lâmpada')
    console.log ('0 - Sair')
     opcao = prompt ('Escolha uma opção: ')
    switch (opcao){
        case '1':
            lamp.acender()
            break
        case '2':
            lamp.apagar()
            breakj
        case '3':
            lamp.mostrarSituacao()
            break
        case '0':
            console.log ('Saindo...')
            break
        default:
            console.log ('Opção inválida!')
    }
}while (opcao !== '0')