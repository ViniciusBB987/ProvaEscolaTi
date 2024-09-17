import { Injectable } from '@nestjs/common';
import { Receita } from './receita.entity';

@Injectable(
    private receita: Receita[] = [{id: 1, nome: ‘Estrogonofe’,  tempoPreparo: 40, custoAproximado: 20}])

    findAll()
    {return this.receita}
    
    findOne(id: number) 
    {return this.receita.find(receita => receita.id === id)}
    
    create(createReceitaDTO: any)
    {this.receita.push(createReceitaDTO)}
    
    update(id: number, updateReceitaDTO: any)
    {const existingReceita = this.findOne(id)
    if (existingReceita){ const index = this.receita.findIndex(receita=> receita.id === id)
    this.receita[index] = {id, … updatReceitaDTO,}}}
    
    remove(id: number){ const index = this.receita.findIndex(receita=> receita.id === id)
    if (index >= 0){ this receita.splice(index, 1)}}

export class ReceitaService {}
