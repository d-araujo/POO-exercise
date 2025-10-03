import { Funcionario } from "../../index.ts";
import { Fisica } from "../../../index.ts";
import { Genero } from "../../../Genero.ts";
import { EstadoCivil } from "../../../EstadoCivil.ts";
import {Pessoa} from "../../../../index.ts"//porqeu eu não preciso importar pessoa aqui ?
import { Endereco } from "../../../../Endereco/index.ts";
import {Decimal} from "decimal.js"
import type { SalarioFinal } from "../../SalarioFinal.ts";//when you are importing only interfaces or types you need to declare a import type 
import { Setor } from "../../Setor.ts";

export class Engenheiro extends Funcionario{
    private crea:string
     constructor(nome:string,telefone:string,email:string, endereco:Endereco, genero:Genero, estadoCivil:EstadoCivil, dataNascimento:Date, cpf:string, rg:string,matricula:string,setor:Setor,salario:Decimal, crea:string){
        super(nome,telefone,email,endereco,genero,estadoCivil,dataNascimento,cpf,matricula,rg,setor,salario)
        this.crea=crea
    
    }
    
}