import PromptSync from "prompt-sync";
const prompt = PromptSync()

export class Pessoa {
    #cpf
    
    constructor (cpf, datanascimento, nome){
        this.nome = nome
        this.#cpf = cpf
        this.datanascimento = datanascimento
    }get cpf (){
        return this.#cpf
    }set cpf (cpf){
        this.#cpf = cpf
    }metmostrainformacoes () {
         this.nome = prompt ('Digite seu nome: ')
         this.#cpf =  (prompt ('Digite seu CPF: '))
         this.datanascimento =  (prompt ('Digite sua data de nascimento: '))
         console.log (`Seu nome é: ${this.nome} Nascimento: ${this.datanascimento} CPF: ${this.#cpf} `)
    }
}


export class Funcionario extends Pessoa {

#salario
#matricula
constructor (cpf,datanascimento,nome,cargo,salario,matricula){
    super (cpf,datanascimento,nome)
    this.cargo = cargo
    this.#salario = salario
    this.#matricula = matricula
}
get salario (){
    return this.#salario
}set salario (sal){
    this.#salario = sal
}get matricula (){
    return this.#matricula
}set matricula (mat){
    this.#matricula = mat
}mostrartodas(){
    super.metmostrainformacoes()
    this.cargo = prompt ('Qual seu cargo? ')
    this.#matricula = prompt ('Digite sua matricula: ')
    this.#salario = prompt ('Digite seu salario: ')
    console.log (`Cargo: ${this.cargo} \nMatricula: ${this.#matricula} \nSalario: $${this.#salario}`)
}calculohoraext(calc){
    calc = Number (prompt ('Digite as horas extras: '))
    let resultado = (calc * 15).toFixed(2)
    console.log (`Valor de horas extras:$${resultado}`)
}

}


let dadosfunc = new Funcionario()
dadosfunc.mostrartodas()
let calchx = new Funcionario ()
calchx.calculohoraext()
