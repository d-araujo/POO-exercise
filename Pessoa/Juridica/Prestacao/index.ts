import { Juridica } from "../index.ts";

class PerstacaoServico{
    private contratoInicio:Date;
     private contratoFim:Date
    constructor(contratoInicio:Date,contratoFim:Date)
    {
        this.contratoInicio=contratoInicio;
        this.contratoFim=contratoFim
    }

    toString():string{
        return `Inicio do contrato: ${this.contratoInicio},  
        Final do contrato: ${this.contratoFim}`
    }
}

let a= new PerstacaoServico(new Date(2020/0/1), new Date(2025/0/1))
//erro
console.log(a)