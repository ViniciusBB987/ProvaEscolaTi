import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { ReceitaService } from './receita.service';

@Controller('receita')
export class ReceitaController {}

@Get() 
findAll(){return this.receitaService.findAll();}

@Get(‘:id’) 
findOne(@param(‘id’) id: number ) { return this.receitaService.findOne(+id); }

@Post() 
create(@Body() body){ return this.receitaService.create(body); }

@Put(‘:id’) 
update(@param(‘id’) id: number, @Body() body){
return this.receitaService.update(+id, body);}

@Delete(‘:id’) 
remove(@param(‘id’) id: number) { return this.receitaService.remove(+id);}

export class ReceitaController{
    constructor(private readonly receitaService: ReceitaService) {}
}