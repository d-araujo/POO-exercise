import { Genero } from "./Genero.ts";
import { EstadoCivil } from "./EstadoCivil.ts";
import {Pessoa} from "../index.ts"
import { Endereco } from "../Endereco/index.ts";//unidade federativa ja vem junto ?



export abstract class Fisica extends Pessoa{
    protected genero:Genero;
    protected estadoCivil:EstadoCivil;
    protected dataNascimento:Date

    constructor(nome:string,telefone:string,email:string, endereco:Endereco, genero:Genero, estadoCivil:EstadoCivil, dataNascimento:Date){
        super(nome,telefone,email,endereco)
        this.genero=genero;
        this.estadoCivil=estadoCivil;
        this.dataNascimento=dataNascimento;
    }

        getIdade():number{
        let hoje=new Date()
        let idade=0
        idade=hoje.getFullYear()-this.dataNascimento.getFullYear()
        if(hoje.getMonth()<this.dataNascimento.getMonth()){
            idade--
        }
        else if(hoje.getMonth()==this.dataNascimento.getMonth() && hoje.getDay()<this.dataNascimento.getDay()){
            idade--
        }
        
        return idade
    }

}
