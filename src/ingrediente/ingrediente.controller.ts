import { Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { IngredienteService } from './ingrediente.service';

@Controller('ingrediente')
export class IngredienteController {}

@Get() 
findAll() 
{return ‘Listagem de Ingredientes’;}

@Get(‘:id’) 
findOne(@param(‘id’) id: number )
{return ‘Ingredientes com ID ${+id}’; }

@Post() 
create(@Body() body)
{ return body; }

@Patch(‘:id’) update(@Param(‘id’) id: number, @Body() body){
    console.log(message: body);
    return ‘Update Ingrediente with ID ${+id}’;}

@Delete(‘:id’) 
remove(@param(‘id’) id: number) 
{ return ‘Delete Ingrediente with ID ${+id}’;}

export class IngredienteController{
    constructor(private readonly ingredienteService: IngredienteService) {}
}