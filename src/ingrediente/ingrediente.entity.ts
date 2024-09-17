import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Receita } from '../receita/receita.entity';

@Entity()
export class Ingrediente {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @ManyToOne(() => Receita, (receita) => receita.ingredientes)
  receita: Receita;
}
