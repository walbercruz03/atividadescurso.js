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
constructor (cpf,datanascimento,nome,cargo,salario,matricula,calc){
    super (cpf,datanascimento,nome)
    this.cargo = cargo
    this.#salario = salario
    this.#matricula = matricula
    this.calc = calc
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
    // this.#salario = Number (prompt ('Digite seu salario: '))
    console.log (`Cargo: ${this.cargo} \nMatricula: ${this.#matricula}`)
}calculohoraext(){
    this.calc = Number (prompt ('Digite as horas extras: '))
    let resultado = (this.calc * 15)
    return resultado
}metcalculasal(){
    let calcc = this.calculohoraext()
    console.log (this.calc, "-", this.#salario)
    let calhs
    if (this.calc>0){
        calhs = calcc + this.#salario - (this.#salario * 0.09)
        console.log (`Salario + HR: $${calhs}`)
    }else {
        calhs = calcc + this.#salario - (this.#salario * 0.075)
        console.log (`Salario sem HR + desconto de 7.5: $${calhs}`)
    }
}metcontracheque(){
let calcc = this.calculohoraext()
let calhs
if (this.calc>0){
    calhs = calcc + this.#salario - (this.#salario * 0.09)
        console.log (`Seu salario: ${this.#salario}\nNumero de horas extras: ${this.calc} \nSalario + HR com desconto de 9%: $${calhs}`)
}
}

} 


let funcionario = new Funcionario()
funcionario.mostrartodas()
funcionario.salario = Number (prompt ('Digite seu salario: '))
funcionario.metcalculasal()
funcionario.metcontracheque()


