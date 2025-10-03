import { Fisica } from "../index.ts";
import { Genero } from "../Genero.ts";
import { EstadoCivil } from "../EstadoCivil.ts";
import {Pessoa} from "../../index.ts"//porqeu eu não preciso importar pessoa aqui ?
import { Endereco } from "../../Endereco/index.ts";
import {Decimal} from "decimal.js"
import type { SalarioFinal } from "./SalarioFinal.ts";//when you are importing only interfaces or types you need to declare a import type 
import { Setor } from "./Setor.ts";

export abstract class Funcionario extends Fisica implements SalarioFinal{
    protected cpf:string;
    protected rg:string;
    protected matricula:string
    protected setor:Setor
    protected salario:Decimal

    constructor(nome:string,telefone:string,email:string, endereco:Endereco, genero:Genero, estadoCivil:EstadoCivil, dataNascimento:Date, cpf:string, rg:string,matricula:string,setor:Setor,salario:Decimal){
        super(nome,telefone,email,endereco,genero,estadoCivil,dataNascimento)
        this.cpf=cpf
        this.rg=rg
        this.matricula=matricula
        this.setor=setor
        this.salario=salario
        }


    getSalarioFinal(): Decimal {
        return this.salario.times(1.1)
    }
}