import PromptSync from "prompt-sync";
const prompt = PromptSync()


export class Memoria {
    #tipo
    #frequencia
    #capacidade
    constructor(tipo,frequencia,capacidade){
        this.#tipo = tipo
        this.#frequencia = frequencia
        this.#capacidade = capacidade
    } get capacidade(){
        return this.#capacidade
    }set capacidade(novamem){
        this.#capacidade = novamem
    }

    metusarmemoria(){
        let qtd = Number( prompt ('Informe a quantidade que deseja usar: '))

        if (qtd<this.#capacidade){
            this.#capacidade -= qtd

            console.log (`Você usou ${qtd} resta ${this.#capacidade}`)
        }else {
            console.log ('Memoria insuficiente!')
        }
    }

} 

let novam = new Memoria ('ram','1.5', 1024)
novam.metusarmemoria()

export class Processador {
    #marca
    #modelo
    #nucleo
    #velocidade
    constructor (marca,modelo, nucleo, velocidade){
        this.#marca = marca
        this.#modelo = modelo
        this.#nucleo = nucleo
        this.#velocidade = velocidade 

    }get marca(){
        return this.#marca = marca
    }set marca (marc) {
    this.#marca = marc
    }get modelo (){
        return this.#modelo = modelo
    }set modelo (mod){
        this.#modelo = mod
    }get nucleo (){
        return this.#nucleo
    }set nucleo (nucl){
        this.#nucleo = nucl
    }get velocidade (){
        return this.#velocidade
    }set velocidade (veloc){
        this.#velocidade
    }

    metexecutarprog(progprocess){
        console.log (`Executando: ${progprocess}`)


    }
}

let progprocess = new Processador ()
progprocess.metexecutarprog('Linux...')

export class Armazenamento {

}