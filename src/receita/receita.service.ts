import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Receita } from './receita.entity';
import { CreateReceitaDto } from './dto/create-receita.dto';
import { UpdateReceitaDto } from './dto/update-receita.dto';

@Injectable()
export class ReceitaService {
  constructor(
    @InjectRepository(Receita)
    private receitaRepository: Repository<Receita>,
  ) {}

  findAll(): Promise<Receita[]> {
    return this.receitaRepository.find({ relations: ['ingredientes'] });
  }

  findOne(id: number): Promise<Receita> {
    return this.receitaRepository.findOne({ where: { id }, relations: ['ingredientes'] });
  }

  create(createReceitaDto: CreateReceitaDto): Promise<Receita> {
    const receita = this.receitaRepository.create(createReceitaDto);
    return this.receitaRepository.save(receita);
  }

  async update(id: number, updateReceitaDto: UpdateReceitaDto): Promise<Receita> {
    await this.receitaRepository.update(id, updateReceitaDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.receitaRepository.delete(id);
  }
}
