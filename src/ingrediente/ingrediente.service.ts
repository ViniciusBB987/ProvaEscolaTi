import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ingrediente } from './ingrediente.entity';
import { CreateIngredienteDto } from './dto/create-ingrediente.dto';
import { UpdateIngredienteDto } from './dto/update-ingrediente.dto';

@Injectable()
export class IngredienteService {
  constructor(
    @InjectRepository(Ingrediente)
    private ingredienteRepository: Repository<Ingrediente>,
  ) {}

  findAll(): Promise<Ingrediente[]> {
    return this.ingredienteRepository.find();
  }

  findOne(id: number): Promise<Ingrediente> {
    return this.ingredienteRepository.findOne({ where: { id } });
  }

  create(createIngredienteDto: CreateIngredienteDto): Promise<Ingrediente> {
    const ingrediente = this.ingredienteRepository.create(createIngredienteDto);
    return this.ingredienteRepository.save(ingrediente);
  }

  async update(id: number, updateIngredienteDto: UpdateIngredienteDto): Promise<Ingrediente> {
    await this.ingredienteRepository.update(id, updateIngredienteDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.ingredienteRepository.delete(id);
  }
}
