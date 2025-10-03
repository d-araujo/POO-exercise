import { Funcionario } from "../../index.ts"

export interface Contratacao{
    admitir(funcionario: Funcionario):void
    demitir(funcionario: Funcionario):void
}