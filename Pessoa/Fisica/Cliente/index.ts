import { Fisica } from "../index.ts";
import { Genero } from "../Genero.ts";
import { EstadoCivil } from "../EstadoCivil.ts";
import {Pessoa} from "../../index.js"//porqeu eu não preciso importar pessoa aqui ?
import { Endereco } from "../../Endereco/index.ts";

export class Cliente extends Fisica{
    private protocoloAtendimento:number;
    constructor(nome:string,telefone:string,email:string, endereco:Endereco, genero:Genero, estadoCivil:EstadoCivil, dataNascimento:Date, protocoloAtendimento:number){
        super(nome,telefone,email,endereco,genero,estadoCivil,dataNascimento)
        this.protocoloAtendimento=protocoloAtendimento
    }
}