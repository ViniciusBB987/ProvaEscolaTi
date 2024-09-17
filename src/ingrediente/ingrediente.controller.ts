import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { IngredienteService } from './ingrediente.service';
import { CreateIngredienteDto } from './dto/create-ingrediente.dto';
import { UpdateIngredienteDto } from './dto/update-ingrediente.dto';

@Controller('ingrediente')
export class IngredienteController {
  constructor(private readonly ingredienteService: IngredienteService) {}

  @Get()
  findAll() {
    return this.ingredienteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.ingredienteService.findOne(id);
  }

  @Post()
  create(@Body() createIngredienteDto: CreateIngredienteDto) {
    return this.ingredienteService.create(createIngredienteDto);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateIngredienteDto: UpdateIngredienteDto) {
    return this.ingredienteService.update(id, updateIngredienteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.ingredienteService.remove(id);
  }
}
