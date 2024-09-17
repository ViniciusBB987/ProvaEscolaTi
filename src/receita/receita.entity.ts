import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Ingrediente } from '../ingrediente/ingrediente.entity';

@Entity()
export class Receita {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  tempoPreparo: number;

  @Column('float')
  custoAproximado: number;

  @OneToMany(() => Ingrediente, (ingrediente) => ingrediente.receita, { cascade: true })
  ingredientes: Ingrediente[];
}
